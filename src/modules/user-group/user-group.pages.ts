import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const user_group_pages: KirletPageDecl[] = [
  {
    id: "configuracion.user-group",
    path: "user-group",
    permission: "subject.configuracion.user-group.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.user-group",
        owner: "subject-configuracion",
        title: "Grupos de usuario",
        props: {
          basePath: "user-group",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Grupos de usuario",
            subtitle: "Submenú de configuracion",
            pluralLabel: "grupos de usuario",
            singularLabel: "grupos de usuario",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/user-group`,
            record: `${API}/user-group/:id`,
            create: { method: "POST", action: `${API}/user-group` },
            update: { method: "PATCH", action: `${API}/user-group/:id` },
            delete: { method: "DELETE", action: `${API}/user-group/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "menus_ids", label: "menus ids", sortable: true, priority: 3 },
              { key: "user_ids", label: "user ids", sortable: true, priority: 3 },
              { key: "access_rights_ids", label: "access rights ids", sortable: true, priority: 3 },
              { key: "record_rules_ids", label: "record rules ids", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "menus_ids", component: "input-text", label: "menus ids" },
              { name: "user_ids", component: "input-text", label: "user ids" },
              { name: "access_rights_ids", component: "input-text", label: "access rights ids" },
              { name: "record_rules_ids", component: "input-text", label: "record rules ids" },
            ],
          },
        },
      }),
  },
];
