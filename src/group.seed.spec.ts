import { describe, expect, test } from "bun:test";
import { create_kirlet_test_context } from "@opus-perpetuus/imperium-core-kit";
import { FUNCTION_GROUPS } from "./seed.ts";
import { SUBJECT } from "./subject.ts";

describe("grupos de las funciones", () => {
  test("POST /seed deja predial, presupuesto, trámites e ingresos en user-group", async () => {
    const server = create_kirlet_test_context(SUBJECT);
    try {
      const seeded = await server.fetch(new Request("http://t/seed", { method: "POST" }));
      expect(seeded.status).toBe(200);
      const list = await server.fetch(new Request("http://t/user-group"));
      expect(list.status).toBe(200);
      const rows = (
        (await list.json()) as { data?: Array<{ ref?: string; name?: string }> }
      ).data ?? [];
      for (const group of FUNCTION_GROUPS) {
        const hit = rows.find((row) => row.ref === group.ref);
        expect(hit?.name).toBe(group.name);
      }
    } finally {
      server.stop();
    }
  });
});
