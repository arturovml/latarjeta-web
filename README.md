# Easy Click — Company Website Starter

Plantilla base para **sitios web corporativos multipágina** con **contenido desacoplado** (copy en `src/content`) para iterar rápido con clientes y desplegar fácilmente en Vercel.

## Qué es este repo

Starter de sitio web empresarial construido con **Next.js (App Router)** + **TypeScript** + **Tailwind CSS**. Incluye:

- Estructura multipágina: **Home**, **Servicios**, **Nosotros**, **FAQ**, **Contacto** y **Legal**.
- Layout compartido con **SiteHeader** / **SiteFooter** reutilizables.
- Capa de contenido en `src/content` para editar textos sin tocar componentes.
- Secciones modulares en `src/components/sections`.
- Helper `getSectionById` para tipado más seguro y menos duplicación (sin casts).

## Requisitos

- Node.js LTS (recomendado)
- npm

## Cómo correrlo

Instalar dependencias:

```bash
npm install
# Easy Click — Company Website Starter

Plantilla base para **sitios web corporativos multipágina** con **contenido desacoplado** (copy en `src/content`) para iterar rápido con clientes y desplegar fácilmente en Vercel.

## Qué es este repo

Starter de sitio web empresarial construido con **Next.js (App Router)** + **TypeScript** + **Tailwind CSS**. Incluye:

- Estructura multipágina: **Home**, **Servicios**, **Nosotros**, **FAQ**, **Contacto** y **Legal**.
- Layout compartido con **SiteHeader** / **SiteFooter** reutilizables.
- Capa de contenido en `src/content` para editar textos sin tocar componentes.
- Secciones modulares en `src/components/sections`.
- Helper `getSectionById` para tipado más seguro y menos duplicación (sin casts).

## Requisitos

- Node.js LTS (recomendado)
- npm

## Cómo correrlo

Instalar dependencias:

```bash
npm install
```

Modo desarrollo:

```bash
npm run dev
```

Build de producción:

```bash
npm run build
```

Servir el build:

```bash
npm run start
```

## Estructura del proyecto

- `src/app/(site)/*` — rutas del sitio (Home/Servicios/Nosotros/FAQ/Contacto/Legal)
- `src/components/site/*` — layout compartido (header/footer)
- `src/components/sections/*` — secciones reutilizables
- `src/content/site.ts` — configuración global (marca, navegación, CTAs, footer, contacto)
- `src/content/pages/*.ts` — contenido por página (títulos, descripciones y secciones)

## Cómo cambiar contenido (copy)

Todo el copy y la estructura vive en `src/content`:

- `src/content/site.ts`: nombre de marca, navegación, CTAs, links y datos de contacto.
- `src/content/pages/*.ts`: contenido por página y sus secciones.

Flujo recomendado con cliente:
1. Cambia copy solo en `src/content`.
2. Valida en local (`npm run dev`).
3. Sube cambios y comparte el **Preview Deployment** de Vercel.

## Cómo cambiar assets

### Favicon y Open Graph (App Router)

Next.js detecta estos archivos automaticamente en `src/app/` y los enlaza en el `<head>`. No hace falta declararlos en `layout.tsx` (salvo que quieras metadata extra como title/description).

- `src/app/favicon.ico` — favicon (solo en la raiz de app/).
- `src/app/icon.svg` o `src/app/icon.png` — icono adicional (no usar `favicon.svg`).
- `src/app/apple-icon.png` — icono para Apple / guardar en inicio (no `apple-touch-icon.png`).
- `src/app/opengraph-image.png` — imagen para redes y previews, ej. WhatsApp (1200x630 px recomendado; no `og.png`).

### Resto de assets

Los assets publicos (logos, imagenes de secciones, etc.) siguen en `public/`.

- Reemplaza imagenes/SVGs manteniendo los mismos nombres si quieres evitar cambios de codigo.

## Variables de entorno (opcional)

- `NEXT_PUBLIC_SITE_URL`: URL pública del sitio (útil para metadata/OG/sitemap).

Crea un `.env.local` en la raíz:

```bash
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

### Formulario de contacto (Resend)

El endpoint `/api/contact` recibe el formulario, valida datos, aplica honeypot y rate limit, y envía correo usando Resend.

Variables requeridas:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

Ejemplo de `.env.local` (sin llaves reales):

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=web-no-reply@mail.example.com
CONTACT_TO_EMAIL=contact@example.com
```

En Vercel:

1. Project Settings → Environment Variables.
2. Agrega las tres variables anteriores.
3. Vuelve a desplegar para aplicar cambios.

## Cómo usarlo como base para un nuevo cliente

1. Actualiza marca y navegación en `src/content/site.ts`.
2. Ajusta contenido por página en `src/content/pages/`.
3. Reemplaza favicon e imagen OG en `src/app/` con los nombres de convencion anteriores, y logos/imagenes en `public/`.
4. (Opcional) Define `NEXT_PUBLIC_SITE_URL`.
5. Corre `npm run build` para validar antes de entregar.

## Calidad (Definition of Done)

Antes de publicar:

- `npm run build` pasa sin errores.
- Revisión rápida de rutas: `/`, `/servicios`, `/nosotros`, `/faq`, `/contacto`, `/legal`.
- Un solo **H1** por página.
- CTAs principales consistentes en header y secciones de cierre.