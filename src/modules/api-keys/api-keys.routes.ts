import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { api_keys_pages } from "./api-keys.pages.ts";
import { api_keys_tables } from "./api-keys.tables.ts";

export const api_keys_module = define_module({
  resource: "api-keys",
  labels: {
    singular: "API keys",
    plural: "API keys",
    read: "Ver API keys",
    write: "Editar API keys",
  },
  routes: define_crud({
    resource: "api-keys",
    table: "api_keys",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "api-keys",
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
      domain: { type: "string", search: true },
      client: { type: "string", search: true },
      has_expiration: { type: "boolean" },
      expiration_date: { type: "string", search: true },
      api_key: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: api_keys_tables,
  pages: api_keys_pages,
  menu: [],
});
