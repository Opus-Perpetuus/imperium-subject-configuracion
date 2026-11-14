import { describe, expect, test } from "bun:test";
import { create_kirlet_test_context } from "@opus-perpetuus/imperium-core-kit";
import { SUBJECT } from "../../subject.ts";

const json = (method: string, body: unknown) => ({
  method,
  headers: { "content-type": "application/json" },
  body: JSON.stringify(body),
});

describe("Pins de usuario: el PIN nunca se guarda en texto plano", () => {
  test("el formulario tiene «Nuevo PIN» y «Regenerar PIN al guardar» y no expone el hash", async () => {
    const { user_pin_pages } = await import("./user-pin.pages.ts");
    const page = user_pin_pages[0]!.build({} as never) as unknown as Record<string, unknown>;
    const text = JSON.stringify(page);
    expect(text).toContain('"name":"regenerate_pin"');
    expect(text).toContain("Regenerar PIN al guardar");
    expect(text).toContain('"name":"plain_pin"');
    expect(text).toContain('"component":"input-password"');
    expect(text).not.toContain('"name":"pin_hash"');
  });

  test("crear con PIN escrito guarda argon2 verificable, versión 1, sin plain_pin", async () => {
    const server = create_kirlet_test_context(SUBJECT);
    const res = await server.fetch(
      new Request("http://t/user-pin", json("POST", { name: "PIN caja", plain_pin: "4321" })),
    );
    expect(res.status).toBe(201);
    const body = (await res.json()) as { data: Record<string, unknown>; user_pin_notice?: unknown };
    expect(body.user_pin_notice).toBeUndefined();
    expect(String(body.data.pin_hash)).toStartWith("$argon2id$");
    expect(await Bun.password.verify("4321", String(body.data.pin_hash))).toBe(true);
    expect(body.data.pin_version).toBe(1);
    expect(body.data.plain_pin).toBeUndefined();
    server.stop();
  });

  test("regenerar al guardar cambia el hash, sube la versión y muestra el PIN una vez", async () => {
    const server = create_kirlet_test_context(SUBJECT);
    const created = (await (
      await server.fetch(new Request("http://t/user-pin", json("POST", { name: "PIN R", plain_pin: "1111" })))
    ).json()) as { data: Record<string, unknown> };
    const id = String(created.data.id);
    const res = await server.fetch(
      new Request(`http://t/user-pin/${id}`, json("PATCH", { regenerate_pin: true, plain_pin: "" })),
    );
    expect(res.status).toBe(200);
    const body = (await res.json()) as {
      data: Record<string, unknown>;
      user_pin_notice?: { generated_pin: string; message: string };
    };
    expect(body.data.pin_hash).not.toBe(created.data.pin_hash);
    expect(body.data.pin_version).toBe(2);
    const pin = body.user_pin_notice?.generated_pin ?? "";
    expect(pin).toMatch(/^\d{4}$/);
    expect(await Bun.password.verify(pin, String(body.data.pin_hash))).toBe(true);
    expect(body.data.regenerate_pin).toBeUndefined();
    server.stop();
  });

  test("un PATCH sin PIN nuevo conserva el hash; un hash escrito a mano se rechaza", async () => {
    const server = create_kirlet_test_context(SUBJECT);
    const created = (await (
      await server.fetch(new Request("http://t/user-pin", json("POST", { name: "PIN K", plain_pin: "2222" })))
    ).json()) as { data: Record<string, unknown> };
    const id = String(created.data.id);
    const kept = (await (
      await server.fetch(new Request(`http://t/user-pin/${id}`, json("PATCH", { name: "PIN K2" })))
    ).json()) as { data: Record<string, unknown> };
    expect(kept.data.pin_hash).toBe(created.data.pin_hash);
    expect(kept.data.pin_version).toBe(1);
    const bad = await server.fetch(new Request(`http://t/user-pin/${id}`, json("PATCH", { pin_hash: "4321" })));
    expect(bad.status).toBe(400);
    const letters = await server.fetch(
      new Request(`http://t/user-pin/${id}`, json("PATCH", { plain_pin: "abcd" })),
    );
    expect(letters.status).toBe(400);
    server.stop();
  });

  test("el lote PUT /user-pin/batch también hashea", async () => {
    const server = create_kirlet_test_context(SUBJECT);
    const created = (await (
      await server.fetch(new Request("http://t/user-pin", json("POST", { name: "PIN B", plain_pin: "3333" })))
    ).json()) as { data: Record<string, unknown> };
    const id = String(created.data.id);
    const res = await server.fetch(
      new Request("http://t/user-pin/batch", json("PUT", [{ _id: id, plain_pin: "9876" }])),
    );
    const body = (await res.json()) as { data: Array<Record<string, unknown>> };
    expect(await Bun.password.verify("9876", String(body.data[0]!.pin_hash))).toBe(true);
    expect(body.data[0]!.pin_version).toBe(2);
    server.stop();
  });

  test("la lista no devuelve el hash", async () => {
    const server = create_kirlet_test_context(SUBJECT);
    await server.fetch(new Request("http://t/user-pin", json("POST", { name: "PIN L", plain_pin: "5555" })));
    const list = (await (await server.fetch(new Request("http://t/user-pin"))).json()) as {
      data: Array<Record<string, unknown>>;
    };
    expect(list.data.length).toBeGreaterThan(0);
    for (const row of list.data) expect(row.pin_hash).toBeUndefined();
    server.stop();
  });
});
