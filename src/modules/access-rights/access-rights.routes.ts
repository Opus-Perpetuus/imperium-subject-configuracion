import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { access_rights_pages } from "./access-rights.pages.ts";
import { access_rights_tables } from "./access-rights.tables.ts";

export const access_rights_module = define_module({
  resource: "access-rights",
  labels: {
    singular: "Permisos de acceso",
    plural: "Permisos de acceso",
    read: "Ver Permisos de acceso",
    write: "Editar Permisos de acceso",
  },
  routes: define_crud({
    resource: "access-rights",
    table: "access_rights",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "access-r",
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
      allow_read: { type: "string", search: true },
      allow_update: { type: "string", search: true },
      allow_delete: { type: "string", search: true },
      allow_create: { type: "string", search: true },
      model_id: { type: "string", search: true },
      group_id: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: access_rights_tables,
  pages: access_rights_pages,
  menu: [],
});
