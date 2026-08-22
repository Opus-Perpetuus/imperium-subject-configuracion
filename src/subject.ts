import { define_subject } from "@opus-perpetuus/imperium-core-kit";
import pkg from "../package.json" with { type: "json" };
import { attachment_management_module } from "./modules/attachment-management/attachment-management.routes.ts";
import { user_module } from "./modules/user/user.routes.ts";
import { user_group_module } from "./modules/user-group/user-group.routes.ts";
import { zpl_management_module } from "./modules/zpl-management/zpl-management.routes.ts";
import { user_pin_module } from "./modules/user-pin/user-pin.routes.ts";
import { epson_ticket_template_module } from "./modules/epson-ticket-template/epson-ticket-template.routes.ts";
import { country_module } from "./modules/country/country.routes.ts";
import { record_rules_module } from "./modules/record-rules/record-rules.routes.ts";
import { tags_module } from "./modules/tags/tags.routes.ts";
import { menu_management_module } from "./modules/menu-management/menu-management.routes.ts";
import { configuration_module } from "./modules/configuration/configuration.routes.ts";
import { interface_restriction_module } from "./modules/interface-restriction/interface-restriction.routes.ts";
import { access_rights_module } from "./modules/access-rights/access-rights.routes.ts";
import { module_management_module } from "./modules/module-management/module-management.routes.ts";
import { debug_log_module } from "./modules/debug-log/debug-log.routes.ts";
import { status_option_control_module } from "./modules/status-option-control/status-option-control.routes.ts";
import { api_keys_module } from "./modules/api-keys/api-keys.routes.ts";
import { custom_field_control_module } from "./modules/custom-field-control/custom-field-control.routes.ts";
import { custom_pattern_condition_module } from "./modules/custom-pattern-condition/custom-pattern-condition.routes.ts";
import { custom_pattern_increment_sequence_parts_module } from "./modules/custom-pattern-increment-sequence-parts/custom-pattern-increment-sequence-parts.routes.ts";
import { auto_increment_control_module } from "./modules/auto-increment-control/auto-increment-control.routes.ts";
import { branchoffice_module } from "./modules/branchoffice/branchoffice.routes.ts";
import { model_tracker_module } from "./modules/model-tracker/model-tracker.routes.ts";
import { seed_demo } from "./seed.ts";

export const SUBJECT = define_subject({
  id: "SUBJECT-configuracion",
  name: "Configuración",
  version: pkg.version,
  image: `ghcr.io/opus-perpetuus/subject-configuracion:${pkg.version}`,
  compat: { nox: ">=0.5.0", kit: "^0.5.0" },
  schema_version: 1,
  menu_root: {
    id: "configuracion.root",
    label: "Configuración",
    order: 0,
  },
  modules: [attachment_management_module, user_module, user_group_module, zpl_management_module, user_pin_module, epson_ticket_template_module, country_module, record_rules_module, tags_module, menu_management_module, configuration_module, interface_restriction_module, access_rights_module, module_management_module, debug_log_module, status_option_control_module, api_keys_module, custom_field_control_module, custom_pattern_condition_module, custom_pattern_increment_sequence_parts_module, auto_increment_control_module, branchoffice_module, model_tracker_module],
  seed: seed_demo,
});

export const KIRLET = SUBJECT;
