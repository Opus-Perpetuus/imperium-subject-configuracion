import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const access_rights_tables: KirletTableDecl[] = [
  {
    name: "access_rights",
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
      { name: "allow_read", type: "text" },
      { name: "allow_update", type: "text" },
      { name: "allow_delete", type: "text" },
      { name: "allow_create", type: "text" },
      { name: "model_id", type: "text" },
      { name: "group_id", type: "text" },
    ],
    indexes: [
      { name: "idx_access_rights_name", columns: ["name"] },
      { name: "idx_access_rights_active", columns: ["is_active"] },
    ],
  },
];
