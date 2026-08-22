import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const module_management_pages: KirletPageDecl[] = [
  {
    id: "configuracion.module-management",
    path: "module-management",
    permission: "subject.configuracion.module-management.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.module-management",
        owner: "subject-configuracion",
        title: "Módulos",
        props: {
          basePath: "module-management",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Módulos",
            subtitle: "Submenú de configuracion",
            pluralLabel: "módulos",
            singularLabel: "módulos",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/module-management`,
            record: `${API}/module-management/:id`,
            create: { method: "POST", action: `${API}/module-management` },
            update: { method: "PATCH", action: `${API}/module-management/:id` },
            delete: { method: "DELETE", action: `${API}/module-management/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "is_enable", label: "is enable", sortable: true, priority: 3 },
              { key: "path", label: "path", sortable: true, priority: 3 },
              { key: "model_id", label: "model id", sortable: true, priority: 3 },
              { key: "module_location", label: "module location", sortable: true, priority: 3 },
              { key: "module_name", label: "module name", sortable: true, priority: 3 },
              { key: "parent_module", label: "parent module", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "is_enable", component: "input-checkbox", label: "is enable" },
              { name: "path", component: "input-text", label: "path" },
              { name: "model_id", component: "input-text", label: "model id" },
              { name: "module_location", component: "input-text", label: "module location" },
              { name: "module_name", component: "input-text", label: "module name" },
              { name: "parent_module", component: "input-text", label: "parent module" },
              { name: "module_dependencies", component: "input-text", label: "module dependencies" },
              { name: "data_installed_at", component: "input-text", label: "data installed at" },
              { name: "reference", component: "input-text", label: "reference" },
            ],
          },
        },
      }),
  },
];
