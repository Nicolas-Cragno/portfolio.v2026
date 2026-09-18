# FASE 1 --- Foundation

## Regla base

No introduzcas comentarios en el código

## Objetivo

Crear estructura, sistema visual global, temas, responsive base, assets
y arquitectura de data ES/EN.

## Estructura objetivo

```text
public/
├── images/
│   ├── hero/
│   │   ├── hero-dark.webp
│   │   └── hero-light.webp
│   └── projects/
│       ├── cantapp/
│       ├── nexar/
│       ├── mirada-geek/
│       ├── gf-futbol/
│       ├── gf-futbol-app/
│       └── sonar/
└── cv/
    ├── CV-Nicolas-Cragno-ES.pdf
    └── CV-Nicolas-Cragno-EN.pdf

src/
├── components/{buttons,cards,modals,layout}/
├── sections/{Hero,Projects,Experience,About,Contact}/
├── data/
│   ├── es/{profile.js,projects.js,experience.js}
│   └── en/{profile.js,projects.js,experience.js}
├── hooks/
└── styles/{variables.css,themes.css,globals.css,responsive.css}
```

No crear archivos vacíos innecesarios.

## Diseño global

- Roboto: textos generales/informativos.
- Consolas o fallback monospace: cards, buttons, tags, badges e
  interfaz.
- `border-radius: 2px`.
- Identidad azul.
- Dark: fondo dark blue.
- Light: `#fff` o celeste/azul casi imperceptible.
- Mantener azules de identidad entre temas.
- Sin animaciones decorativas.

## Variables

Centralizar en `variables.css`: tipografías, colores, spacing, gaps,
paddings, márgenes, max-width, modal sizing, borders, radius, tamaños
reutilizables y transiciones funcionales.

Evitar valores visuales repetidos hardcodeados.

## Layout base

- padding lateral nunca menor a 5px;
- desktop: 3 cards ≈ 1/3 cada una;
- gap entre cards nunca menor a 5px;
- modales desktop con mínimo 20px al viewport;
- secciones amplias, tendiendo a ocupar una pantalla cuando sea
  razonable.

## Idiomas

- `/` español.
- `/en` inglés.
- Sin traducción automática runtime.
- Misma estructura de data en ambos idiomas.

## Assets

Rutas simples y reemplazables. Hero: - `/images/hero/hero-dark.webp` -
`/images/hero/hero-light.webp`

## Datos base

- Nicolás Cragno
- Software Developer
- Buenos Aires, Argentina
- GEBB Dev engloba proyectos personales/colaborativos y es un
  ecosistema en colaboración con Braian Pirelli.

## Restricciones

Sin Firebase, DB, backend, Redux o Context global innecesario. No
avanzar a FASE 2.

## Validación

`npm run build`, imports de data válidos, themes/variables cargados y
consola sin errores relevantes.

Detenerse al completar FASE 1.
