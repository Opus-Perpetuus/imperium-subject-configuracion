import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { custom_field_control_pages } from "./custom-field-control.pages.ts";
import { custom_field_control_tables } from "./custom-field-control.tables.ts";

export const custom_field_control_module = define_module({
  resource: "custom-field-control",
  labels: {
    singular: "Campos personalizados",
    plural: "Campos personalizados",
    read: "Ver Campos personalizados",
    write: "Editar Campos personalizados",
  },
  routes: define_crud({
    resource: "custom-field-control",
    table: "custom_field_control",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "custom-f",
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
      module_name: { type: "string", search: true },
      module_id: { type: "string", search: true },
      model_id: { type: "string", search: true },
      fields_count: { type: "string", search: true },
      field_name: { type: "string", search: true },
      label: { type: "string", search: true },
      type: { type: "string", search: true },
      required: { type: "boolean" },
      enabled: { type: "boolean" },
      show_in_list: { type: "boolean" },
      fields: { type: "json" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: custom_field_control_tables,
  pages: custom_field_control_pages,
  menu: [],
});
