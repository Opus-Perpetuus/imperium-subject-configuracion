import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const zpl_management_tables: KirletTableDecl[] = [
  {
    name: "zpl_management",
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
      { name: "zpl", type: "text" },
      { name: "content", type: "text" },
      { name: "dpmm", type: "text" },
      { name: "label_size_mm_x", type: "real" },
      { name: "label_size_mm_y", type: "real" },
    ],
    indexes: [
      { name: "idx_zpl_management_name", columns: ["name"] },
      { name: "idx_zpl_management_active", columns: ["is_active"] },
    ],
  },
];
