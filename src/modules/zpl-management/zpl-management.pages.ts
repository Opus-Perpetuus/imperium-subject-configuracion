import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const zpl_management_pages: KirletPageDecl[] = [
  {
    id: "configuracion.zpl-management",
    path: "zpl-management",
    permission: "subject.configuracion.zpl-management.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.zpl-management",
        owner: "subject-configuracion",
        title: "Impresoras Zebra",
        props: {
          basePath: "zpl-management",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Impresoras Zebra",
            subtitle: "Submenú de configuracion",
            pluralLabel: "impresoras zebra",
            singularLabel: "impresoras zebra",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/zpl-management`,
            record: `${API}/zpl-management/:id`,
            create: { method: "POST", action: `${API}/zpl-management` },
            update: { method: "PATCH", action: `${API}/zpl-management/:id` },
            delete: { method: "DELETE", action: `${API}/zpl-management/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "zpl", label: "zpl", sortable: true, priority: 3 },
              { key: "content", label: "content", sortable: true, priority: 3 },
              { key: "dpmm", label: "dpmm", sortable: true, priority: 3 },
              { key: "label_size_mm_x", label: "label size mm x", sortable: true, priority: 3 },
              { key: "label_size_mm_y", label: "label size mm y", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-textarea", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "zpl", component: "input-code-editor", label: "zpl", code_editor_language: "imperium-zpl", code_editor_completion_kind: "zpl" },
              { name: "content", component: "input-code-editor", label: "content", code_editor_language: "imperium-ticket-dsl", code_editor_completion_kind: "dsl" },
              {
                name: "dpmm",
                component: "input-menu",
                label: "dpmm",
                options: [
                  { value: "6dpmm", label: "6dpmm (152dpi)" },
                  { value: "8dpmm", label: "8dpmm (203dpi)" },
                  { value: "12dpmm", label: "12dpmm (300dpi)" },
                  { value: "24dpmm", label: "24dpmm (600dpi)" },
                ],
              },
              { name: "label_size_mm_x", component: "input-number", label: "label size mm x" },
              { name: "label_size_mm_y", component: "input-number", label: "label size mm y" },
            ],
          },
        },
      }),
  },
];
