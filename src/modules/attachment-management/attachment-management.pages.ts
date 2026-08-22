import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuracion";

export const attachment_management_pages: KirletPageDecl[] = [
  {
    id: "configuracion.attachment-management",
    path: "attachment-management",
    permission: "subject.configuracion.attachment-management.read",
    build: () =>
      build_feature_shell_page({
        id: "configuracion.attachment-management",
        owner: "subject-configuracion",
        title: "Documentos y adjuntos",
        props: {
          basePath: "attachment-management",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Documentos y adjuntos",
            subtitle: "Submenú de configuracion",
            pluralLabel: "documentos y adjuntos",
            singularLabel: "documentos y adjuntos",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/attachment-management`,
            record: `${API}/attachment-management/:id`,
            create: { method: "POST", action: `${API}/attachment-management` },
            update: { method: "PATCH", action: `${API}/attachment-management/:id` },
            delete: { method: "DELETE", action: `${API}/attachment-management/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "name_stored", label: "name stored", sortable: true, priority: 3 },
              { key: "mimetype", label: "mimetype", sortable: true, priority: 3 },
              { key: "created_by_id", label: "created by id", sortable: true, priority: 3 },
              { key: "related_model", label: "related model", sortable: true, priority: 3 },
              { key: "related_record_id", label: "related record id", sortable: true, priority: 3 },
              { key: "field", label: "field", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "name_stored", component: "input-text", label: "name stored" },
              { name: "mimetype", component: "input-text", label: "mimetype" },
              { name: "created_by_id", component: "input-text", label: "created by id" },
              { name: "related_model", component: "input-text", label: "related model" },
              { name: "related_record_id", component: "input-text", label: "related record id" },
              { name: "field", component: "input-text", label: "field" },
              { name: "size_in_kb", component: "input-text", label: "size in kb" },
              { name: "file_ext", component: "input-text", label: "file ext" },
              { name: "index_if_is_array", component: "input-text", label: "index if is array" },
              { name: "inside_array", component: "input-text", label: "inside array" },
            ],
          },
        },
      }),
  },
];
