import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const status_option_control_pages: KirletPageDecl[] = [
  {
    id: "configuracion.status-option-control",
    path: "status-option-control",
    permission: "subject.configuracion.status-option-control.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.status-option-control",
        owner: "subject-configuracion",
        title: "Opciones de estatus",
        props: {
          basePath: "status-option-control",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Opciones de estatus",
            subtitle: "Submenú de configuracion",
            pluralLabel: "opciones de estatus",
            singularLabel: "opciones de estatus",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/status-option-control`,
            record: `${API}/status-option-control/:id`,
            create: { method: "POST", action: `${API}/status-option-control` },
            update: { method: "PATCH", action: `${API}/status-option-control/:id` },
            delete: { method: "DELETE", action: `${API}/status-option-control/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "module_name", label: "module name", sortable: true, priority: 3 },
              { key: "model_id", label: "model id", sortable: true, priority: 3 },
              { key: "module_id", label: "module id", sortable: true, priority: 3 },
              { key: "is_enable", label: "is enable", sortable: true, priority: 3 },
              { key: "configuration_id", label: "configuration id", sortable: true, priority: 3 },
              { key: "has_configuration", label: "has configuration", sortable: true, priority: 3 },
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
              { name: "model_id", component: "input-text", label: "model id" },
              { name: "module_id", component: "input-text", label: "module id" },
              { name: "is_enable", component: "input-text", label: "is enable" },
              { name: "configuration_id", component: "input-text", label: "configuration id" },
              { name: "has_configuration", component: "input-text", label: "has configuration" },
              { name: "status_options_count", component: "input-text", label: "status options count" },
              { name: "status_fields_count", component: "input-text", label: "status fields count" },
              { name: "option_field_name", component: "input-text", label: "option field name" },
              { name: "option_color", component: "input-text", label: "option color" },
              { name: "option_icon", component: "input-text", label: "option icon" },
              { name: "option_type", component: "input-text", label: "option type" },
              { name: "option_is_default", component: "input-text", label: "option is default" },
            ],
          },
        },
      }),
  },
];
