import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const menu_management_pages: KirletPageDecl[] = [
  {
    id: "configuracion.menu-management",
    path: "menu-management",
    permission: "subject.configuracion.menu-management.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.menu-management",
        owner: "subject-configuracion",
        title: "Manejo de menús",
        props: {
          basePath: "menu-management",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Manejo de menús",
            subtitle: "Submenú de configuracion",
            pluralLabel: "manejo de menús",
            singularLabel: "manejo de menús",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/menu-management`,
            record: `${API}/menu-management/:id`,
            create: { method: "POST", action: `${API}/menu-management` },
            update: { method: "PATCH", action: `${API}/menu-management/:id` },
            delete: { method: "DELETE", action: `${API}/menu-management/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "icon", label: "icon", sortable: true, priority: 3 },
              { key: "path", label: "path", sortable: true, priority: 3 },
              { key: "parent_id", label: "parent id", sortable: true, priority: 3 },
              { key: "order", label: "order", sortable: true, priority: 3 },
              { key: "model", label: "model", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "icon", component: "input-text", label: "icon" },
              { name: "path", component: "input-text", label: "path" },
              { name: "parent_id", component: "input-text", label: "parent id" },
              { name: "order", component: "input-text", label: "order" },
              { name: "model", component: "input-text", label: "model" },
            ],
          },
        },
      }),
  },
];
