import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const user_pages: KirletPageDecl[] = [
  {
    id: "configuracion.user",
    path: "user",
    permission: "subject.configuracion.user.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.user",
        owner: "subject-configuracion",
        title: "Usuarios",
        props: {
          basePath: "user",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Usuarios",
            subtitle: "Submenú de configuracion",
            pluralLabel: "usuarios",
            singularLabel: "usuarios",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/user`,
            record: `${API}/user/:id`,
            create: { method: "POST", action: `${API}/user` },
            update: { method: "PATCH", action: `${API}/user/:id` },
            delete: { method: "DELETE", action: `${API}/user/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "password", label: "password", sortable: true, priority: 3 },
              { key: "email", label: "email", sortable: true, priority: 3 },
              { key: "img", label: "img", sortable: true, priority: 3 },
              { key: "enabled_dashboard_components", label: "enabled dashboard components", sortable: true, priority: 3 },
              { key: "employee", label: "employee", sortable: true, priority: 3 },
              { key: "start_view", label: "start view", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-textarea", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "password", component: "input-password", label: "password" },
              { name: "email", component: "input-text", label: "email", type: "email" },
              { name: "img", component: "input-image", label: "img" },
              {
                name: "enabled_dashboard_components",
                component: "input-checkbox-group",
                label: "enabled dashboard components",
                options: [
                  { value: "dashboard-operational-stats", label: "Resumen operativo de estadísticas" },
                  { value: "offline-management", label: "Ventas en ruta" },
                  { value: "zebra-device-management", label: "Gestión de Dispositivos Zebra" },
                  { value: "epson-print-device-management", label: "Gestión de Impresoras Epson" },
                ],
              },
              { name: "employee", component: "input-datalist", label: "employee", optionsSource: "api://m/subject-rh/employee?as=options&limite=1000" },
              { name: "start_view", component: "input-text", label: "start view" },
              { name: "mode", component: "input-text", label: "mode" },
              { name: "path", component: "input-text", label: "path" },
              { name: "view_kind", component: "input-text", label: "view kind" },
              { name: "menu_id", component: "input-text", label: "menu id" },
              { name: "label", component: "input-text", label: "label" },
              { name: "reset_password_token_hash", component: "input-text", label: "reset password token hash" },
              { name: "reset_password_expires", component: "input-datetime", label: "reset password expires" },
              { name: "reset_password_kind", component: "input-text", label: "reset password kind" },
              { name: "listaDePrecios", component: "input-datalist", label: "listaDePrecios", optionsSource: "api://m/subject-ventas/lista-de-precios?as=options&limite=1000" },
            ],
          },
        },
      }),
  },
];
