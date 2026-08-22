import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const auto_increment_control_pages: KirletPageDecl[] = [
  {
    id: "configuracion.auto-increment-control",
    path: "auto-increment-control",
    permission: "subject.configuracion.auto-increment-control.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.auto-increment-control",
        owner: "subject-configuracion",
        title: "Configuración de counters",
        props: {
          basePath: "auto-increment-control",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Configuración de counters",
            subtitle: "Submenú de configuracion",
            pluralLabel: "configuración de counters",
            singularLabel: "configuración de counters",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/auto-increment-control`,
            record: `${API}/auto-increment-control/:id`,
            create: { method: "POST", action: `${API}/auto-increment-control` },
            update: { method: "PATCH", action: `${API}/auto-increment-control/:id` },
            delete: { method: "DELETE", action: `${API}/auto-increment-control/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "model_name", label: "model name", sortable: true, priority: 3 },
              { key: "collection", label: "collection", sortable: true, priority: 3 },
              { key: "increment_field", label: "increment field", sortable: true, priority: 3 },
              { key: "index_name", label: "index name", sortable: true, priority: 3 },
              { key: "type", label: "type", sortable: true, priority: 3 },
              { key: "custom_pattern", label: "custom pattern", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "model_name", component: "input-text", label: "model name" },
              { name: "collection", component: "input-text", label: "collection" },
              { name: "increment_field", component: "input-text", label: "increment field" },
              { name: "index_name", component: "input-text", label: "index name" },
              { name: "type", component: "input-text", label: "type" },
              { name: "custom_pattern", component: "input-text", label: "custom pattern" },
              { name: "custom_pattern_defined_manually", component: "input-checkbox", label: "custom pattern defined manually" },
              { name: "custom_pattern_parts", component: "input-text", label: "custom pattern parts" },
              { name: "custom_conditions_ids", component: "input-text", label: "custom conditions ids" },
              { name: "current_sequence", component: "input-number", label: "current sequence" },
              { name: "current_real_value", component: "input-json", label: "current real value" },
              { name: "ref_value", component: "input-json", label: "ref value" },
              { name: "segment", component: "input-text", label: "segment" },
              { name: "module_ref", component: "input-text", label: "module ref" },
              { name: "_unique_string_reference", component: "input-text", label: " unique string reference" },
              { name: "user_edited", component: "input-checkbox", label: "user edited" },
            ],
          },
        },
      }),
  },
];
