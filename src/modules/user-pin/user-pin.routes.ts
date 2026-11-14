import {
  define_crud,
  define_module,
  type KirletCtx,
  type KirletRouteTable,
} from "@opus-perpetuus/imperium-core-kit";
import {
  prepare_user_pin_row,
  redact_user_pin_history,
  take_generated_pin,
  USER_PIN_NOTICE_MESSAGE,
} from "./user-pin.hash.ts";
import { user_pin_pages } from "./user-pin.pages.ts";
import { user_pin_tables } from "./user-pin.tables.ts";

const crud = define_crud({
  resource: "user-pin",
  table: "user_pin",
  soft_delete: true,
  soft_delete_field: "is_active",
  history: true,
  redact_history: redact_user_pin_history,
  default_sort: "name:asc",
  id_prefix: "user-pin",
  fields: {
    name: { type: "string", required: true, search: true },
    description: { type: "string", search: true },
    is_active: { type: "boolean" },
    state: { type: "string" },
    ref: { type: "string", search: true },
    search_field: { type: "string", search: true },
    created_by: { type: "string" },
    custom_data: { type: "json" },
    payload: { type: "json" },
    document_id: { type: "string", search: true },
    document_collection: { type: "string", search: true },
    document_model: { type: "string", search: true },
    document_label: { type: "string", search: true },
    is_global: { type: "boolean" },
    pin_type: { type: "string", search: true },
    pin_length: { type: "number" },
    auto_generated: { type: "boolean" },
    method: { type: "string", search: true },
    path: { type: "string", search: true },
    route_key: { type: "string", search: true },
    label: { type: "string", search: true },
    assigned_users: { type: "json" },
    pin_hash: { type: "string", list: false, sortable: false },
    pin_version: { type: "number" },
    feature_toggle_key: { type: "string", search: true },
    plain_pin: { type: "string", list: false, sortable: false },
    regenerate_pin: { type: "boolean", list: false, sortable: false },
  },
  options_map: { value: "id", label: "name" },
  hooks: {
    before_create: (ctx, row) => prepare_user_pin_row(ctx, row, null),
    before_update: (ctx, _id, patch, existing) => prepare_user_pin_row(ctx, patch, existing),
  },
});

type Handler = (ctx: KirletCtx) => Promise<unknown> | unknown;

/** Un PIN generado se muestra una sola vez, en la respuesta del guardado. */
function with_pin_notice(handler: Handler): Handler {
  return async (ctx) => {
    const res = await handler(ctx);
    const generated_pin = take_generated_pin(ctx);
    if (!generated_pin) return res;
    const user_pin_notice = { generated_pin, message: USER_PIN_NOTICE_MESSAGE };
    if (res instanceof Response) {
      const body = (await res.clone().json().catch(() => null)) as Record<string, unknown> | null;
      if (!body || typeof body !== "object") return res;
      const headers = new Headers(res.headers);
      headers.set("content-type", "application/json");
      return new Response(JSON.stringify({ ...body, user_pin_notice }), {
        status: res.status,
        headers,
      });
    }
    if (res && typeof res === "object") return { ...(res as Record<string, unknown>), user_pin_notice };
    return res;
  };
}

const NOTICE_ROUTES = new Set(["POST /user-pin", "PATCH /user-pin/:id"]);
const routes: KirletRouteTable = crud.map((entry) =>
  NOTICE_ROUTES.has(entry.pattern)
    ? { ...entry, handler: with_pin_notice(entry.handler as Handler) }
    : entry,
);

export const user_pin_module = define_module({
  resource: "user-pin",
  labels: {
    singular: "Pins de usuario",
    plural: "Pins de usuario",
    read: "Ver Pins de usuario",
    write: "Editar Pins de usuario",
  },
  routes,
  tables: user_pin_tables,
  pages: user_pin_pages,
  menu: [],
});
