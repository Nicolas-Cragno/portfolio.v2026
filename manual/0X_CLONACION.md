# 0X --- CLONACIÓN Y PREPARACIÓN EN OTRA PC

## Objetivo

Preparar correctamente el portfolio de Nicolás Cragno después de clonar
el repositorio en una computadora nueva o diferente.

Este procedimiento debe dejar el proyecto listo para:

-   desarrollar;
-   ejecutar localmente;
-   compilar;
-   trabajar con Git;
-   utilizar Firebase CLI cuando corresponda;
-   desplegar Firebase Hosting si la PC está correctamente autenticada.

No modificar funcionalidades, diseño ni contenido del portfolio durante
esta etapa.

------------------------------------------------------------------------

# 1. Inspección inicial

Antes de instalar o modificar nada:

1.  Confirmar que se está dentro del repositorio correcto.
2.  Revisar:
    -   `package.json`
    -   lockfile (`package-lock.json`, si existe)
    -   `.gitignore`
    -   `.firebaserc`
    -   `firebase.json`
    -   `.env*`, si existen
    -   `src/config/firebase.config.js`, si existe
    -   carpeta `/manual`
3.  Revisar `git status`.
4.  Identificar la rama actual.
5.  Confirmar el remote configurado.

Comandos útiles:

``` bash
git status
git branch --show-current
git remote -v
```

No cambiar de remote ni rama sin necesidad.

------------------------------------------------------------------------

# 2. Requisitos de la PC

Comprobar disponibilidad de:

``` bash
node --version
npm --version
git --version
```

Si alguno no existe, informar cuál falta antes de continuar.

No instalar versiones aleatorias de Node si el proyecto define una
versión mediante:

-   `.nvmrc`
-   `.node-version`
-   `package.json > engines`

Si existe una versión declarada, respetarla.

Si no existe una versión declarada, utilizar una versión LTS compatible
con el proyecto y documentar la utilizada.

------------------------------------------------------------------------

# 3. Dependencias del proyecto

Si existe:

``` text
package-lock.json
```

preferir:

``` bash
npm ci
```

para reproducir exactamente las dependencias bloqueadas.

Usar:

``` bash
npm install
```

solo si `npm ci` no corresponde o si el proyecto no tiene un lockfile
válido.

No eliminar ni regenerar `package-lock.json` sin una razón concreta.

No instalar paquetes adicionales durante la clonación salvo que sean
estrictamente necesarios para ejecutar el proyecto existente.

------------------------------------------------------------------------

# 4. Archivos que NO vienen del repositorio

Comprobar si el proyecto depende de archivos ignorados por Git.

Ejemplos posibles:

``` text
.env
.env.local
.env.production
```

También revisar si existen assets locales que deliberadamente no estén
versionados.

Si falta un archivo requerido:

-   NO inventar sus valores;
-   NO crear credenciales falsas;
-   informar exactamente qué archivo y variables faltan.

Si existe `.env.example`, utilizarlo únicamente como referencia.

------------------------------------------------------------------------

# 5. Firebase Web Config

Revisar si existe:

``` text
src/config/firebase.config.js
```

o una estructura equivalente.

Si está versionado y contiene únicamente la configuración pública de la
Firebase Web App, utilizarlo tal como está.

No reemplazarlo con configuración de otro proyecto.

Si la configuración se obtiene desde variables de entorno, verificar que
todas las variables requeridas estén disponibles.

Valores típicos:

``` text
apiKey
authDomain
projectId
storageBucket
messagingSenderId
appId
measurementId
```

No asumir que todos son obligatorios si la implementación actual no los
utiliza.

------------------------------------------------------------------------

# 6. Firebase Hosting

Si existen:

``` text
.firebaserc
firebase.json
```

revisarlos pero NO modificarlos automáticamente.

Confirmar:

-   Firebase Project ID;
-   Hosting site/target si existe;
-   `public: "dist"` para Vite, si corresponde;
-   SPA rewrites.

No ejecutar deploy durante la clonación salvo instrucción explícita.

------------------------------------------------------------------------

# 7. Firebase CLI

Comprobar:

``` bash
firebase --version
```

Si Firebase CLI no está disponible y esta PC se utilizará para deploys,
instalar la CLI oficial de Firebase.

Después comprobar autenticación:

``` bash
firebase login:list
```

No cerrar sesiones ni cambiar cuentas automáticamente.

Si no existe una sesión válida, informar que es necesario autenticar
esta PC mediante:

``` bash
firebase login
```

La autenticación del Firebase CLI es específica de cada computadora y no
debe almacenarse en Git.

------------------------------------------------------------------------

# 8. Verificación del proyecto Firebase

Si Firebase CLI está disponible, comprobar los proyectos accesibles
cuando resulte necesario.

Antes de cualquier deploy futuro, verificar que el proyecto configurado
en:

``` text
.firebaserc
```

corresponde al portfolio de Nicolás Cragno.

No ejecutar:

``` bash
firebase use --add
```

ni cambiar el proyecto por defecto si la configuración existente ya es
correcta.

Nunca seleccionar por aproximación otro proyecto Firebase.

------------------------------------------------------------------------

# 9. Ejecución local

Una vez instaladas las dependencias:

``` bash
npm run dev
```

Comprobar que la aplicación inicia correctamente.

Validar al menos:

-   `/`
-   `/en`
-   Header
-   Hero
-   Projects
-   Experience
-   About
-   Contact
-   Dark/Light
-   navegación básica

Si alguna de estas funcionalidades todavía no existe porque el proyecto
está en una fase anterior, no tratarlo como error.

------------------------------------------------------------------------

# 10. Build

Ejecutar:

``` bash
npm run build
```

Debe generarse correctamente:

``` text
dist/
```

Si falla:

1.  leer el error real;
2.  identificar si se debe a dependencias, variables de entorno o
    código;
3.  no modificar lógica del proyecto arbitrariamente para conseguir un
    build verde.

------------------------------------------------------------------------

# 11. Preview de producción

Si el build fue exitoso:

``` bash
npm run preview
```

Comprobar que la versión compilada funciona.

Cuando existan rutas SPA como `/en`, tener en cuenta que el
comportamiento final de refresh/direct URL también depende de Firebase
Hosting y sus rewrites.

------------------------------------------------------------------------

# 12. Git

Después de preparar la PC ejecutar:

``` bash
git status
```

La instalación de dependencias no debería generar cambios inesperados en
archivos versionados.

Normalmente:

``` text
node_modules/
dist/
```

deben permanecer ignorados.

No hacer commit automático.

No hacer push automático.

No modificar `.gitignore` salvo que exista un problema real.

------------------------------------------------------------------------

# 13. Actualización habitual entre computadoras

Cuando el proyecto ya esté configurado en esta PC, antes de comenzar una
jornada de trabajo:

``` bash
git status
git branch --show-current
git pull
```

Si existen cambios locales sin guardar, NO ejecutar operaciones
destructivas para forzar el pull.

Primero informar el estado.

Después de trabajar, el flujo habitual será:

``` bash
git status
git add .
git commit -m "descripción del cambio"
git push
```

No automatizar commits o pushes durante este procedimiento de clonación.

------------------------------------------------------------------------

# 14. Qué debe provenir de Git

Idealmente el repositorio debe traer:

``` text
src/
public/
manual/
package.json
package-lock.json
vite.config.*
firebase.json
.firebaserc
.gitignore
README.md
```

según los archivos que realmente existan en el proyecto.

También pueden estar versionados:

``` text
src/config/firebase.config.js
```

si contiene exclusivamente configuración pública de la Web App y así fue
decidido para este proyecto.

------------------------------------------------------------------------

# 15. Qué NO debe provenir de Git

No deben existir en el repositorio:

-   `node_modules`;
-   `dist`, salvo decisión explícita;
-   Firebase service accounts;
-   private keys;
-   credenciales administrativas;
-   tokens del Firebase CLI;
-   contraseñas;
-   secretos de backend;
-   archivos personales ajenos al proyecto.

------------------------------------------------------------------------

# 16. Analytics

Si FASE 8 ya está implementada:

1.  comprobar que Firebase Analytics inicializa sin romper la
    aplicación;
2.  confirmar que existe `measurementId`;
3.  no generar eventos artificiales durante la clonación;
4.  no cambiar la propiedad de Analytics;
5.  no agregar una configuración Firebase distinta.

Analytics puede estar desactivado durante desarrollo según la
implementación del proyecto. Eso no debe tratarse como error.

------------------------------------------------------------------------

# 17. CV e imágenes

Comprobar que los assets versionados estén presentes.

Esperados cuando el portfolio esté terminado:

``` text
public/
├── cv/
│   ├── CV-Nicolas-Cragno-ES.pdf
│   └── CV-Nicolas-Cragno-EN.pdf
└── images/
    ├── hero/
    └── projects/
```

Si Nicolás todavía no reemplazó placeholders por archivos definitivos,
no inventarlos.

------------------------------------------------------------------------

# 18. No hacer durante CLONACIÓN

No:

-   rediseñar componentes;
-   cambiar textos;
-   cambiar proyectos;
-   actualizar dependencias por iniciativa propia;
-   migrar versiones mayores;
-   cambiar Firebase Project ID;
-   crear otro Firebase project;
-   desplegar;
-   cambiar Analytics;
-   modificar SEO;
-   crear commits;
-   hacer push;
-   borrar cambios locales;
-   ejecutar `git reset --hard`;
-   ejecutar `git clean -fd`;
-   borrar lockfiles;
-   regenerar configuración Firebase.

Esta etapa sirve únicamente para reproducir correctamente el entorno del
proyecto.

------------------------------------------------------------------------

# 19. Validación final

Antes de finalizar comprobar:

``` bash
git status
npm run build
```

Y, cuando corresponda:

``` bash
firebase --version
firebase login:list
```

Informar:

-   versión de Node;
-   versión de npm;
-   versión de Git;
-   rama actual;
-   remote;
-   método utilizado para instalar dependencias (`npm ci` o
    `npm install`);
-   resultado de `npm run build`;
-   Firebase CLI disponible: sí/no;
-   Firebase Project ID configurado;
-   autenticación Firebase disponible: sí/no;
-   archivos/variables locales faltantes;
-   cambios inesperados detectados por Git;
-   cualquier pendiente para que la PC quede completamente operativa.

------------------------------------------------------------------------

# 20. Resultado esperado

Al finalizar, esta computadora debe quedar lista para continuar
trabajando sobre el mismo repositorio sin alterar la configuración
funcional del proyecto.

Si todo está correcto, indicar explícitamente:

``` text
ENTORNO LISTO PARA DESARROLLO
```

Si falta algo, NO indicar que el entorno está listo. Enumerar
exactamente los pendientes.

Detenerse al completar CLONACIÓN.
