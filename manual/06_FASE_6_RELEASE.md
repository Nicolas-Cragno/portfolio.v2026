# FASE 6 --- SEO, Analytics y Release

## Regla base

No introduzcas comentarios en el código

## Assets

Reemplazar placeholders disponibles: hero dark/light, capturas, CV
ES/EN, favicon y OG image.

## SEO

ES: - title `Nicolás Cragno | Software Developer` - descripción
profesional.

EN: equivalente natural.

Configurar lang, Open Graph, Twitter Card, favicon, robots, sitemap si
corresponde y canonical solo cuando exista dominio real. No inventar
`nicolascragno.com` antes de conectarlo.

## Analytics

Eventos simples: - visita; - proyecto abierto; - CV; - LinkedIn; -
GitHub; - Email; - WhatsApp; - web/GitHub de proyecto.

Evitar tracking innecesario.

## Firebase Hosting

- confirmar proyecto Firebase correcto;
- revisar `.firebaserc`;
- revisar `firebase.json`;
- build producción;
- SPA rewrite para `/en`;
- evitar deploy accidental a otros proyectos.

Primero puede usarse `*.web.app`. Luego conectar `nicolascragno.com`
cuando se registre el dominio.

## Repo

Público en GitHub. No botón especial al repo del portfolio.

## Seguridad

Sin secretos, service accounts ni datos privados de clientes. Revisar
capturas.

## Revisión final

`/`, `/en`, themes, responsive, links, CV, modales, imágenes, metadata,
favicon, analytics, routing, consola y `npm run build`.

Detenerse al completar FASE 6 e informar URL, proyecto Firebase y
pendientes.
