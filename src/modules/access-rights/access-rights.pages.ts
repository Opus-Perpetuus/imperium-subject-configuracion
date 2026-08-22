import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const access_rights_pages: KirletPageDecl[] = [
  {
    id: "configuracion.access-rights",
    path: "access-rights",
    permission: "subject.configuracion.access-rights.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.access-rights",
        owner: "subject-configuracion",
        title: "Permisos de acceso",
        props: {
          basePath: "access-rights",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Permisos de acceso",
            subtitle: "Submenú de configuracion",
            pluralLabel: "permisos de acceso",
            singularLabel: "permisos de acceso",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/access-rights`,
            record: `${API}/access-rights/:id`,
            create: { method: "POST", action: `${API}/access-rights` },
            update: { method: "PATCH", action: `${API}/access-rights/:id` },
            delete: { method: "DELETE", action: `${API}/access-rights/:id` },
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
              { name: "allow_read", component: "input-text", label: "allow read" },
              { name: "allow_update", component: "input-text", label: "allow update" },
              { name: "allow_delete", component: "input-text", label: "allow delete" },
              { name: "allow_create", component: "input-text", label: "allow create" },
              { name: "model_id", component: "input-text", label: "model id" },
              { name: "group_id", component: "input-text", label: "group id" },
            ],
          },
        },
      }),
  },
];
