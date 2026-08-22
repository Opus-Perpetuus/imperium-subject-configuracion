import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { branchoffice_pages } from "./branchoffice.pages.ts";
import { branchoffice_tables } from "./branchoffice.tables.ts";

export const branchoffice_module = define_module({
  resource: "branchoffice",
  labels: {
    singular: "Sucursales",
    plural: "Sucursales",
    read: "Ver Sucursales",
    write: "Editar Sucursales",
  },
  routes: define_crud({
    resource: "branchoffice",
    table: "branchoffice",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "branchof",
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
      location: { type: "string", search: true },
      image: { type: "string", search: true },
      listaDePrecios: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: branchoffice_tables,
  pages: branchoffice_pages,
  menu: [],
});
