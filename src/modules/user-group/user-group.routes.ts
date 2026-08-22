import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { user_group_pages } from "./user-group.pages.ts";
import { user_group_tables } from "./user-group.tables.ts";

export const user_group_module = define_module({
  resource: "user-group",
  labels: {
    singular: "Grupos de usuario",
    plural: "Grupos de usuario",
    read: "Ver Grupos de usuario",
    write: "Editar Grupos de usuario",
  },
  routes: define_crud({
    resource: "user-group",
    table: "user_group",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "user-gro",
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
      menus_ids: { type: "string", search: true },
      user_ids: { type: "string", search: true },
      access_rights_ids: { type: "string", search: true },
      record_rules_ids: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: user_group_tables,
  pages: user_group_pages,
  menu: [],
});
