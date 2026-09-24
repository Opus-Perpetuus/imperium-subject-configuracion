import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const custom_pattern_increment_sequence_parts_pages: KirletPageDecl[] = [
  {
    id: "configuracion.custom-pattern-increment-sequence-parts",
    path: "custom-pattern-increment-sequence-parts",
    permission: "subject.configuracion.custom-pattern-increment-sequence-parts.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.custom-pattern-increment-sequence-parts",
        owner: "subject-configuracion",
        title: "Partes de secuencia",
        props: {
          basePath: "custom-pattern-increment-sequence-parts",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Partes de secuencia",
            subtitle: "Submenú de configuracion",
            pluralLabel: "partes de secuencia",
            singularLabel: "partes de secuencia",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/custom-pattern-increment-sequence-parts`,
            record: `${API}/custom-pattern-increment-sequence-parts/:id`,
            create: { method: "POST", action: `${API}/custom-pattern-increment-sequence-parts` },
            update: { method: "PATCH", action: `${API}/custom-pattern-increment-sequence-parts/:id` },
            delete: { method: "DELETE", action: `${API}/custom-pattern-increment-sequence-parts/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "counter_config_id", label: "counter config id", sortable: true, priority: 3 },
              { key: "modelo", label: "modelo", sortable: true, priority: 3 },
              { key: "token_type", label: "token type", sortable: true, priority: 3 },
              { key: "token_value", label: "token value", sortable: true, priority: 3 },
              { key: "field_path", label: "field path", sortable: true, priority: 3 },
              { key: "counter_index_name", label: "counter index name", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-textarea", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "counter_config_id", component: "input-datalist", label: "counter config id", optionsSource: "api://m/subject-configuracion/auto-increment-control?as=options&limite=1000" },
              { name: "modelo", component: "input-text", label: "modelo" },
              {
                name: "token_type",
                component: "input-datalist",
                label: "token type",
                options: [
                  { value: "yy", label: "Año corto [yy]" },
                  { value: "yyyy", label: "Año completo [yyyy]" },
                  { value: "LL", label: "Mes numérico [LL]" },
                  { value: "LLL", label: "Mes abreviado [LLL]" },
                  { value: "LLLL", label: "Mes completo [LLLL]" },
                  { value: "WW", label: "Semana del año [WW]" },
                  { value: "ooo", label: "Día del año [ooo]" },
                  { value: "dd", label: "Día del mes [dd]" },
                  { value: "c", label: "Día de semana numérico [c]" },
                  { value: "ccc", label: "Día de semana abreviado [ccc]" },
                  { value: "cccc", label: "Día de semana completo [cccc]" },
                  { value: "sequence", label: "Secuencia actual [sequence]" },
                  { value: "counter", label: "Contador externo [counter=...]" },
                  { value: "field", label: "Campo del documento [field=...]" },
                  { value: "custom", label: "Valor personalizado [custom]" },
                  { value: "literal", label: "Texto literal" },
                ],
              },
              { name: "token_value", component: "input-text", label: "token value" },
              { name: "field_path", component: "input-text", label: "field path" },
              { name: "counter_index_name", component: "input-text", label: "counter index name" },
              { name: "zero_padding", component: "input-number", label: "zero padding" },
              {
                name: "format_mode",
                component: "input-menu",
                label: "format mode",
                options: [
                  { value: "default", label: "Default" },
                  { value: "letra", label: "Letra (A, B, C...)" },
                  { value: "romano", label: "Romano (I, II, III...)" },
                ],
              },
              { name: "condition_field", component: "input-text", label: "condition field" },
              { name: "condition_expected_value", component: "input-text", label: "condition expected value" },
              { name: "condition_return_value", component: "input-text", label: "condition return value" },
              { name: "custom_conditions", component: "input-text", label: "custom conditions" },
              { name: "order", component: "input-number", label: "order" },
            ],
          },
        },
      }),
  },
];
