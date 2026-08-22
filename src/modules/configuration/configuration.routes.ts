import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { configuration_pages } from "./configuration.pages.ts";
import { configuration_tables } from "./configuration.tables.ts";

export const configuration_module = define_module({
  resource: "configuration",
  labels: {
    singular: "Parametros del sistema",
    plural: "Parametros del sistema",
    read: "Ver Parametros del sistema",
    write: "Editar Parametros del sistema",
  },
  routes: define_crud({
    resource: "configuration",
    table: "configuration",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "configur",
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
      is_system: { type: "boolean" },
      model_id: { type: "string", search: true },
      module_id: { type: "string", search: true },
      value: { type: "json" },
      type: { type: "string", search: true },
      user_id: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: configuration_tables,
  pages: configuration_pages,
  menu: [],
});
