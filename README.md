<div align="center">

```
██████╗  █████╗ ██████╗ ██████╗ ███████╗███╗   ██╗███████╗ ██████╗██╗  ██╗███████╗
██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝████╗  ██║██╔════╝██╔════╝██║  ██║██╔════╝
██████╔╝███████║██████╔╝██████╔╝█████╗  ██╔██╗ ██║█████╗  ██║     ███████║█████╗  
██╔══██╗██╔══██║██╔══██╗██╔══██╗██╔══╝  ██║╚██╗██║██╔══╝  ██║     ██╔══██║██╔══╝  
██████╔╝██║  ██║██║  ██║██║  ██║███████╗██║ ╚████║███████╗╚██████╗██║  ██║███████╗
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝
                        A  B  O  G  A  D  O
```

### ⚖️ Defensa penal especializada · Atención a nivel nacional · Colombia

---

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Hostinger](https://img.shields.io/badge/Hostinger-673DE6?style=for-the-badge&logo=hostinger&logoColor=white)
![FormSubmit](https://img.shields.io/badge/FormSubmit-0C0F19?style=for-the-badge&logo=mail.ru&logoColor=white)

![Status](https://img.shields.io/badge/Estado-Producción%20lista-22c55e?style=flat-square)
![Mobile](https://img.shields.io/badge/Mobile-Responsive-3b82f6?style=flat-square)
![Sin dependencias](https://img.shields.io/badge/Dependencias-Ninguna-f59e0b?style=flat-square)
![Licencia](https://img.shields.io/badge/Uso-Privado-ef4444?style=flat-square)

</div>

---

## 📋 Tabla de contenidos

- [Acerca del proyecto](#-acerca-del-proyecto)
- [Vista previa de secciones](#-vista-previa-de-secciones)
- [Stack técnico](#-stack-técnico)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Paleta de colores](#-paleta-de-colores)
- [Tipografías](#-tipografías)
- [Funcionalidades](#-funcionalidades)
- [Formulario de contacto](#-formulario-de-contacto)
- [Despliegue en Hostinger](#-despliegue-en-hostinger)
- [Dominio personalizado](#-dominio-personalizado)
- [Contacto](#-contacto)

---

## 🏛️ Acerca del proyecto

Landing page de alto impacto diseñada para campañas de pauta publicitaria digital del **Dr. Gabriel Esteban Barreneche Vargas**, abogado penalista con formación en las instituciones jurídicas más prestigiosas de Colombia.

La página está construida sin frameworks ni dependencias — HTML, CSS y JavaScript puros — lo que garantiza **velocidad de carga máxima**, ideal para conversión en pauta publicitaria donde cada segundo cuenta.

```
Paleta:  Crema #F0E6D5  ·  Navy #0C0F19  ·  Oro rosa #F6D3C7  ·  Malva #B0A0A7
Fuentes: Cinzel (display)  ·  Cormorant Garamond (editorial)  ·  Manrope (UI)
```

---

## 🖥️ Vista previa de secciones

| # | Sección | Descripción |
|---|---------|-------------|
| 01 | **Hero** | Titular de conversión, emblema animado, métricas de confianza, CTA directo a WhatsApp |
| 02 | **Servicios** | Tres tarjetas interactivas con hover invertido a navy: Representación judicial · Asesoría · Conciliación |
| 03 | **El Abogado** | Retrato ilustrado + credenciales académicas (UPB · EAFIT · Externado · Cámara de Comercio Bogotá) |
| 04 | **La Firma** | Historia y tres pilares de Barreneche & Asociados sobre fondo navy con textura |
| 05 | **Marquee** | Desplazamiento continuo de instituciones académicas y jurídicas |
| 06 | **Contacto** | Formulario automatizado + 4 canales directos + QR de Instagram y LinkedIn |
| 07 | **Footer** | Logo completo + columnas de navegación + año dinámico |
| ✦ | **WhatsApp** | Botón flotante pulsante con apertura de chat directo prellenado |

---

## 🛠️ Stack técnico

```
Frontend
├── HTML5 semántico          — estructura accesible con roles y aria-labels
├── CSS3 puro                — variables de diseño, animaciones, grid, clamp()
│   ├── IntersectionObserver — reveals animados al hacer scroll
│   ├── CSS @keyframes       — float, pulse, marquee, scrollLine
│   └── backdrop-filter      — nav sticky con blur glassmorphism
└── JavaScript vanilla       — sin librerías externas

Servicios externos
├── FormSubmit.co            — envío de formulario por email sin backend
└── Google Fonts             — Cinzel · Cormorant Garamond · Manrope

Herramientas de desarrollo
├── Python / Pillow          — remoción de fondo del imagotipo · extracción de QR
└── Playwright / Chromium    — verificación visual automatizada
```

---

## 📁 Estructura del proyecto

```
barreneche-abogado/
│
├── 📄 index.html              # Estructura principal — 523 líneas
│
├── 📂 css/
│   └── 🎨 styles.css          # Hoja de estilos completa — 764 líneas
│                              # Variables · Nav · Hero · Servicios · About
│                              # Firma · Marquee · Contacto · Footer · Animaciones
│
├── 📂 js/
│   └── ⚡ main.js             # Lógica de interactividad — 161 líneas
│                              # Scroll sticky · Menú móvil · Reveals
│                              # Formulario AJAX + plan B mailto
│
└── 📂 images/
    ├── 🛡️  logo-imagotipo.png  # Emblema principal (casco + escudo BA + columna)
    │                          # Fondo transparente — animación float en hero
    ├── 🖼️  logo-completo.png   # Logo horizontal centrado — usado en footer
    ├── 👤 portrait-gabriel.png # Ilustración del Dr. Gabriel Barreneche Vargas
    ├── 📱 qr-instagram.png     # Código QR escaneable — Instagram
    └── 💼 qr-linkedin.png      # Código QR escaneable — LinkedIn
```

---

## 🎨 Paleta de colores

Extraída del archivo de marca oficial `.ase` (Adobe Swatch Exchange).

| Variable CSS | Hex | Vista | Uso |
|---|---|---|---|
| `--cream` | `#F0E6D5` | ![#F0E6D5](https://placehold.co/18x18/F0E6D5/F0E6D5.png) | Fondo principal |
| `--cream-light` | `#FDE7D7` | ![#FDE7D7](https://placehold.co/18x18/FDE7D7/FDE7D7.png) | Fondo secciones alternas |
| `--cream-pale` | `#FCE5D5` | ![#FCE5D5](https://placehold.co/18x18/FCE5D5/FCE5D5.png) | Hover suave |
| `--navy` | `#0C0F19` | ![#0C0F19](https://placehold.co/18x18/0C0F19/0C0F19.png) | Fondo oscuro · texto principal |
| `--navy-2` | `#222841` | ![#222841](https://placehold.co/18x18/222841/222841.png) | Fondo oscuro secundario |
| `--rose` | `#F6D3C7` | ![#F6D3C7](https://placehold.co/18x18/F6D3C7/F6D3C7.png) | Acento oro rosa · hover · CTA |
| `--rose-deep` | `#E5B9A9` | ![#E5B9A9](https://placehold.co/18x18/E5B9A9/E5B9A9.png) | Gradiente botón enviar |
| `--mauve` | `#B0A0A7` | ![#B0A0A7](https://placehold.co/18x18/B0A0A7/B0A0A7.png) | Textos secundarios en oscuro |

---

## 🔤 Tipografías

| Familia | Rol en la página | Pesos cargados |
|---|---|---|
| **[Cinzel](https://fonts.google.com/specimen/Cinzel)** | Títulos, navegación, números, footer | 400 · 500 · 600 · 700 |
| **[Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)** | Cuerpo editorial, citas, credenciales | 300–700 + itálicas |
| **[Manrope](https://fonts.google.com/specimen/Manrope)** | Etiquetas, botones, eyebrows, formulario | 300 · 400 · 500 · 600 · 700 |

---

## ✨ Funcionalidades

<details>
<summary><strong>Navegación y UX</strong></summary>

- Nav sticky que se contrae y aplica `backdrop-filter: blur` al hacer scroll
- Menú móvil fullscreen con animación `cubic-bezier(0.86, 0, 0.07, 1)`
- Scroll suave entre secciones con offset de 70px para compensar el nav
- Año dinámico en footer con `new Date().getFullYear()`

</details>

<details>
<summary><strong>Animaciones</strong></summary>

- Reveals escalonados al scroll via `IntersectionObserver` (threshold 12%)
- Imagotipo con animación `float` de 8 segundos en el hero
- Botón WhatsApp con animación `pulse` usando box-shadow radial
- Marquee de instituciones con `@keyframes marquee` CSS puro
- Tarjetas de servicios con transición `translateY(-8px)` al hover
- Pilares de La Firma con `translateX(8px)` al hover

</details>

<details>
<summary><strong>Formulario de contacto automatizado</strong></summary>

- Envío AJAX a FormSubmit.co — sin backend, sin servidor
- Feedback visual de éxito/error inline (sin recargar la página)
- Spinner de carga durante el envío
- Plan B automático: abre `mailto:` prellenado si falla la conexión
- Campo honeypot anti-spam oculto
- Respuesta automática al cliente configurada
- Validación nativa HTML5 con `checkValidity()`

</details>

<details>
<summary><strong>Responsive</strong></summary>

- Breakpoints: 640px · 768px · 900px · 940px · 960px
- Grid de servicios: 1 columna móvil → 3 columnas escritorio
- Hero: stack vertical móvil → dos columnas escritorio
- `clamp()` en tipografía y padding para fluidez continua
- `prefers-reduced-motion` respetado en todas las animaciones

</details>

---

## 📧 Formulario de contacto

El formulario usa **[FormSubmit.co](https://formsubmit.co)** — cada solicitud llega directamente a `Barreneche1989@hotmail.com` sin necesidad de servidor ni código backend.

### ⚠️ Activación obligatoria (una sola vez)

> Después de publicar la página, hacer un **envío de prueba** desde la URL pública.  
> FormSubmit enviará un correo de activación a `Barreneche1989@hotmail.com`.  
> Abrir ese correo → hacer clic en **Confirm your submission** → listo para siempre.

### Campos del formulario

| Campo visible | `name` en HTML | Tipo | ¿Obligatorio? |
|---|---|---|---|
| Nombre completo | `nombre` | `text` | ✅ |
| Teléfono o correo | `contacto` | `text` | ✅ |
| Tipo de caso | `asunto` | `select` | ✅ |
| Descripción del caso | `mensaje` | `textarea` | ✅ |

### Opciones del tipo de caso

```
• Representación judicial
• Asesoría y consultoría
• Conciliación y mediación
• Otro
```

---

## 🚀 Despliegue en Hostinger

El Dr. Barreneche publica esta página a través de **[Hostinger](https://hostinger.com)**, el servicio de hosting que utiliza para gestionar su presencia web.

### Paso 1 — Acceder al panel de control

```
1. Ingresar a hpanel.hostinger.com con sus credenciales
2. Ir a Hosting → Administrar (en el plan contratado)
```

### Paso 2 — Subir los archivos

**Opción A — Administrador de archivos (desde el navegador):**

```
1. En hPanel → Archivos → Administrador de archivos
2. Navegar a la carpeta public_html/
3. Eliminar cualquier archivo index.html existente (si aplica)
4. Clic en Subir → seleccionar todos los archivos y carpetas del proyecto
   ├── index.html        ← va directo en public_html/
   ├── css/              ← carpeta completa
   ├── js/               ← carpeta completa
   └── images/           ← carpeta completa
5. Confirmar la subida
```

**Opción B — FTP con FileZilla (recomendado para archivos grandes):**

```
1. En hPanel → Hosting → FTP Accounts → copiar credenciales
2. Abrir FileZilla → File → Site Manager → New Site
   Host:     ftp.su-dominio.com
   Usuario:  (usuario FTP de Hostinger)
   Contraseña: (contraseña FTP)
   Puerto:   21
3. Conectar → navegar a public_html/ en el panel derecho
4. Arrastrar los archivos del proyecto desde el panel izquierdo
```

### Paso 3 — Verificar la estructura en `public_html/`

```
public_html/
├── index.html          ✅ debe estar aquí directamente
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    ├── logo-imagotipo.png
    ├── logo-completo.png
    ├── portrait-gabriel.png
    ├── qr-instagram.png
    └── qr-linkedin.png
```

> ⚠️ **Importante:** el `index.html` debe estar dentro de `public_html/` directamente, **no** dentro de una subcarpeta, o la página no cargará.

### Paso 4 — Probar

```
Abrir el navegador → escribir el dominio → verificar que carga correctamente
Hacer un envío de prueba en el formulario para activar FormSubmit
```

---

## 🌐 Dominio personalizado

Si el dominio (`barrenecheabogado.com` / `.co`) ya está registrado y conectado a Hostinger:

```
hPanel → Dominios → Administrar → DNS / Nameservers
```

Los nameservers de Hostinger son:

```
ns1.dns-parking.com
ns2.dns-parking.com
```

Si el dominio está en otro registrador (GoDaddy, Namecheap, etc.), apuntar los nameservers hacia Hostinger desde el panel del registrador. La propagación toma entre **10 minutos y 48 horas**.

### HTTPS / SSL gratuito

```
hPanel → Hosting → Administrar → SSL → Instalar certificado gratuito (Let's Encrypt)
```

Hostinger activa SSL con un clic — sin costo adicional. Imprescindible para que el formulario funcione correctamente en producción.

---

## 📞 Contacto

<div align="center">

| | |
|---|---|
| 📱 **WhatsApp / Teléfono** | [+57 320 471 9197](https://api.whatsapp.com/send/?phone=573204719197) |
| 📧 **Correo electrónico** | [Barreneche1989@hotmail.com](mailto:Barreneche1989@hotmail.com) |
| 📸 **Instagram** | [@barrenecheabogado](https://www.instagram.com/barrenecheabogado) |
| 👥 **Facebook** | [Barreneche Abogado](https://www.facebook.com/share/1Bk1ZdGRAZ/) |
| 🌎 **Cobertura** | Atención a nivel nacional — Colombia |

</div>

---

<div align="center">

```
⚖️  BARRENECHE ABOGADO  ⚖️
Defensa penal · Colombia
```

![Made with](https://img.shields.io/badge/Diseñado%20con-Claude%20AI-CC785C?style=flat-square&logo=anthropic&logoColor=white)
![Hosting](https://img.shields.io/badge/Hosting-Hostinger-673DE6?style=flat-square&logo=hostinger&logoColor=white)
![Email](https://img.shields.io/badge/Formulario-FormSubmit.co-0C0F19?style=flat-square)

*© 2026 Barreneche Abogado · Todos los derechos reservados*

</div>
