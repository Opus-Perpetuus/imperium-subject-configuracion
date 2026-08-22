import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { tags_pages } from "./tags.pages.ts";
import { tags_tables } from "./tags.tables.ts";

export const tags_module = define_module({
  resource: "tags",
  labels: {
    singular: "Etiquetas",
    plural: "Etiquetas",
    read: "Ver Etiquetas",
    write: "Editar Etiquetas",
  },
  routes: define_crud({
    resource: "tags",
    table: "tags",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "tags",
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
      color: { type: "string", search: true },
      icon: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: tags_tables,
  pages: tags_pages,
  menu: [],
});
