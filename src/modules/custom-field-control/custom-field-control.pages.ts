import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const custom_field_control_pages: KirletPageDecl[] = [
  {
    id: "configuracion.custom-field-control",
    path: "custom-field-control",
    permission: "subject.configuracion.custom-field-control.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.custom-field-control",
        owner: "subject-configuracion",
        title: "Campos personalizados",
        props: {
          basePath: "custom-field-control",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Campos personalizados",
            subtitle: "Submenú de configuracion",
            pluralLabel: "campos personalizados",
            singularLabel: "campos personalizados",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/custom-field-control`,
            record: `${API}/custom-field-control/:id`,
            create: { method: "POST", action: `${API}/custom-field-control` },
            update: { method: "PATCH", action: `${API}/custom-field-control/:id` },
            delete: { method: "DELETE", action: `${API}/custom-field-control/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "module_name", label: "module name", sortable: true, priority: 3 },
              { key: "module_id", label: "module id", sortable: true, priority: 3 },
              { key: "model_id", label: "model id", sortable: true, priority: 3 },
              { key: "fields_count", label: "fields count", sortable: true, priority: 3 },
              { key: "field_name", label: "field name", sortable: true, priority: 3 },
              { key: "label", label: "label", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "module_name", component: "input-text", label: "module name" },
              { name: "module_id", component: "input-text", label: "module id" },
              { name: "model_id", component: "input-text", label: "model id" },
              { name: "fields_count", component: "input-text", label: "fields count" },
              { name: "field_name", component: "input-text", label: "field name" },
              { name: "label", component: "input-text", label: "label" },
              { name: "type", component: "input-text", label: "type" },
              { name: "required", component: "input-checkbox", label: "required" },
              { name: "enabled", component: "input-checkbox", label: "enabled" },
              { name: "show_in_list", component: "input-checkbox", label: "show in list" },
              { name: "fields", component: "input-json", label: "fields" },
            ],
          },
        },
      }),
  },
];
