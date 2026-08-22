import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { zpl_management_pages } from "./zpl-management.pages.ts";
import { zpl_management_tables } from "./zpl-management.tables.ts";

export const zpl_management_module = define_module({
  resource: "zpl-management",
  labels: {
    singular: "Impresoras Zebra",
    plural: "Impresoras Zebra",
    read: "Ver Impresoras Zebra",
    write: "Editar Impresoras Zebra",
  },
  routes: define_crud({
    resource: "zpl-management",
    table: "zpl_management",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "zpl-mana",
    fields: {
      name: { type: "string", required: true, search: true },
      description: { type: "string", search: true },
      is_active: { type: "boolean" },
      state: { type: "string" },
      ref: { type: "string", search: true },
      search_field: { type: "string", search: true },
      created_by: { type: "string" },
      custom_data: { type: "json" },
      payload: { type: "json" },
      zpl: { type: "string", search: true },
      content: { type: "string", search: true },
      dpmm: { type: "string", search: true },
      label_size_mm_x: { type: "number" },
      label_size_mm_y: { type: "number" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: zpl_management_tables,
  pages: zpl_management_pages,
  menu: [],
});
