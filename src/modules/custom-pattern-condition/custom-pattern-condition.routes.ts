import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { custom_pattern_condition_pages } from "./custom-pattern-condition.pages.ts";
import { custom_pattern_condition_tables } from "./custom-pattern-condition.tables.ts";

export const custom_pattern_condition_module = define_module({
  resource: "custom-pattern-condition",
  labels: {
    singular: "Custom pattern",
    plural: "Custom pattern",
    read: "Ver Custom pattern",
    write: "Editar Custom pattern",
  },
  routes: define_crud({
    resource: "custom-pattern-condition",
    table: "custom_pattern_condition",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "custom-p",
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
      part_id: { type: "string", search: true },
      modelo: { type: "string", search: true },
      field_path: { type: "string", search: true },
      expected_value: { type: "string", search: true },
      return_value: { type: "string", search: true },
      is_default_value: { type: "boolean" },
      own_count: { type: "boolean" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: custom_pattern_condition_tables,
  pages: custom_pattern_condition_pages,
  menu: [],
});
