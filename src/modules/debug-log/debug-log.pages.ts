import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const debug_log_pages: KirletPageDecl[] = [
  {
    id: "configuracion.debug-log",
    path: "debug-log",
    permission: "subject.configuracion.debug-log.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.debug-log",
        owner: "subject-configuracion",
        title: "Logs del Sistema",
        props: {
          basePath: "debug-log",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Logs del Sistema",
            subtitle: "Submenú de configuracion",
            pluralLabel: "logs del sistema",
            singularLabel: "logs del sistema",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/debug-log`,
            record: `${API}/debug-log/:id`,
            create: { method: "POST", action: `${API}/debug-log` },
            update: { method: "PATCH", action: `${API}/debug-log/:id` },
            delete: { method: "DELETE", action: `${API}/debug-log/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
            ],
          },
        },
      }),
  },
];
