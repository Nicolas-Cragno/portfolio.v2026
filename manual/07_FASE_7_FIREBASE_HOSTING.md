# FASE 7 --- Integración con Firebase Hosting

## Objetivo

Integrar el portfolio terminado con el proyecto Firebase ya existente
que Nicolás utilizaba para su portfolio anterior y dejar preparado un
deploy seguro mediante Firebase Hosting.

Esta fase debe reutilizar el Hosting existente siempre que la
configuración disponible permita identificarlo de forma inequívoca.

No crear un proyecto Firebase nuevo salvo instrucción explícita.

------------------------------------------------------------------------

## Contexto

El portfolio es:

-   React
-   Vite
-   JavaScript
-   SPA
-   Sin base de datos para contenido
-   Sin backend propio
-   Español en `/`
-   Inglés en `/en`
-   Build de Vite en `/dist`

Nicolás ya dispone de un proyecto/Hosting Firebase correspondiente a un
portfolio anterior.

Puede existir configuración previa con:

-   `.firebaserc`
-   `firebase.json`
-   Firebase SDK config
-   `apiKey`
-   `authDomain`
-   `projectId`
-   `storageBucket`
-   `messagingSenderId`
-   `appId`
-   otros valores Firebase

No asumir que todos esos valores son necesarios para Firebase Hosting.

------------------------------------------------------------------------

# 1. Inspección previa obligatoria

Antes de modificar configuración:

1.  Revisar el repositorio actual.
2.  Buscar configuración Firebase existente.
3.  Revisar:
    -   `.firebaserc`
    -   `firebase.json`
    -   `.env*`
    -   archivos `firebase.js`, `firebaseConfig.js` o equivalentes
    -   `package.json`
4.  Identificar el `projectId` existente.
5.  Identificar el Hosting target/site si existe.
6.  Comprobar que corresponde al portfolio de Nicolás y NO a otro
    proyecto.

No ejecutar deploy hasta poder identificar inequívocamente el proyecto
destino.

Si la información es ambigua, detenerse e informar qué dato falta.

------------------------------------------------------------------------

# 2. Seguridad

## Firebase Web API Key

Una Firebase Web API Key usada por el SDK cliente no debe tratarse
automáticamente como un secreto equivalente a una credencial
administrativa.

Sin embargo:

-   no copiar claves innecesariamente;
-   no agregar credenciales administrativas;
-   no agregar service accounts;
-   no agregar archivos JSON privados;
-   no agregar Firebase Admin SDK;
-   no agregar secretos de backend.

Si existe configuración Firebase cliente que el portfolio no utiliza, no
integrarla solo porque estaba presente en el portfolio anterior.

## Git

Antes de publicar:

-   revisar `.gitignore`;
-   comprobar que no existan service accounts;
-   comprobar que no existan secretos reales;
-   comprobar que el repositorio público sea seguro.

------------------------------------------------------------------------

# 3. Firebase CLI

Comprobar si Firebase CLI está disponible.

Si no está disponible, instalar únicamente la herramienta oficial
necesaria.

Verificar autenticación mediante Firebase CLI.

No cambiar de cuenta/proyecto sin necesidad.

------------------------------------------------------------------------

# 4. Configuración del proyecto

Preferir una configuración explícita mediante `.firebaserc`.

Ejemplo conceptual:

``` json
{
  "projects": {
    "default": "PROJECT_ID_REAL"
  }
}
```

Usar exclusivamente el `PROJECT_ID` real encontrado/confirmado.

No inventar IDs.

Antes del deploy mostrar claramente qué proyecto Firebase quedó
configurado como `default`.

------------------------------------------------------------------------

# 5. firebase.json

Configurar Firebase Hosting para Vite.

Base esperada:

``` json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

Adaptar únicamente si el proyecto existente necesita configuración
adicional legítima.

------------------------------------------------------------------------

# 6. SPA routing

El portfolio utiliza:

``` text
/
```

para español y:

``` text
/en
```

para inglés.

Firebase Hosting debe permitir:

-   entrar directamente a `/en`;
-   refrescar `/en`;
-   compartir `/en`;
-   navegar desde `/` a `/en`;
-   volver desde `/en` a `/`.

La regla SPA debe devolver `index.html` cuando React necesite resolver
la ruta.

Comprobar que assets estáticos continúen sirviéndose correctamente.

------------------------------------------------------------------------

# 7. Build

Ejecutar:

``` bash
npm run build
```

Confirmar que se genera:

``` text
dist/
```

Revisar que el build incluya correctamente:

-   JS/CSS;
-   imágenes;
-   CV ES;
-   CV EN;
-   favicon;
-   assets necesarios.

No desplegar si el build falla.

------------------------------------------------------------------------

# 8. Prueba local previa

Antes del deploy, probar el build de producción.

Puede utilizarse:

``` bash
npm run preview
```

y/o herramientas oficiales de Firebase cuando resulte útil.

Comprobar:

-   `/`
-   `/en`
-   Dark Mode
-   Light Mode
-   navegación
-   Header
-   Hero
-   Projects
-   modales
-   Experience
-   About
-   Contact
-   Footer
-   CV ES
-   CV EN
-   links externos
-   imágenes

------------------------------------------------------------------------

# 9. Hosting anterior

El Hosting existente puede contener la versión anterior del portfolio.

Antes del primer deploy:

1.  identificar la URL actual;
2.  confirmar que es efectivamente el portfolio anterior;
3.  informar que el próximo deploy reemplazará el contenido servido por
    ese Hosting;
4.  no crear un segundo Hosting innecesariamente.

No borrar manualmente el Hosting anterior.

El nuevo deploy debe reemplazar la versión publicada mediante el flujo
normal de Firebase Hosting.

------------------------------------------------------------------------

# 10. Deploy

Solo después de todas las verificaciones anteriores:

``` bash
firebase deploy --only hosting
```

Si existen múltiples sites/targets, utilizar explícitamente el target
correcto.

Nunca hacer un deploy general de Firebase si solo se necesita Hosting.

Evitar comandos como:

``` bash
firebase deploy
```

si pudieran desplegar Rules, Functions, Firestore u otros servicios no
relacionados.

------------------------------------------------------------------------

# 11. Verificación posterior

Después del deploy comprobar la URL publicada.

Validar nuevamente:

``` text
/
```

y:

``` text
/en
```

También:

-   refresh directo;
-   assets;
-   CV;
-   favicon;
-   metadata;
-   links;
-   mobile;
-   desktop.

------------------------------------------------------------------------

# 12. Dominio personalizado

No es obligatorio para completar esta fase.

El portfolio puede quedar inicialmente en el dominio Firebase:

``` text
*.web.app
```

o:

``` text
*.firebaseapp.com
```

Si el Hosting anterior ya tiene un dominio personalizado configurado, no
modificarlo sin necesidad.

El dominio deseado a futuro es:

``` text
nicolascragno.com
```

No configurar ni utilizar este dominio hasta que Nicolás confirme que lo
registró.

------------------------------------------------------------------------

# 13. Analytics

Firebase Hosting y Firebase Analytics son servicios diferentes.

No agregar Analytics automáticamente solo porque el proyecto utiliza
Firebase Hosting.

Si Analytics ya fue implementado en una fase anterior, verificar que
continúe funcionando después del deploy.

Si todavía no está configurado, dejarlo pendiente en vez de introducirlo
incidentalmente en esta fase.

------------------------------------------------------------------------

# 14. Archivos esperados

Al finalizar deberían existir o estar correctamente configurados, según
corresponda:

``` text
portfolio/
├── .firebaserc
├── firebase.json
├── package.json
├── dist/
└── ...
```

No versionar `/dist` salvo que el repositorio ya tenga una razón
explícita para hacerlo.

------------------------------------------------------------------------

# 15. Restricciones

-   No crear un proyecto Firebase nuevo.
-   No modificar otros proyectos Firebase.
-   No desplegar Firestore Rules.
-   No desplegar Functions.
-   No desplegar Storage Rules.
-   No agregar Firebase Auth.
-   No agregar Firestore.
-   No agregar Firebase SDK a React si Hosting es el único servicio
    utilizado.
-   No mover la data local del portfolio a Firebase.
-   No modificar contenido aprobado.
-   No cambiar diseño.
-   No introducir nuevas funcionalidades.
-   No inventar IDs, domains, API keys o targets.

------------------------------------------------------------------------

# 16. Validación final

Antes de finalizar informar:

-   Firebase Project ID utilizado;
-   Hosting site/target utilizado;
-   URL publicada;
-   resultado de `npm run build`;
-   resultado del deploy;
-   archivos Firebase modificados;
-   confirmación de funcionamiento de `/`;
-   confirmación de funcionamiento de `/en`;
-   cualquier pendiente.

Si no fue posible identificar con seguridad el Hosting existente, NO
desplegar y explicar exactamente qué información falta.

Detenerse al completar FASE 7.
