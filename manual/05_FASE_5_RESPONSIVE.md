# FASE 5 --- Responsive y UX

## Regla base

No introduzcas comentarios en el código

## Objetivo

Cerrar desktop, tablet y mobile.

## Desktop

- padding lateral cómodo, mínimo 5px;
- secciones amplias;
- tres project cards por fila;
- modales con mínimo 20px al viewport;
- evitar líneas de texto excesivamente largas.

## Tablet

Adaptar columnas y navegación sin comprimir excesivamente
cards/contenido.

## Mobile

- Header hamburguesa.
- Hero vertical y legible.
- Projects: carrusel touch-friendly preferido; fallback vertical.
- Modales fullscreen.
- `← Volver` visible.
- Bloquear scroll del fondo con modal abierto.
- Restaurar scroll/focus al cerrar cuando sea razonable.

## Accesibilidad

- focus visible;
- botones/links semánticos;
- aria/labels cuando corresponda;
- contraste suficiente;
- teclado;
- alt útil;
- no depender solo del color.

## Motion

Sin animaciones decorativas. Solo transiciones funcionales discretas.
Respetar `prefers-reduced-motion`.

## Variables

Todo nuevo valor repetido de spacing, breakpoint, tamaño, gap o modal
debe centralizarse cuando corresponda.

## Pruebas

Mobile angosto, mobile estándar, tablet, notebook y desktop ancho. Sin
overflow horizontal no intencional.

## Restricciones

No cambiar contenido aprobado ni agregar features. No avanzar a FASE 6.

## Validación

Responsive, themes, idiomas, modales, navegación y `npm run build`.

Detenerse al completar FASE 5.
