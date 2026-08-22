import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const custom_pattern_increment_sequence_parts_tables: KirletTableDecl[] = [
  {
    name: "custom_pattern_increment_sequence_parts",
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
      { name: "counter_config_id", type: "text" },
      { name: "modelo", type: "text" },
      { name: "token_type", type: "text" },
      { name: "token_value", type: "text" },
      { name: "field_path", type: "text" },
      { name: "counter_index_name", type: "text" },
      { name: "zero_padding", type: "real" },
      { name: "format_mode", type: "text" },
      { name: "condition_field", type: "text" },
      { name: "condition_expected_value", type: "text" },
      { name: "condition_return_value", type: "text" },
      { name: "custom_conditions", type: "text" },
      { name: "order", type: "real" },
    ],
    indexes: [
      { name: "idx_custom_pattern_increment_sequence_parts_name", columns: ["name"] },
      { name: "idx_custom_pattern_increment_sequence_parts_active", columns: ["is_active"] },
    ],
  },
];
