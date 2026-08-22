import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const api_keys_pages: KirletPageDecl[] = [
  {
    id: "configuracion.api-keys",
    path: "api-keys",
    permission: "subject.configuracion.api-keys.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.api-keys",
        owner: "subject-configuracion",
        title: "API keys",
        props: {
          basePath: "api-keys",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "API keys",
            subtitle: "Submenú de configuracion",
            pluralLabel: "api keys",
            singularLabel: "api keys",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/api-keys`,
            record: `${API}/api-keys/:id`,
            create: { method: "POST", action: `${API}/api-keys` },
            update: { method: "PATCH", action: `${API}/api-keys/:id` },
            delete: { method: "DELETE", action: `${API}/api-keys/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "domain", label: "domain", sortable: true, priority: 3 },
              { key: "client", label: "client", sortable: true, priority: 3 },
              { key: "has_expiration", label: "has expiration", sortable: true, priority: 3 },
              { key: "expiration_date", label: "expiration date", sortable: true, priority: 3 },
              { key: "api_key", label: "api key", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "domain", component: "input-text", label: "domain" },
              { name: "client", component: "input-text", label: "client" },
              { name: "has_expiration", component: "input-checkbox", label: "has expiration" },
              { name: "expiration_date", component: "input-text", label: "expiration date" },
              { name: "api_key", component: "input-text", label: "api key" },
            ],
          },
        },
      }),
  },
];
