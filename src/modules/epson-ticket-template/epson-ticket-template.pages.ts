import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const epson_ticket_template_pages: KirletPageDecl[] = [
  {
    id: "configuracion.epson-ticket-template",
    path: "epson-ticket-template",
    permission: "subject.configuracion.epson-ticket-template.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.epson-ticket-template",
        owner: "subject-configuracion",
        title: "Plantillas EPSON",
        props: {
          basePath: "epson-ticket-template",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Plantillas EPSON",
            subtitle: "Submenú de configuracion",
            pluralLabel: "plantillas epson",
            singularLabel: "plantillas epson",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/epson-ticket-template`,
            record: `${API}/epson-ticket-template/:id`,
            create: { method: "POST", action: `${API}/epson-ticket-template` },
            update: { method: "PATCH", action: `${API}/epson-ticket-template/:id` },
            delete: { method: "DELETE", action: `${API}/epson-ticket-template/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "template_key", label: "template key", sortable: true, priority: 3 },
              { key: "content", label: "content", sortable: true, priority: 3 },
              { key: "line_width", label: "line width", sortable: true, priority: 3 },
              { key: "render_target", label: "render target", sortable: true, priority: 3 },
              { key: "dpmm", label: "dpmm", sortable: true, priority: 3 },
              { key: "label_size_mm_x", label: "label size mm x", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "template_key", component: "input-text", label: "template key" },
              { name: "content", component: "input-text", label: "content" },
              { name: "line_width", component: "input-number", label: "line width" },
              { name: "render_target", component: "input-text", label: "render target" },
              { name: "dpmm", component: "input-text", label: "dpmm" },
              { name: "label_size_mm_x", component: "input-number", label: "label size mm x" },
              { name: "label_size_mm_y", component: "input-number", label: "label size mm y" },
            ],
          },
        },
      }),
  },
];
