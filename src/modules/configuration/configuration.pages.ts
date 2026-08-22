import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const configuration_pages: KirletPageDecl[] = [
  {
    id: "configuracion.configuration",
    path: "configuration",
    permission: "subject.configuracion.configuration.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.configuration",
        owner: "subject-configuracion",
        title: "Parametros del sistema",
        props: {
          basePath: "configuration",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Parametros del sistema",
            subtitle: "Submenú de configuracion",
            pluralLabel: "parametros del sistema",
            singularLabel: "parametros del sistema",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/configuration`,
            record: `${API}/configuration/:id`,
            create: { method: "POST", action: `${API}/configuration` },
            update: { method: "PATCH", action: `${API}/configuration/:id` },
            delete: { method: "DELETE", action: `${API}/configuration/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "is_system", label: "is system", sortable: true, priority: 3 },
              { key: "model_id", label: "model id", sortable: true, priority: 3 },
              { key: "module_id", label: "module id", sortable: true, priority: 3 },
              { key: "value", label: "value", sortable: true, priority: 3 },
              { key: "type", label: "type", sortable: true, priority: 3 },
              { key: "user_id", label: "user id", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "is_system", component: "input-checkbox", label: "is system" },
              { name: "model_id", component: "input-text", label: "model id" },
              { name: "module_id", component: "input-text", label: "module id" },
              { name: "value", component: "input-json", label: "value" },
              { name: "type", component: "input-text", label: "type" },
              { name: "user_id", component: "input-text", label: "user id" },
            ],
          },
        },
      }),
  },
];
