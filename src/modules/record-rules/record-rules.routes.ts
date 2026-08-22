import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { record_rules_pages } from "./record-rules.pages.ts";
import { record_rules_tables } from "./record-rules.tables.ts";

export const record_rules_module = define_module({
  resource: "record-rules",
  labels: {
    singular: "Reglas de registro",
    plural: "Reglas de registro",
    read: "Ver Reglas de registro",
    write: "Editar Reglas de registro",
  },
  routes: define_crud({
    resource: "record-rules",
    table: "record_rules",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "record-r",
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
      allow_read: { type: "boolean" },
      allow_update: { type: "boolean" },
      allow_delete: { type: "boolean" },
      allow_create: { type: "boolean" },
      model_id: { type: "string", search: true },
      group_id: { type: "string", search: true },
      domain: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: record_rules_tables,
  pages: record_rules_pages,
  menu: [],
});
