import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const country_pages: KirletPageDecl[] = [
  {
    id: "configuracion.country",
    path: "country",
    permission: "subject.configuracion.country.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.country",
        owner: "subject-configuracion",
        title: "Paises",
        props: {
          basePath: "country",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Paises",
            subtitle: "Submenú de configuracion",
            pluralLabel: "paises",
            singularLabel: "paises",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/country`,
            record: `${API}/country/:id`,
            create: { method: "POST", action: `${API}/country` },
            update: { method: "PATCH", action: `${API}/country/:id` },
            delete: { method: "DELETE", action: `${API}/country/:id` },
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
