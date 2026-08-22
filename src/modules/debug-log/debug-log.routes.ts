import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { debug_log_pages } from "./debug-log.pages.ts";
import { debug_log_tables } from "./debug-log.tables.ts";

export const debug_log_module = define_module({
  resource: "debug-log",
  labels: {
    singular: "Logs del Sistema",
    plural: "Logs del Sistema",
    read: "Ver Logs del Sistema",
    write: "Editar Logs del Sistema",
  },
  routes: define_crud({
    resource: "debug-log",
    table: "debug_log",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "debug-lo",
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
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: debug_log_tables,
  pages: debug_log_pages,
  menu: [],
});
