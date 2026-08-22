import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { epson_ticket_template_pages } from "./epson-ticket-template.pages.ts";
import { epson_ticket_template_tables } from "./epson-ticket-template.tables.ts";

export const epson_ticket_template_module = define_module({
  resource: "epson-ticket-template",
  labels: {
    singular: "Plantillas EPSON",
    plural: "Plantillas EPSON",
    read: "Ver Plantillas EPSON",
    write: "Editar Plantillas EPSON",
  },
  routes: define_crud({
    resource: "epson-ticket-template",
    table: "epson_ticket_template",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "epson-ti",
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
      template_key: { type: "string", search: true },
      content: { type: "string", search: true },
      line_width: { type: "number" },
      render_target: { type: "string", search: true },
      dpmm: { type: "string", search: true },
      label_size_mm_x: { type: "number" },
      label_size_mm_y: { type: "number" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: epson_ticket_template_tables,
  pages: epson_ticket_template_pages,
  menu: [],
});
