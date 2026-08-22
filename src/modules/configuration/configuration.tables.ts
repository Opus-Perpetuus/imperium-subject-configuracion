import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const configuration_tables: KirletTableDecl[] = [
  {
    name: "configuration",
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
      { name: "is_system", type: "boolean" },
      { name: "model_id", type: "text" },
      { name: "module_id", type: "text" },
      { name: "value", type: "json" },
      { name: "type", type: "text" },
      { name: "user_id", type: "text" },
    ],
    indexes: [
      { name: "idx_configuration_name", columns: ["name"] },
      { name: "idx_configuration_active", columns: ["is_active"] },
    ],
  },
];
