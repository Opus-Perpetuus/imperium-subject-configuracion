import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const api_keys_tables: KirletTableDecl[] = [
  {
    name: "api_keys",
    columns: [
      { name: "id", type: "text", primaryKey: true },
      { name: "name", type: "text", notNull: true },
      { name: "description", type: "text" },
      { name: "is_active", type: "boolean", notNull: true, default: true },
      { name: "state", type: "text" },
      { name: "ref", type: "text", unique: true },
      { name: "search_field", type: "text" },
      { name: "created_by", type: "text" },
      { name: "custom_data", type: "json" },
      { name: "payload", type: "json" },
      { name: "created_at", type: "text", notNull: true },
      { name: "updated_at", type: "text", notNull: true },
      { name: "domain", type: "text" },
      { name: "client", type: "text" },
      { name: "has_expiration", type: "boolean" },
      { name: "expiration_date", type: "text" },
      { name: "api_key", type: "text" },
    ],
    indexes: [
      { name: "idx_api_keys_name", columns: ["name"] },
      { name: "idx_api_keys_active", columns: ["is_active"] },
    ],
  },
];
