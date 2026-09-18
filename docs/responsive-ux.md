# FASE 5 — Responsive y UX

Se completó el alcance de `manual/05_FASE_5_RESPONSIVE.md`, sin modificar
los textos aprobados ni avanzar a FASE 6.

## Ajustes

- Controles ES/EN con objetivos táctiles de al menos 44 × 44px.
- Nombre del Header y enlaces del Footer adaptables al texto ampliado.
- Altura real del Header medida mediante ResizeObserver y utilizada por
  las anclas y el límite de altura del menú desplegable.
- Navegación por anclas que mueve el foco a la sección destino. El menú
  devuelve el foco a un control visible al cruzar el breakpoint desktop.
- Cards con padding adaptable y lista vertical en teléfonos. Dos columnas
  en tablet y tres en escritorio, sin carrusel ni dependencias nuevas.
- Bloqueo del fondo mediante posición fija, con contador para modales
  anidados, conservación de estilos previos y restauración del scroll al
  cerrar el último modal.
- Foco contenido con Tab y Shift+Tab, devolución al disparador y Escape
  que cierra solamente el diálogo superior.
- Modales fullscreen por debajo de 64rem y al menos 20px al viewport en
  escritorio. Barra de «Volver» compacta en pantallas de hasta 30rem de alto.
- Padding de seguridad lateral/inferior para el contenido de modales móviles.
- Sin animaciones decorativas; transiciones anuladas con movimiento reducido.

Las variables visuales se mantienen en `src/styles/variables.css`. Los
cortes de layout se definen en `src/styles/responsive.css` (40rem y 64rem);
el listener del Header utiliza el mismo umbral desktop de 64rem.

## Matriz verificada

Cada tamaño se probó en español e inglés y en tema claro y oscuro:

| Escenario | Viewport |
| --- | --- |
| Móvil angosto | 320 × 640 |
| Móvil estándar | 390 × 844 |
| Tablet | 768 × 1024 |
| Notebook compacto | 1024 × 768 |
| Notebook | 1366 × 768 |
| Desktop ancho | 1920 × 1080 |
| Móvil horizontal | 844 × 390 |

Resultados: sin overflow horizontal; columnas correctas; navegación y foco
correctos; medidas de modales correctas; «Volver» visible durante el scroll;
restauración del scroll de la página y del listado al volver del detalle.

Se comprobaron los pares de color de texto, texto secundario y enlaces
contra fondo y superficie, y texto del botón primario, con relación mínima
4.5:1. El foco sobre superficie supera 3:1. Las indicaciones existentes de
idioma activo, tema y estado no dependen exclusivamente del color.

También pasaron las comprobaciones de foco visible, texto ampliado al 200%
en 320px, cambio de foco al redimensionar el Header y reducción de movimiento.
`npm run build` y `npm run lint` correctos, sin errores JavaScript detectados.

La validación automatizada y las capturas corresponden a Edge/Chromium en
Windows, con viewports emulados. No se ejecutaron pruebas en dispositivos
físicos ni una auditoría con lector de pantalla. Los PDF y capturas reales
de proyectos pendientes de fases anteriores siguen pendientes.
