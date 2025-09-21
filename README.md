# Quatrotempo Web

Página web oficial de la banda Quatrotempo, construida con Next.js 15, React 19 y Tailwind CSS.

## 🚀 Características

- **Página Principal**: Header full-width con imagen de la banda y fondo personalizado
- **Navegación**: Header fijo con navegación responsive (INICIO - SOMOS - MEDIA - CONTACTO)
- **Página SOMOS**: Galería de los 4 integrantes de la banda con descripciones
- **Página MEDIA**: Grid infinito estilo Instagram con posts de la banda
- **Página CONTACTO**: Formulario de contacto que envía emails a contacto@quatrotempo.cl
- **Diseño Responsive**: Optimizado para desktop, tablet y móvil

## 📦 Tecnologías Utilizadas

- **Next.js 15** - Framework de React con App Router
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS utilitario
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas
- **Heroicons** - Iconos
- **Nodemailer** - Envío de emails

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone [url-del-repo]
cd quatrotempo-web
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env.local
```

4. Edita `.env.local` con tus credenciales SMTP:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-contraseña-de-aplicacion
```

## 📧 Configuración del Email

Para que el formulario de contacto funcione, necesitas configurar un servidor SMTP:

### Para Gmail:
1. Habilita la autenticación de 2 factores
2. Ve a "Contraseñas de aplicación" en tu cuenta de Google
3. Genera una nueva contraseña para "Correo"
4. Usa esa contraseña en `SMTP_PASS`

### Para otros proveedores:
- **Outlook/Hotmail**: `smtp-mail.outlook.com`, puerto 587
- **Yahoo**: `smtp.mail.yahoo.com`, puerto 587

## 🖼️ Recursos Necesarios

Asegúrate de tener estas imágenes en `/public/resources/`:

- `header_01.png` - Imagen principal del header (recomendado: 1920x1080px)
- `background_page.png` - Fondo de las páginas
- `integrante1.png` - Foto del primer integrante
- `integrante2.png` - Foto del segundo integrante  
- `integrante3.png` - Foto del tercer integrante
- `integrante4.png` - Foto del cuarto integrante

## 🏃‍♂️ Ejecutar en Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 🏗️ Construir para Producción

```bash
npm run build
npm start
```

## 📱 Integración con Instagram

La página MEDIA simula una integración con Instagram. Para conectar con la API real de Instagram:

1. Crea una aplicación en [Facebook for Developers](https://developers.facebook.com/)
2. Configura Instagram API
3. Obtén un token de acceso
4. Reemplaza los datos simulados en `/app/media/page.tsx` con llamadas a la API real

## 🌐 Páginas Disponibles

- `/` - Página principal con header e introducción
- `/somos` - Información sobre los integrantes de la banda
- `/media` - Grid de posts estilo Instagram
- `/contacto` - Formulario de contacto

## 🔧 Personalización

### Colores de la marca:
- Amarillo principal: `#f59e0b` (yellow-400)
- Fondo oscuro: `#111827` (gray-900)
- Texto claro: `#f9fafb` (gray-50)

### Fuentes:
- Principal: Geist Sans
- Monospace: Geist Mono

## 📄 Licencia

Este proyecto es propiedad de la banda Quatrotempo.

## 🤝 Contribución

Para contribuir al proyecto, por favor crea un fork y envía un pull request con tus cambios.

## 📞 Soporte

Para preguntas técnicas o soporte, contacta a través del formulario de contacto en la web.
