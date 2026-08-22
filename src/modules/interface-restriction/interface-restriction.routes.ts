import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { interface_restriction_pages } from "./interface-restriction.pages.ts";
import { interface_restriction_tables } from "./interface-restriction.tables.ts";

export const interface_restriction_module = define_module({
  resource: "interface-restriction",
  labels: {
    singular: "Restricciones de interfaz",
    plural: "Restricciones de interfaz",
    read: "Ver Restricciones de interfaz",
    write: "Editar Restricciones de interfaz",
  },
  routes: define_crud({
    resource: "interface-restriction",
    table: "interface_restriction",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "interfac",
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
      html_element_hash: { type: "string", search: true },
      allowed_user_groups: { type: "string", search: true },
      allowed_user_groups_id: { type: "string", search: true },
      allowed_user_groups_count: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: interface_restriction_tables,
  pages: interface_restriction_pages,
  menu: [],
});
