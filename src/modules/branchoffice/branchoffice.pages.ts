import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const branchoffice_pages: KirletPageDecl[] = [
  {
    id: "configuracion.branchoffice",
    path: "branchoffice",
    permission: "subject.configuracion.branchoffice.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.branchoffice",
        owner: "subject-configuracion",
        title: "Sucursales",
        props: {
          basePath: "branchoffice",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Sucursales",
            subtitle: "Submenú de configuracion",
            pluralLabel: "sucursales",
            singularLabel: "sucursales",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/branchoffice`,
            record: `${API}/branchoffice/:id`,
            create: { method: "POST", action: `${API}/branchoffice` },
            update: { method: "PATCH", action: `${API}/branchoffice/:id` },
            delete: { method: "DELETE", action: `${API}/branchoffice/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "location", label: "location", sortable: true, priority: 3 },
              { key: "image", label: "image", sortable: true, priority: 3 },
              { key: "listaDePrecios", label: "listaDePrecios", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "location", component: "input-text", label: "location" },
              { name: "image", component: "input-text", label: "image" },
              { name: "listaDePrecios", component: "input-text", label: "listaDePrecios" },
            ],
          },
        },
      }),
  },
];
