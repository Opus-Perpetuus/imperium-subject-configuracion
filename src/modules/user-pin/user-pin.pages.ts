import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const user_pin_pages: KirletPageDecl[] = [
  {
    id: "configuracion.user-pin",
    path: "user-pin",
    permission: "subject.configuracion.user-pin.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.user-pin",
        owner: "subject-configuracion",
        title: "Pins de usuario",
        props: {
          basePath: "user-pin",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Pins de usuario",
            subtitle: "Submenú de configuracion",
            pluralLabel: "pins de usuario",
            singularLabel: "pins de usuario",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/user-pin`,
            record: `${API}/user-pin/:id`,
            create: { method: "POST", action: `${API}/user-pin` },
            update: { method: "PATCH", action: `${API}/user-pin/:id` },
            delete: { method: "DELETE", action: `${API}/user-pin/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "document_id", label: "document id", sortable: true, priority: 3 },
              { key: "document_collection", label: "document collection", sortable: true, priority: 3 },
              { key: "document_model", label: "document model", sortable: true, priority: 3 },
              { key: "document_label", label: "document label", sortable: true, priority: 3 },
              { key: "is_global", label: "is global", sortable: true, priority: 3 },
              { key: "pin_type", label: "pin type", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "document_id", component: "input-text", label: "document id" },
              { name: "document_collection", component: "input-text", label: "document collection" },
              { name: "document_model", component: "input-text", label: "document model" },
              { name: "document_label", component: "input-text", label: "document label" },
              { name: "is_global", component: "input-checkbox", label: "is global" },
              { name: "pin_type", component: "input-text", label: "pin type" },
              { name: "pin_length", component: "input-number", label: "pin length" },
              { name: "auto_generated", component: "input-checkbox", label: "auto generated" },
              { name: "method", component: "input-text", label: "method" },
              { name: "path", component: "input-text", label: "path" },
              { name: "route_key", component: "input-text", label: "route key" },
              { name: "label", component: "input-text", label: "label" },
              { name: "assigned_users", component: "input-json", label: "assigned users" },
              { name: "pin_hash", component: "input-text", label: "pin hash" },
              { name: "pin_version", component: "input-number", label: "pin version" },
              { name: "feature_toggle_key", component: "input-text", label: "feature toggle key" },
            ],
          },
        },
      }),
  },
];
