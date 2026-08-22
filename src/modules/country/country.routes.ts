import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { country_pages } from "./country.pages.ts";
import { country_tables } from "./country.tables.ts";

export const country_module = define_module({
  resource: "country",
  labels: {
    singular: "Paises",
    plural: "Paises",
    read: "Ver Paises",
    write: "Editar Paises",
  },
  routes: define_crud({
    resource: "country",
    table: "country",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "country",
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
  tables: country_tables,
  pages: country_pages,
  menu: [],
});
