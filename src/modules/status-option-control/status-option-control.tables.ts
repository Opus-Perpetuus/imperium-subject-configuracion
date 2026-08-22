import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const status_option_control_tables: KirletTableDecl[] = [
  {
    name: "status_option_control",
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
      { name: "model_id", type: "text" },
      { name: "module_id", type: "text" },
      { name: "is_enable", type: "text" },
      { name: "configuration_id", type: "text" },
      { name: "has_configuration", type: "text" },
      { name: "status_options_count", type: "text" },
      { name: "status_fields_count", type: "text" },
      { name: "option_field_name", type: "text" },
      { name: "option_color", type: "text" },
      { name: "option_icon", type: "text" },
      { name: "option_type", type: "text" },
      { name: "option_is_default", type: "text" },
    ],
    indexes: [
      { name: "idx_status_option_control_name", columns: ["name"] },
      { name: "idx_status_option_control_active", columns: ["is_active"] },
    ],
  },
];
