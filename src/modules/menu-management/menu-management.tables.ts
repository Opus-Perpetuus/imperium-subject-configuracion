import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const menu_management_tables: KirletTableDecl[] = [
  {
    name: "menu_management",
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
      { name: "icon", type: "text" },
      { name: "path", type: "text" },
      { name: "parent_id", type: "text" },
      { name: "order", type: "text" },
      { name: "model", type: "text" },
    ],
    indexes: [
      { name: "idx_menu_management_name", columns: ["name"] },
      { name: "idx_menu_management_active", columns: ["is_active"] },
    ],
  },
];
