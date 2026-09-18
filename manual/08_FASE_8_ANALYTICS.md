# FASE 8 --- Firebase Analytics

## Objetivo

Integrar Google Analytics 4 mediante Firebase Analytics en el portfolio
de Nicolás Cragno para medir visitas e interacciones relevantes sin
modificar el diseño ni la lógica funcional del sitio.

Esta fase debe ejecutarse después de que Firebase Hosting esté
correctamente identificado/configurado y el portfolio pueda compilarse y
publicarse.

La implementación debe ser simple, centralizada y fácil de mantener.

------------------------------------------------------------------------

# 1. Inspección previa obligatoria

Antes de modificar código:

1.  Revisar la configuración Firebase existente.
2.  Identificar:
    -   `apiKey`
    -   `authDomain`
    -   `projectId`
    -   `storageBucket`
    -   `messagingSenderId`
    -   `appId`
    -   `measurementId`
3.  Confirmar que corresponde al proyecto Firebase utilizado por este
    portfolio.
4.  Revisar si Firebase SDK ya está instalado.
5.  Revisar si Analytics ya está inicializado en algún archivo.
6.  Evitar crear configuraciones duplicadas.

Si falta `measurementId` o Analytics no está habilitado para la Web App,
NO inventarlo. Detener esa parte e informar exactamente qué
dato/configuración falta.

------------------------------------------------------------------------

# 2. Firebase SDK

Si Firebase SDK todavía no está instalado, instalar únicamente el
paquete oficial necesario:

``` bash
npm install firebase
```

No instalar Firebase Admin SDK.

No agregar Firestore, Authentication, Storage, Functions u otros
servicios solo por utilizar Analytics.

------------------------------------------------------------------------

# 3. Configuración Firebase

La configuración cliente debe quedar centralizada.

Ubicación recomendada:

``` text
src/
└── config/
    └── firebase.config.js
```

Estructura conceptual:

``` javascript
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "G-XXXXXXXXXX",
};

export const firebaseApp = initializeApp(firebaseConfig);
```

Utilizar exclusivamente los valores reales correspondientes al proyecto.

No inventar valores.

## Seguridad

La configuración cliente de una Firebase Web App no debe confundirse con
credenciales administrativas.

Aun así:

-   no incluir service accounts;
-   no incluir private keys;
-   no incluir Firebase Admin;
-   no incluir secretos de backend;
-   no copiar configuraciones de otros proyectos.

------------------------------------------------------------------------

# 4. Arquitectura de Analytics

No distribuir llamadas directas a `logEvent()` por toda la aplicación.

Crear una capa centralizada.

Estructura recomendada:

``` text
src/
├── config/
│   └── firebase.config.js
│
└── analytics/
    ├── analytics.js
    └── events.js
```

------------------------------------------------------------------------

# 5. analytics.js

Responsabilidad:

-   comprobar si Analytics está soportado;
-   obtener/inicializar la instancia;
-   evitar errores en entornos donde Analytics no pueda ejecutarse;
-   proporcionar una forma segura de registrar eventos.

Concepto:

``` javascript
import {
  getAnalytics,
  isSupported,
  logEvent,
} from "firebase/analytics";

import { firebaseApp } from "../config/firebase.config";

let analyticsInstance = null;

export const initializeAnalytics = async () => {
  const supported = await isSupported();

  if (!supported) {
    return null;
  }

  analyticsInstance = getAnalytics(firebaseApp);

  return analyticsInstance;
};

export const trackEvent = (eventName, parameters = {}) => {
  if (!analyticsInstance) {
    return;
  }

  logEvent(analyticsInstance, eventName, parameters);
};
```

Codex puede mejorar esta implementación si existe una solución
técnicamente más correcta para la arquitectura actual.

Mantenerla simple.

------------------------------------------------------------------------

# 6. events.js

Centralizar nombres y helpers de eventos.

Los componentes deberían utilizar funciones descriptivas como:

``` javascript
trackProjectView("cantapp");
trackCvClick("es");
trackContactClick("linkedin");
```

en vez de:

``` javascript
logEvent(...)
```

directamente.

------------------------------------------------------------------------

# 7. Eventos requeridos

## 7.1 Project View

Evento:

``` text
project_view
```

Registrar cuando el usuario abre el detalle de un proyecto.

Parámetros:

``` text
project_id
project_name
```

Ejemplos de IDs:

``` text
cantapp
nexar
mirada-geek
gf-futbol-web
gf-futbol-app
sonar
```

No registrar datos personales del visitante.

------------------------------------------------------------------------

## 7.2 CV Click

Evento:

``` text
cv_click
```

Registrar cuando se abre el CV.

Parámetro:

``` text
language
```

Valores:

``` text
es
en
```

------------------------------------------------------------------------

## 7.3 Contact Click

Evento:

``` text
contact_click
```

Registrar clicks en:

``` text
linkedin
github
email
whatsapp
```

Parámetro:

``` text
method
```

No registrar dirección de email ni número telefónico como parámetro.

Ejemplo:

``` javascript
trackContactClick("linkedin");
```

------------------------------------------------------------------------

## 7.4 Project External Link

Evento:

``` text
project_external_click
```

Registrar cuando se abre una web pública o GitHub asociado a un
proyecto.

Parámetros:

``` text
project_id
destination
```

`destination`:

``` text
website
github
```

No enviar la URL completa si no es necesario.

------------------------------------------------------------------------

## 7.5 Language Change

Evento:

``` text
language_change
```

Registrar cuando el visitante cambia manualmente ES/EN.

Parámetros:

``` text
from
to
```

No registrar este evento simplemente por cargar `/` o `/en`.

------------------------------------------------------------------------

# 8. Eventos opcionales

Solo implementar si resulta limpio y útil.

## Theme Change

Evento:

``` text
theme_change
```

Parámetro:

``` text
theme
```

Valores:

``` text
dark
light
```

No es prioritario.

Si complica innecesariamente la implementación, omitirlo.

------------------------------------------------------------------------

# 9. Page Views

Firebase Analytics / Google Analytics puede registrar navegación inicial
automáticamente según la configuración utilizada.

Sin embargo, el portfolio funciona como SPA y dispone de:

``` text
/
```

y:

``` text
/en
```

Revisar el comportamiento real antes de agregar tracking manual.

Objetivo:

-   no duplicar `page_view`;
-   poder diferenciar correctamente español e inglés;
-   registrar navegación relevante si React cambia rutas sin recargar.

Si el tracking automático ya produce datos correctos, no duplicarlo.

Si es necesario registrar cambios SPA manualmente, hacerlo de manera
centralizada.

------------------------------------------------------------------------

# 10. Integración con componentes

Agregar tracking exclusivamente en interacciones reales.

Ejemplos:

## Project Card

Al abrir detalle:

``` javascript
trackProjectView(project.id, project.name);
```

## CV

``` javascript
trackCvClick(language);
```

## Contact

``` javascript
trackContactClick("linkedin");
```

## Proyecto público

``` javascript
trackProjectExternalClick(project.id, "website");
```

## Selector de idioma

``` javascript
trackLanguageChange(currentLanguage, nextLanguage);
```

No introducir lógica Analytics compleja dentro de los componentes.

------------------------------------------------------------------------

# 11. Qué NO medir

No registrar:

-   texto escrito por usuarios;
-   dirección IP manualmente;
-   email del visitante;
-   teléfono del visitante;
-   información sensible;
-   fingerprints;
-   datos de formularios;
-   identificadores innecesarios;
-   información privada de clientes;
-   datos internos de Cantapp/Nexar/Mirada Geek.

El portfolio no debe crear perfiles propios de visitantes.

------------------------------------------------------------------------

# 12. Desarrollo local

Analytics no debe romper el desarrollo local.

Si resulta razonable, evitar registrar eventos durante desarrollo para
no contaminar estadísticas.

Ejemplo conceptual:

``` javascript
if (import.meta.env.DEV) {
  return;
}
```

La decisión debe quedar centralizada, no repetida en componentes.

Si se necesita validar Analytics durante desarrollo, documentar
temporalmente cómo habilitar DebugView sin dejar comportamiento de debug
permanente en producción.

------------------------------------------------------------------------

# 13. Manejo de errores

Si Analytics:

-   no está soportado;
-   está bloqueado por el navegador;
-   está bloqueado por extensiones;
-   falla al inicializar;

el portfolio debe continuar funcionando normalmente.

Analytics nunca debe bloquear:

-   render;
-   navegación;
-   modales;
-   CV;
-   contacto;
-   cambio de idioma;
-   cambio de tema.

No mostrar errores de Analytics al visitante.

------------------------------------------------------------------------

# 14. Privacidad

Mantener Analytics limitado a métricas razonables del portfolio.

No implementar:

-   publicidad;
-   remarketing;
-   perfiles publicitarios;
-   Google Signals;
-   tracking cross-site personalizado;

salvo instrucción explícita futura.

Si la configuración actual de Google Analytics tiene opciones
adicionales activadas, informarlo si es detectable desde la
implementación/configuración disponible.

No implementar banners o consentimiento de cookies de forma improvisada
dentro de esta fase. Si la configuración legal/privacidad elegida
requiere consentimiento, informarlo como pendiente separado para
resolverlo correctamente.

------------------------------------------------------------------------

# 15. Métricas que Nicolás debe poder consultar

La implementación debe permitir responder preguntas como:

``` text
¿Cuántas personas visitan el portfolio?

¿Qué proyectos generan más aperturas?

¿Cuántas veces se abrió Cantapp?

¿Cuántas veces se abrió Nexar?

¿Cuántas veces se abrió SONAR?

¿Cuántas personas hicieron click en el CV?

¿Se consulta más el CV español o inglés?

¿Cuántos clicks recibió LinkedIn?

¿Cuántos clicks recibió GitHub?

¿Cuántos clicks recibió WhatsApp?

¿Cuántos clicks recibió Email?

¿Cuántas visitas/interacciones corresponden a ES y EN?

¿Qué webs públicas de proyectos reciben clicks?
```

No crear todavía un dashboard propio.

Los datos se consultarán desde Google Analytics / Firebase Analytics.

------------------------------------------------------------------------

# 16. Naming

Mantener nombres de eventos estables.

Usar:

``` text
project_view
cv_click
contact_click
project_external_click
language_change
theme_change
```

No crear variantes como:

``` text
click_cv
cv_clicked
download_cv
open_resume
```

para la misma acción.

Centralizar los nombres para evitar inconsistencias.

------------------------------------------------------------------------

# 17. Integración con la data de proyectos

Cuando sea posible, utilizar `project.id` ya existente.

No hardcodear repetidamente:

``` text
Cantapp
Nexar
Mirada Geek
...
```

dentro de Analytics.

Ejemplo:

``` javascript
trackProjectView(project.id, project.name);
```

La data del proyecto sigue siendo la fuente de verdad.

------------------------------------------------------------------------

# 18. Testing

Comprobar que:

1.  la app inicia;
2.  Analytics se inicializa únicamente cuando corresponde;
3.  no hay errores si Analytics está bloqueado;
4.  abrir Cantapp registra `project_view`;
5.  abrir Nexar registra `project_view`;
6.  abrir CV ES registra `cv_click: es`;
7.  abrir CV EN registra `cv_click: en`;
8.  LinkedIn registra `contact_click: linkedin`;
9.  GitHub registra `contact_click: github`;
10. Email registra `contact_click: email`;
11. WhatsApp registra `contact_click: whatsapp`;
12. selector de idioma registra `language_change`;
13. links públicos de proyectos registran `project_external_click`;
14. no se generan eventos duplicados por un único click;
15. navegación normal continúa funcionando.

Usar DebugView o herramientas oficiales de Analytics si están
disponibles/configuradas.

------------------------------------------------------------------------

# 19. Build

Ejecutar:

``` bash
npm run build
```

El build debe finalizar correctamente.

Analytics no debe provocar warnings críticos ni errores.

------------------------------------------------------------------------

# 20. Deploy

Si FASE 7 ya dejó Firebase Hosting configurado correctamente, publicar
exclusivamente Hosting:

``` bash
firebase deploy --only hosting
```

No desplegar:

-   Firestore Rules;
-   Functions;
-   Storage Rules;
-   otros servicios.

Antes del deploy confirmar nuevamente el Firebase Project ID.

------------------------------------------------------------------------

# 21. Verificación en producción

Después del deploy:

-   abrir URL real;
-   navegar `/`;
-   navegar `/en`;
-   abrir al menos un proyecto;
-   abrir CV;
-   realizar una interacción de contacto de prueba cuando sea razonable;
-   comprobar Analytics mediante herramientas
    oficiales/DebugView/Realtime cuando sea posible.

No generar múltiples eventos artificiales innecesarios.

------------------------------------------------------------------------

# 22. Archivos esperados

Como mínimo:

``` text
src/
├── config/
│   └── firebase.config.js
│
└── analytics/
    ├── analytics.js
    └── events.js
```

Los nombres pueden adaptarse si la arquitectura existente ya posee una
convención clara.

No crear estructuras duplicadas.

------------------------------------------------------------------------

# 23. Restricciones

-   No agregar Firestore.
-   No agregar Auth.
-   No agregar Storage.
-   No agregar Functions.
-   No agregar Firebase Admin.
-   No agregar backend.
-   No modificar Firebase Hosting salvo lo necesario para publicar el
    build actualizado.
-   No cambiar diseño.
-   No cambiar textos.
-   No cambiar estructura de proyectos.
-   No agregar dependencias de Analytics adicionales si Firebase
    Analytics alcanza.
-   No inventar `measurementId`.
-   No inventar configuración Firebase.
-   No enviar PII a Analytics.
-   No avanzar hacia nuevas funcionalidades.

------------------------------------------------------------------------

# 24. Entrega

Al finalizar informar:

-   Firebase Project ID utilizado;
-   si Analytics estaba previamente habilitado;
-   `measurementId` utilizado, mostrando únicamente lo necesario para
    identificar la propiedad;
-   archivos creados;
-   archivos modificados;
-   eventos implementados;
-   eventos opcionales implementados/omitidos;
-   comportamiento de `page_view`;
-   resultado de `npm run build`;
-   resultado del deploy si fue realizado;
-   forma utilizada para verificar Analytics;
-   pendientes.

Detenerse al completar FASE 8.
