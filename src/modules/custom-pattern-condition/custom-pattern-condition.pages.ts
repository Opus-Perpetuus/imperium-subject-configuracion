import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const custom_pattern_condition_pages: KirletPageDecl[] = [
  {
    id: "configuracion.custom-pattern-condition",
    path: "custom-pattern-condition",
    permission: "subject.configuracion.custom-pattern-condition.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.custom-pattern-condition",
        owner: "subject-configuracion",
        title: "Custom pattern",
        props: {
          basePath: "custom-pattern-condition",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Custom pattern",
            subtitle: "Submenú de configuracion",
            pluralLabel: "custom pattern",
            singularLabel: "custom pattern",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/custom-pattern-condition`,
            record: `${API}/custom-pattern-condition/:id`,
            create: { method: "POST", action: `${API}/custom-pattern-condition` },
            update: { method: "PATCH", action: `${API}/custom-pattern-condition/:id` },
            delete: { method: "DELETE", action: `${API}/custom-pattern-condition/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "part_id", label: "part id", sortable: true, priority: 3 },
              { key: "modelo", label: "modelo", sortable: true, priority: 3 },
              { key: "field_path", label: "field path", sortable: true, priority: 3 },
              { key: "expected_value", label: "expected value", sortable: true, priority: 3 },
              { key: "return_value", label: "return value", sortable: true, priority: 3 },
              { key: "is_default_value", label: "is default value", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "part_id", component: "input-text", label: "part id" },
              { name: "modelo", component: "input-text", label: "modelo" },
              { name: "field_path", component: "input-text", label: "field path" },
              { name: "expected_value", component: "input-text", label: "expected value" },
              { name: "return_value", component: "input-text", label: "return value" },
              { name: "is_default_value", component: "input-checkbox", label: "is default value" },
              { name: "own_count", component: "input-checkbox", label: "own count" },
            ],
          },
        },
      }),
  },
];
