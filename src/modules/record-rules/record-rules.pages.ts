import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const record_rules_pages: KirletPageDecl[] = [
  {
    id: "configuracion.record-rules",
    path: "record-rules",
    permission: "subject.configuracion.record-rules.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.record-rules",
        owner: "subject-configuracion",
        title: "Reglas de registro",
        props: {
          basePath: "record-rules",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Reglas de registro",
            subtitle: "Submenú de configuracion",
            pluralLabel: "reglas de registro",
            singularLabel: "reglas de registro",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/record-rules`,
            record: `${API}/record-rules/:id`,
            create: { method: "POST", action: `${API}/record-rules` },
            update: { method: "PATCH", action: `${API}/record-rules/:id` },
            delete: { method: "DELETE", action: `${API}/record-rules/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "allow_read", label: "allow read", sortable: true, priority: 3 },
              { key: "allow_update", label: "allow update", sortable: true, priority: 3 },
              { key: "allow_delete", label: "allow delete", sortable: true, priority: 3 },
              { key: "allow_create", label: "allow create", sortable: true, priority: 3 },
              { key: "model_id", label: "model id", sortable: true, priority: 3 },
              { key: "group_id", label: "group id", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "allow_read", component: "input-checkbox", label: "allow read" },
              { name: "allow_update", component: "input-checkbox", label: "allow update" },
              { name: "allow_delete", component: "input-checkbox", label: "allow delete" },
              { name: "allow_create", component: "input-checkbox", label: "allow create" },
              { name: "model_id", component: "input-text", label: "model id" },
              { name: "group_id", component: "input-text", label: "group id" },
              { name: "domain", component: "input-text", label: "domain" },
            ],
          },
        },
      }),
  },
];
