# Content Guide — Easy Click Company Websites

Esta guía explica **cómo editar contenido**, **cómo dar feedback** y **cómo iterar con clientes** sin romper la estructura del sitio.

El objetivo es que cualquier cambio de copy sea:
- Claro
- Rápido
- Seguro (sin tocar UI ni lógica)

---

## Dónde vive el contenido

Todo el contenido editable vive en `src/content`.

### 1) Contenido global

**Archivo:** `src/content/site.ts`

Aquí se define:
- Nombre de la marca
- Navegación principal
- CTAs globales (header / footer)
- Datos de contacto
- Footer

👉 Cambios típicos:
- Nombre comercial
- Texto de botones principales
- Email / teléfono
- Links legales

---

### 2) Contenido por página

**Archivos:** `src/content/pages/*.ts`

Cada archivo representa una página del sitio:
- `home.ts`
- `servicios.ts`
- `nosotros.ts`
- `faq.ts`
- `contacto.ts`
- `legal.ts`

Cada página contiene:
- `hero`: título principal (H1) y subtítulo
- `sections`: bloques de contenido reutilizables

👉 Regla importante:
- **Cada página debe tener un solo H1** (definido en el hero).

---

## Cómo editar contenido correctamente

### Cambiar textos

✔️ Correcto:
- Editar títulos, párrafos, bullets y CTAs dentro de `src/content`

❌ Evitar:
- Cambiar JSX o componentes
- Duplicar textos en componentes
- Agregar lógica dentro del contenido

---

### Agregar o quitar secciones

Las páginas se componen por secciones identificadas por `id`.

✔️ Correcto:
- Agregar una sección existente a la lista de `sections`
- Reordenar secciones cambiando el orden del array

❌ Evitar:
- Crear secciones nuevas sin validarlo
- Duplicar secciones con IDs distintos

---

## Cómo pedir feedback al cliente (formato recomendado)

Para evitar confusión, pide feedback **por página y por sección**.

### Formato ideal de feedback
Página: Home
Sección: Hero
Cambio:
	•	Cambiar el título por: “Texto nuevo aquí”
	•	Cambiar subtítulo por: “Nuevo subtítulo”

Página: Servicios
Sección: Features
Cambio:
	•	Bullet 2: reemplazar texto por “Nuevo bullet”

Esto permite aplicar cambios sin interpretación.

---

## Qué NO cambiar sin validación técnica

- Estructura de archivos
- Componentes en `src/components`
- Layout (header/footer)
- Lógica de render

Si el cliente pide algo fuera de esto:
👉 escalar como **nuevo requerimiento**.

---

## Flujo recomendado de iteración

1. Cliente envía feedback en el formato sugerido
2. Cambios se aplican solo en `src/content`
3. Validar en local (`npm run dev`)
4. Publicar preview en Vercel
5. Cliente aprueba o ajusta

---

## Checklist antes de publicar

- [ ] Copy actualizado solo en `src/content`
- [ ] Un H1 por página
- [ ] CTAs claros y consistentes
- [ ] `npm run build` pasa
- [ ] Preview validado por el cliente

---

## Nota final

Este sitio está diseñado para **crecer de forma controlada**.

Cualquier cambio que implique:
- nuevos componentes
- nuevas vistas
- nuevas funcionalidades

debe tratarse como una **fase adicional del proyecto**.