import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const module_management_tables: KirletTableDecl[] = [
  {
    name: "module_management",
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
      { name: "is_enable", type: "boolean" },
      { name: "path", type: "text" },
      { name: "model_id", type: "text" },
      { name: "module_location", type: "text" },
      { name: "module_name", type: "text" },
      { name: "parent_module", type: "text" },
      { name: "module_dependencies", type: "text" },
      { name: "data_installed_at", type: "text" },
      { name: "reference", type: "text" },
    ],
    indexes: [
      { name: "idx_module_management_name", columns: ["name"] },
      { name: "idx_module_management_active", columns: ["is_active"] },
    ],
  },
];
