import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const user_tables: KirletTableDecl[] = [
  {
    name: "user",
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
      { name: "password", type: "text" },
      { name: "email", type: "text" },
      { name: "img", type: "text" },
      { name: "enabled_dashboard_components", type: "json" },
      { name: "employee", type: "text" },
      { name: "start_view", type: "text" },
      { name: "mode", type: "text" },
      { name: "path", type: "text" },
      { name: "view_kind", type: "text" },
      { name: "menu_id", type: "text" },
      { name: "label", type: "text" },
      { name: "reset_password_token_hash", type: "text" },
      { name: "reset_password_expires", type: "text" },
      { name: "reset_password_kind", type: "text" },
    ],
    indexes: [
      { name: "idx_user_name", columns: ["name"] },
      { name: "idx_user_active", columns: ["is_active"] },
    ],
  },
];
