# Proyectos — FASE 3

La fuente de contenido es `manual/03_FASE_3_PROJECTS.md`. No se implementó
FASE 4 ni una sección independiente de GEBB Dev.

## Componentes

- `Projects`: tres destacados y apertura del listado completo.
- `ProjectCard`: resumen y botón de detalle con nombre accesible.
- `Modal`: diálogo nativo, foco inicial en el título, bloqueo del scroll de
  fondo y devolución del foco al control que lo abrió. Cierre por botón,
  Escape y clic en el fondo exterior en escritorio.
- `ProjectsModal`: las seis cards; conserva su posición de scroll cuando
  se abre un detalle encima.
- `ProjectDetailModal`: contenido condicional, galerías y enlaces opcionales.

El diálogo de detalle deja el listado debajo e inactivo. «Volver» o Escape
cierra únicamente el detalle y devuelve el foco a su card. Al cerrar el
listado, el foco vuelve a «Ver todos los proyectos». Desde un destacado,
cerrar el detalle devuelve el foco a ese destacado.

En escritorio se muestran tres cards por fila y modales centrados con al
menos 20px al viewport. Por debajo de 64rem los modales ocupan la pantalla.
Las cards usan una lista vertical en teléfonos, dos columnas desde 40rem
y tres desde 64rem. Se prioriza lectura, teclado y controles táctiles sin
introducir un carrusel ni dependencias.

## Datos

`src/data/{es,en}/projects.js` contiene seis proyectos en el mismo orden y
con la misma estructura por idioma. `projectsContent.js` contiene todos los
textos de la interfaz y etiquetas de los campos.

Campos disponibles: `id`, `name`, `featured`, `imageDirectory`, `client`,
`brand`, `status`, `period`, `type`, `access`, `description`, `challenge`,
`solution`, `participation`, `features`, `featuresLabel`, `technologies`,
`impact`, `metrics`, `gallery`, `collaborators`, `web`, `github`.

Los campos opcionales se omiten cuando no existen. Las listas vacías no
generan títulos. Cada colaborador usa `name` y opcionalmente `role` y `url`.
Cada imagen de galería requiere `src` y `alt`; admite `caption`, `width` y
`height`. Las rutas `src` deben apuntar a archivos reales dentro de
`public/images/projects/<id>/`, con textos alternativos ES/EN.

No se añadieron GitHub ni URLs privadas. La única web de proyecto aportada
es la de GF Fútbol Web. SONAR muestra las tecnologías de Nicolás en su
lista; Java, Spring Boot, MySQL y REST API se atribuyen exclusivamente a
Braian en su colaboración. No se añadieron usuarios estimados.

## Capturas pendientes

- Cantapp: dashboard, personal/flota, stock y ficha de viaje.
- Nexar: dashboard, personal/flota, formulario de viaje y ficha de viaje.
- Mirada Geek: dashboard, productos, ventas y estadísticas.
- GF Fútbol Web: inicio, noticias y detalle.
- GF Fútbol App y SONAR: el manual indica que no hay capturas definitivas.

No se solicitan rutas de imágenes inexistentes ni se muestran galerías
vacías. Los CV siguen pendientes de las fases anteriores.

## Validación

`npm run build` y `npm run lint` correctos. Se verificaron la paridad de
estructuras ES/EN y el render de campos opcionales con datos mínimos y con
galería, GitHub y colaborador sin enlace.

En Edge headless se probaron los seis detalles, apertura directa y desde
el listado, cierre por Escape, botón y fondo exterior, navegación con Tab
y Shift+Tab, devolución del foco y restauración del scroll. Se verificaron
los temas claro/oscuro y anchos de 320, 390, 768, 1024 y 1440px: fullscreen
en móvil/tablet, márgenes de al menos 20px en escritorio, sin overflow
horizontal ni errores JavaScript detectados.
