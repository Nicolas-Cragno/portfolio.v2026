# FASE 3 --- Projects

## Regla base

No introduzcas comentarios en el código

## Objetivo

Cards destacadas, listado completo y detalle mediante modales
reutilizables.

## Destacados

1.  Cantapp
2.  Nexar
3.  Mirada Geek

Desktop: tres cards en fila. Mobile: preferir carrusel horizontal
touch-friendly; si perjudica UX/accesibilidad, lista vertical. No
instalar librería pesada solo para esto.

Botón: `Ver todos los proyectos`.

## Modales

`ProjectsModal`: seis proyectos. `ProjectDetailModal`: detalle del
seleccionado.

Desktop: centrados, máximo espacio útil, mínimo 20px al viewport.
Mobile: fullscreen y `← Volver`.

Campos condicionales: nombre, cliente/marca, estado, período, tipo,
descripción, desafío, solución, participación, features, tecnologías,
impacto/métricas, galería, colaboradores, acceso, web y GitHub. No
renderizar campos inexistentes.

## Cantapp

- Cliente: Transportes Cantarini
- Mar 2025 --- Actualidad
- En producción · Desarrollo continuo
- Profesional · Featured
- +10 usuarios internos
- Privado
- Objetivo: centralizar gestión operativa y reemplazar
  Excel/papel/WhatsApp.
- Sectores: Seguridad/Portería, Tráfico, Satelital, talleres.
- Funciones: Portería, Personal, Flota, Taller, Stock, Tráfico,
  Combustible, Administración, Viajes, Eventos.
- Impacto: consultas históricas específicas de potencialmente una
  jornada a pocos minutos; información compartida y consistente.
- Tecnologías: React, JavaScript, Firebase, Firestore, Firebase
  Authentication, REST APIs, Git.
- Integración: API FiBOT.
- Colaboración Braian Pirelli: procesamiento de información para
  reportes.
- Imágenes: dashboard, personal/flota, stock, ficha viaje.

## Nexar

- Cliente: Transcan Cargas
- May 2026 --- Actualidad
- En producción · Primeras pruebas reales
- Colaboración · Featured
- Privado
- Objetivo: cuentas corrientes fiables de choferes.
- Funciones: flota, choferes/unidades, proveedores, clientes, viajes,
  gastos, consumos, movimientos, liquidaciones.
- Impacto: reemplazo de Excel por saldos/movimientos consistentes,
  correlativos y reglas de negocio.
- Tecnologías: React, JavaScript, Firebase, Firestore, Firebase
  Authentication, Git.
- Nicolás: UI/UX, maquetado, autenticación y gestión.
- Braian: reportes, hojas de ruta y documentación operativa.
- Imágenes: dashboard, personal/flota, formulario viaje, ficha viaje.

## Mirada Geek

- GEBB Dev · Cliente Mirada Geek
- Jun 2026 --- Actualidad
- En producción · Etapa final de desarrollo
- Featured · Privado
- Desarrollo integral.
- Productos, stock, compras, ventas, clientes, proveedores, usuarios,
  estadísticas.
- Impacto: historial consistente, cantidades/precios históricos y
  stock automático.
- Tecnologías: React, JavaScript, Firebase, Firestore, Firebase
  Authentication, Firestore Security Rules, Git.
- Imágenes: dashboard, productos, ventas, estadísticas.

## GF Fútbol Web

- GEBB Dev · Cliente GF Fútbol
- Ene 2026 --- Ago 2026
- En producción · Público
- Desarrollo integral + noticias semanales.
- Institucional, noticias, avisos, contacto.
- Tecnologías: React, JavaScript, Firebase, Firestore, Git.
- Web: `https://espaciogffutbol.web.app/`
- Imágenes: Inicio, Noticias, Detalle.

## GF Fútbol App

- GEBB Dev · Cliente GF Fútbol
- Sep 2026 --- Actualidad
- En desarrollo · Privado
- Desarrollo integral.
- Jugadores, eventos, historiales y estadísticas para
  entrenadores/coordinadores; futura integración conceptual con
  estadísticas de la web.
- Tecnologías: React, JavaScript, Firebase, Firestore, Firebase
  Authentication, Firestore Security Rules, Git.
- No mostrar usuarios estimados.
- Sin capturas definitivas.

## SONAR

- GEBB Dev
- Ago 2026 --- Actualidad
- En desarrollo · Proyecto propio/colaboración
- Objetivo: comunidad para músicos/bandas independientes, inicialmente
  Zona Norte + CABA, proyección nacional.
- Nicolás: frontend; React/JavaScript; Firestore para publicaciones,
  comentarios, interacciones y datos dinámicos/no críticos; Firebase
  Authentication.
- Braian: backend y datos estructurados/críticos con Java, Spring
  Boot, MySQL y REST API.
- No atribuir Java/Spring/MySQL al stack personal de Nicolás.
- Features previstas: perfiles, publicaciones, comentarios, follows,
  canciones, shows/eventos, novedades.
- No mostrar +100 usuarios estimados.
- Colaborador: Braian Pirelli ---
  `https://www.linkedin.com/in/braian-pirelli/`
- Sin capturas definitivas.

## GEBB Dev

Ecosistema de proyectos personales/colaborativos de Nicolás Cragno en
colaboración con Braian Pirelli. No crear sección independiente todavía.

## Restricciones

No inventar métricas, links, tecnologías ni URLs privadas. No avanzar a
FASE 4.

## Validación

Cards, ambos modales, condicionales, desktop/mobile, focus razonable y
`npm run build`.

Detenerse al completar FASE 3.
