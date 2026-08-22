import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const custom_pattern_condition_tables: KirletTableDecl[] = [
  {
    name: "custom_pattern_condition",
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
      { name: "part_id", type: "text" },
      { name: "modelo", type: "text" },
      { name: "field_path", type: "text" },
      { name: "expected_value", type: "text" },
      { name: "return_value", type: "text" },
      { name: "is_default_value", type: "boolean" },
      { name: "own_count", type: "boolean" },
    ],
    indexes: [
      { name: "idx_custom_pattern_condition_name", columns: ["name"] },
      { name: "idx_custom_pattern_condition_active", columns: ["is_active"] },
    ],
  },
];
