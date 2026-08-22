import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const attachment_management_tables: KirletTableDecl[] = [
  {
    name: "attachment_management",
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
      { name: "name_stored", type: "text" },
      { name: "mimetype", type: "text" },
      { name: "created_by_id", type: "text" },
      { name: "related_model", type: "text" },
      { name: "related_record_id", type: "text" },
      { name: "field", type: "text" },
      { name: "size_in_kb", type: "text" },
      { name: "file_ext", type: "text" },
      { name: "index_if_is_array", type: "text" },
      { name: "inside_array", type: "text" },
    ],
    indexes: [
      { name: "idx_attachment_management_name", columns: ["name"] },
      { name: "idx_attachment_management_active", columns: ["is_active"] },
    ],
  },
];
