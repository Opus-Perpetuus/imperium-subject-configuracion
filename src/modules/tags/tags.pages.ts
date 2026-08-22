import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const tags_pages: KirletPageDecl[] = [
  {
    id: "configuracion.tags",
    path: "tags",
    permission: "subject.configuracion.tags.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.tags",
        owner: "subject-configuracion",
        title: "Etiquetas",
        props: {
          basePath: "tags",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Etiquetas",
            subtitle: "Submenú de configuracion",
            pluralLabel: "etiquetas",
            singularLabel: "etiquetas",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/tags`,
            record: `${API}/tags/:id`,
            create: { method: "POST", action: `${API}/tags` },
            update: { method: "PATCH", action: `${API}/tags/:id` },
            delete: { method: "DELETE", action: `${API}/tags/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "color", label: "color", sortable: true, priority: 3 },
              { key: "icon", label: "icon", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "color", component: "input-text", label: "color" },
              { name: "icon", component: "input-text", label: "icon" },
            ],
          },
        },
      }),
  },
];
