import type { KirletDataClient, NoxServices } from "@opus-perpetuus/imperium-core-kit";
import { new_id, now_iso } from "@opus-perpetuus/imperium-core-kit";

export const FUNCTION_GROUPS = [
  { ref: "user-group-predial", name: "Predial" },
  { ref: "user-group-presupuesto", name: "Presupuesto" },
  { ref: "user-group-tramites", name: "Trámites" },
  { ref: "user-group-ingresos", name: "Ingresos" },
] as const;

export async function seed_demo(ctx: {
  data: KirletDataClient;
  nox: NoxServices;
  technical_id: string;
}): Promise<void> {
  await seed_groups(ctx);
  const n = await ctx.data.count("attachment_management");
  if (n > 0) return;
  const ts = now_iso();
  await ctx.data.insert("attachment_management", {
    id: new_id("attachme"),
    name: "Documentos y adjuntos (ejemplo)",
    description: "Registro semilla de la app. Sustituye al migrar desde Mongo.",
    is_active: true,
    ref: "seed-configuracion",
    created_at: ts,
    updated_at: ts,
  });
}

async function seed_groups(ctx: { data: KirletDataClient }): Promise<void> {
  const ts = now_iso();
  for (const group of FUNCTION_GROUPS) {
    const found = await ctx.data.findMany("user_group", {
      where: { ref: group.ref },
      limit: 1,
    });
    if (found.length > 0) continue;
    await ctx.data.insert("user_group", {
      id: new_id("user_group"),
      name: group.name,
      ref: group.ref,
      is_active: true,
      created_at: ts,
      updated_at: ts,
    });
  }
}
