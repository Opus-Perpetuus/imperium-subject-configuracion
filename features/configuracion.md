# Configuración

Parámetros del sistema de la app Configuración: quien tiene
`subject.configuracion.configuration.read` ve el listado de parámetros. Queda
probado que la app responde ese listado por HTTP con solo GET.

## Sub-features

La app hace la acción de `listado-parametros`: sí.
Esta ficha no lleva línea `Subject:` con imagen: el catálogo no da un tag
para rellenarla. El hueco está en `despliegue.md` del monorepo.

- `listado-parametros` responde `GET /configuration` con status HTTP 200.

### Archivos y contratos

- `src/subject.ts` — `define_subject` de `subject-configuracion`; no declara
  `dependsOn`.
- `src/modules/configuration/configuration.routes.ts` — `define_crud` del
  recurso `configuration` (`GET /configuration`, `GET /configuration/:id`).
- `src/modules/configuration/configuration.pages.ts` — página `configuration`
  con permiso `subject.configuracion.configuration.read`; lista desde
  `api://m/subject-configuracion/configuration`.

### Mapa

| id | ruta | rol semilla | pasos | esperado | muta | receta |
| --- | --- | --- | --- | --- | --- | --- |
| `subject-configuracion.listado-parametros` | `GET /configuration` | sin definir; requiere `subject.configuracion.configuration.read` | GET al listado | HTTP 200 | no | sin definir |

## How to get to it (user POV)

- Menú raíz `Configuración`, página `configuration` (Parametros del sistema).

## Driving it with arnes

Preconditions:

- Doctor en 0. Si falta `subject-configuracion`, la receta sale `omitida`.
- Base QA y rol semilla: sin definir. Hasta que se nombren no corre ninguna
  receta que mute.

- **Abrir.** `GET /configuration` de la app; el resultado es el status HTTP.
- **Proof.** `evidence/configuracion/`.

## Gotchas

- Una receta de lectura que escribe sale en fallo aunque la pantalla se vea bien.
- Mutar solo contra la base QA, cuando esta ficha la nombre.
- `omitida` no cuenta como probada.
