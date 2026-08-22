import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { module_management_pages } from "./module-management.pages.ts";
import { module_management_tables } from "./module-management.tables.ts";

export const module_management_module = define_module({
  resource: "module-management",
  labels: {
    singular: "Módulos",
    plural: "Módulos",
    read: "Ver Módulos",
    write: "Editar Módulos",
  },
  routes: define_crud({
    resource: "module-management",
    table: "module_management",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "module-m",
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
      is_enable: { type: "boolean" },
      path: { type: "string", search: true },
      model_id: { type: "string", search: true },
      module_location: { type: "string", search: true },
      module_name: { type: "string", search: true },
      parent_module: { type: "string", search: true },
      module_dependencies: { type: "string", search: true },
      data_installed_at: { type: "string", search: true },
      reference: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: module_management_tables,
  pages: module_management_pages,
  menu: [],
});
