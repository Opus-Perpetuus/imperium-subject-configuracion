import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { menu_management_pages } from "./menu-management.pages.ts";
import { menu_management_tables } from "./menu-management.tables.ts";

export const menu_management_module = define_module({
  resource: "menu-management",
  labels: {
    singular: "Manejo de menús",
    plural: "Manejo de menús",
    read: "Ver Manejo de menús",
    write: "Editar Manejo de menús",
  },
  routes: define_crud({
    resource: "menu-management",
    table: "menu_management",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "menu-man",
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
      icon: { type: "string", search: true },
      path: { type: "string", search: true },
      parent_id: { type: "string", search: true },
      order: { type: "string", search: true },
      model: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: menu_management_tables,
  pages: menu_management_pages,
  menu: [],
});
