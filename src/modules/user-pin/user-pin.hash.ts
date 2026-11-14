import { KirletHttpError, type KirletCtx } from "@opus-perpetuus/imperium-core-kit";

type Row = Record<string, unknown>;

const DEFAULT_LENGTH = 4;
const MAX_LENGTH = 12;

export const USER_PIN_NOTICE_MESSAGE =
  "Guarda este PIN en un lugar seguro. El sistema no lo volvera a mostrar en texto plano.";

const generated_by_ctx = new WeakMap<object, string>();

function pin_type_of(value: unknown): "numeric" | "letters" {
  return String(value ?? "numeric").trim().toLowerCase() === "letters" ? "letters" : "numeric";
}

function pin_length_of(value: unknown): number {
  const n = Number(value ?? DEFAULT_LENGTH);
  if (!Number.isFinite(n)) return DEFAULT_LENGTH;
  return Math.max(1, Math.min(MAX_LENGTH, Math.trunc(n)));
}

function clean_plain(value: unknown, pin_type: string): string {
  const raw = String(value ?? "").trim().toUpperCase();
  return pin_type_of(pin_type) === "letters" ? raw.replace(/[^A-Z]/g, "") : raw.replace(/\D/g, "");
}

function generate(pin_type: string, pin_length: number): string {
  const alphabet = pin_type_of(pin_type) === "letters" ? "ABCDEFGHJKLMNPQRSTUVWXYZ" : "0123456789";
  const bytes = crypto.getRandomValues(new Uint32Array(pin_length));
  let out = "";
  for (const b of bytes) out += alphabet[b % alphabet.length];
  return out;
}

/**
 * El PIN nunca se guarda en texto plano: `plain_pin` («Nuevo PIN») o
 * `regenerate_pin` («Regenerar PIN al guardar») producen un hash argon2id y
 * suben `pin_version`; ninguno de los dos llega a la tabla.
 */
export async function prepare_user_pin_row(
  ctx: KirletCtx,
  row: Row,
  existing: Row | null,
): Promise<Row> {
  const out: Row = { ...row };
  const plain_raw = out.plain_pin;
  const regenerate = out.regenerate_pin === true;
  delete out.plain_pin;
  delete out.regenerate_pin;

  if (typeof out.pin_hash === "string" && out.pin_hash && !out.pin_hash.startsWith("$argon2")) {
    throw new KirletHttpError(
      400,
      "validation_error",
      "El hash del PIN no se escribe a mano. Usa «Nuevo PIN» o «Regenerar PIN al guardar».",
      { field: "pin_hash" },
    );
  }

  const pin_type = pin_type_of(out.pin_type ?? existing?.pin_type);
  const pin_length = pin_length_of(out.pin_length ?? existing?.pin_length);
  const typed = clean_plain(plain_raw, pin_type);
  if (String(plain_raw ?? "").trim() && !typed) {
    throw new KirletHttpError(
      400,
      "validation_error",
      pin_type === "letters" ? "El PIN solo admite letras." : "El PIN solo admite números.",
      { field: "plain_pin" },
    );
  }
  const needs_pin = !existing ? !out.pin_hash : false;
  if (!typed && !regenerate && !needs_pin) return out;

  const pin = typed || generate(pin_type, pin_length);
  out.pin_hash = await Bun.password.hash(pin, { algorithm: "argon2id" });
  out.pin_version = existing ? Number(existing.pin_version ?? 1) + 1 : 1;
  if (!typed) generated_by_ctx.set(ctx, pin);
  return out;
}

export function take_generated_pin(ctx: KirletCtx): string | undefined {
  const pin = generated_by_ctx.get(ctx);
  generated_by_ctx.delete(ctx);
  return pin;
}

export function redact_user_pin_history(row: Row): Row {
  const copy = { ...row };
  delete copy.pin_hash;
  delete copy.plain_pin;
  delete copy.regenerate_pin;
  return copy;
}
