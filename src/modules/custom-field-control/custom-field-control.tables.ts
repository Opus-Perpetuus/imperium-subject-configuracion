import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const custom_field_control_tables: KirletTableDecl[] = [
  {
    name: "custom_field_control",
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
      { name: "module_name", type: "text" },
      { name: "module_id", type: "text" },
      { name: "model_id", type: "text" },
      { name: "fields_count", type: "text" },
      { name: "field_name", type: "text" },
      { name: "label", type: "text" },
      { name: "type", type: "text" },
      { name: "required", type: "boolean" },
      { name: "enabled", type: "boolean" },
      { name: "show_in_list", type: "boolean" },
      { name: "fields", type: "json" },
    ],
    indexes: [
      { name: "idx_custom_field_control_name", columns: ["name"] },
      { name: "idx_custom_field_control_active", columns: ["is_active"] },
    ],
  },
];
