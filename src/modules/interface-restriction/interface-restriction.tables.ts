import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const interface_restriction_tables: KirletTableDecl[] = [
  {
    name: "interface_restriction",
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
      { name: "html_element_hash", type: "text" },
      { name: "allowed_user_groups", type: "text" },
      { name: "allowed_user_groups_id", type: "text" },
      { name: "allowed_user_groups_count", type: "text" },
    ],
    indexes: [
      { name: "idx_interface_restriction_name", columns: ["name"] },
      { name: "idx_interface_restriction_active", columns: ["is_active"] },
    ],
  },
];
