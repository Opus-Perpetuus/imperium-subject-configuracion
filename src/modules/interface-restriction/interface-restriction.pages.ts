import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const interface_restriction_pages: KirletPageDecl[] = [
  {
    id: "configuracion.interface-restriction",
    path: "interface-restriction",
    permission: "subject.configuracion.interface-restriction.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.interface-restriction",
        owner: "subject-configuracion",
        title: "Restricciones de interfaz",
        props: {
          basePath: "interface-restriction",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Restricciones de interfaz",
            subtitle: "Submenú de configuracion",
            pluralLabel: "restricciones de interfaz",
            singularLabel: "restricciones de interfaz",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/interface-restriction`,
            record: `${API}/interface-restriction/:id`,
            create: { method: "POST", action: `${API}/interface-restriction` },
            update: { method: "PATCH", action: `${API}/interface-restriction/:id` },
            delete: { method: "DELETE", action: `${API}/interface-restriction/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "html_element_hash", label: "html element hash", sortable: true, priority: 3 },
              { key: "allowed_user_groups", label: "allowed user groups", sortable: true, priority: 3 },
              { key: "allowed_user_groups_id", label: "allowed user groups id", sortable: true, priority: 3 },
              { key: "allowed_user_groups_count", label: "allowed user groups count", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "html_element_hash", component: "input-text", label: "html element hash" },
              { name: "allowed_user_groups", component: "input-text", label: "allowed user groups" },
              { name: "allowed_user_groups_id", component: "input-text", label: "allowed user groups id" },
              { name: "allowed_user_groups_count", component: "input-text", label: "allowed user groups count" },
            ],
          },
        },
      }),
  },
];
