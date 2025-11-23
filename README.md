# 🎓 ExpoTec 2025 - Sistema de Expo Feria Informática

Sistema web interactivo desarrollado para la Casa Abierta del Área de Informática de la Unidad Educativa Ecuatoriana Austriaca. Incluye un simulador educativo de ensamblaje de PC con componentes realistas y validaciones didácticas.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.15-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Arquitectura](#-arquitectura)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Componentes Principales](#-componentes-principales)
- [Simulador de PC](#-simulador-de-pc)
- [Personalización](#-personalización)
- [Despliegue](#-despliegue)

---

## ✨ Características

### 🎯 Funcionalidades Principales

- **Navegación Multi-Nivel**: Sistema de pestañas para 7 niveles educativos (8vo EGB - 3ro BGU + Robótica)
- **Catálogo de Proyectos**: Visualización organizada de 20+ proyectos estudiantiles con imágenes
- **Simulador Interactivo**: Ensamblaje virtual de PC con validaciones educativas
- **Diseño Responsivo**: Optimizado para desktop, tablet y móvil
- **Animaciones Suaves**: Transiciones y efectos visuales profesionales
- **Modo Oscuro**: Tema oscuro moderno con acentos cyan/blue

### 🖥️ Simulador de Ensamblaje de PC

- ✅ **7 Componentes Instalables**: Motherboard, CPU, RAM, GPU, SSD, PSU, Cooler
- ✅ **Validaciones Educativas**: Orden lógico de ensamblaje (motherboard primero)
- ✅ **Visuales Realistas**: Cada componente con detalles técnicos y RGB
- ✅ **Información Técnica**: Especificaciones reales de hardware
- ✅ **Feedback Inmediato**: Mensajes de error/éxito en tiempo real
- ✅ **Animaciones Fluidas**: Transiciones de instalación suaves
- ✅ **Modal de Completado**: Celebración al terminar el ensamblaje

---

## 🛠️ Tecnologías

### Core

- **React 18.3.1** - Biblioteca UI con Hooks
- **Vite 5.4.10** - Build tool ultrarrápido
- **JavaScript (ES6+)** - Lenguaje principal

### Styling

- **Tailwind CSS 3.4.15** - Framework CSS utility-first
- **PostCSS** - Procesamiento CSS
- **Autoprefixer** - Compatibilidad de navegadores

### Iconos

- **Lucide React** - Biblioteca de iconos modernas SVG

### Desarrollo

- **ESLint** - Linting de código
- **npm** - Gestor de paquetes

---

## 🏗️ Arquitectura

### Patrón de Diseño

El proyecto sigue una arquitectura **component-based** con separación clara de responsabilidades:

```
┌─────────────────────────────────────┐
│           App.jsx (Root)            │
│  - Control de vistas                │
│  - Estado global                    │
└──────────────┬──────────────────────┘
               │
    ┌──────────┴──────────┐
    │                     │
┌───▼────┐           ┌───▼────┐
│ Layout │           │ Views  │
│────────│           │────────│
│ Navbar │           │  Home  │
│ Footer │           │ Level  │
└────────┘           └───┬────┘
                         │
              ┌──────────┴──────────┐
              │                     │
         ┌────▼─────┐         ┌────▼────┐
         │ Features │         │   UI    │
         │──────────│         │─────────│
         │PCBuilder │         │  Card   │
         │  Modal   │         │ Visual  │
         └──────────┘         └─────────┘
```

### Flujo de Datos

1. **App.jsx** mantiene el estado de la vista activa
2. **HomeView** renderiza la página de inicio
3. **LevelView** recibe datos de `db.jsx` y renderiza proyectos
4. **ProjectCard** emite eventos al hacer click
5. **PCBuilder** o **ProjectModal** se abren según el tipo de proyecto

---

## 📁 Estructura del Proyecto

```
expo-feria/
├── src/
│   ├── components/
│   │   ├── features/         # Componentes con lógica compleja
│   │   │   ├── PCBuilder.jsx       # Simulador de PC (7 componentes)
│   │   │   └── ProjectModal.jsx    # Modal de proyectos
│   │   ├── layout/           # Componentes de estructura
│   │   │   ├── Navbar.jsx          # Barra de navegación
│   │   │   └── Footer.jsx          # Pie de página
│   │   └── ui/               # Componentes reutilizables
│   │       ├── ProjectCard.jsx     # Tarjeta de proyecto
│   │       └── HardwareVisual.jsx  # Visuales de hardware
│   ├── views/                # Vistas principales
│   │   ├── HomeView.jsx            # Página de inicio
│   │   └── LevelView.jsx           # Vista de proyectos por nivel
│   ├── data/
│   │   └── db.jsx            # Base de datos estática
│   ├── assets/               # Imágenes de proyectos
│   ├── App.jsx               # Componente raíz
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos globales + Tailwind
├── public/                   # Archivos estáticos
├── package.json              # Dependencias
├── vite.config.js            # Configuración Vite
├── tailwind.config.js        # Configuración Tailwind
└── README.md                 # Este archivo
```

---

## 🚀 Instalación

### Prerrequisitos

- Node.js 16+ 
- npm 8+

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/Rakatamon/expo-feria-informatica-plantilla.git
cd expo-feria-informatica-plantilla

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en navegador
# http://localhost:5173
```

---

## 💻 Uso

### Desarrollo

```bash
# Servidor de desarrollo con hot reload
npm run dev

# Build para producción
npm run build

# Preview de build
npm run preview

# Linting
npm run lint
```

### Configuración del Puerto

Por defecto usa el puerto 5173. Para cambiar:

```bash
npm run dev -- --port 3000
```

---

## 🧩 Componentes Principales

### 1. **PCBuilder** (`components/features/PCBuilder.jsx`)

Simulador interactivo de ensamblaje de PC.

**Props:**
- `onClose: () => void` - Callback al cerrar

**Estado:**
- `installedParts: string[]` - IDs de componentes instalados
- `lastAction: object` - Última acción del usuario
- `showCompletionModal: boolean` - Mostrar modal de completado

**Características:**
- 7 componentes instalables con validación
- Delay de 2.5s antes del modal de completado
- Visualización en tiempo real
- Feedback inmediato

### 2. **HardwareVisual** (`components/ui/HardwareVisual.jsx`)

Renderiza visuales CSS art de cada componente de PC.

**Props:**
- `type: string` - Tipo de componente ('cpu', 'ram', 'gpu', etc.)

**Componentes disponibles:**
- `motherboard` - Placa verde con PCB realista
- `cpu` - Procesador con pins y socket
- `ram` - Memoria con RGB animado
- `gpu` - Tarjeta gráfica con ventiladores
- `ssd` - SSD NVMe M.2
- `psu` - Fuente modular con especificaciones
- `cool` - Refrigeración líquida AIO

### 3. **LevelView** (`views/LevelView.jsx`)

Vista de proyectos por nivel educativo.

**Props:**
- `data: object` - Datos del nivel desde `db.jsx`
- `onViewDetails: (project) => void` - Callback al clickear proyecto

### 4. **ProjectCard** (`components/ui/ProjectCard.jsx`)

Tarjeta individual de proyecto.

**Props:**
- `proyecto: object` - Datos del proyecto
- `onViewDetails: () => void` - Callback al clickear

---

## 🎮 Simulador de PC

### Orden de Ensamblaje Educativo

El simulador enseña el orden correcto de ensamblaje:

1. **Motherboard** ← Debe instalarse primero
2. **CPU** ← Requiere motherboard
3. **RAM** ← Requiere motherboard
4. **GPU** ← Requiere motherboard
5. **Cooler** ← Requiere CPU instalado
6. **SSD** ← Independiente
7. **PSU** ← Independiente

### Validaciones Implementadas

```javascript
// En togglePart()
if (['cpu', 'ram', 'gpu'].includes(part.id) && !installedParts.includes('motherboard')) {
  // Error: Instala motherboard primero
}

if (part.id === 'cool' && !installedParts.includes('cpu')) {
  // Error: Instala CPU primero
}
```

### Especificaciones de Componentes

| Componente | Especificación |
|-----------|----------------|
| Motherboard | ASUS ROG X670E - Socket AM5 - DDR5 |
| CPU | AMD Ryzen 9 - 16 Núcleos - 5.7 GHz |
| RAM | DDR5 32GB - 6000 MHz |
| GPU | NVIDIA RTX 4090 Ti - 24GB GDDR6X |
| SSD | Samsung 990 PRO - 2TB NVMe |
| PSU | 1200W - 80+ Gold - Modular |
| Cooler | AIO 360mm RGB - 2000 RPM |

---

## 🎨 Personalización

### Editar Información del Evento

**Archivo:** `src/data/db.jsx`

```javascript
export const INFO_EVENTO = {
  titulo: "TU TÍTULO",
  colegio: "TU COLEGIO",
  bienvenida: "Tu mensaje",
  fecha: "Tu fecha",
  lugar: "Tu ubicación"
};
```

### Agregar/Editar Proyectos

**Archivo:** `src/data/db.jsx`

```javascript
export const PROYECTOS_POR_NIVEL = {
  primero: {
    nivel: "1ro BGU",
    proyectos: [
      {
        id: 1,
        titulo: "Nuevo Proyecto",
        descripcion: "Descripción",
        tecnologias: ["Tech1", "Tech2"],
        imagen: "/ruta/imagen.jpg",
        estudiantes: ["Nombre"],
        // customView: "pc-builder" // Para simulador
      }
    ]
  }
};
```

### Colores del Tema

**Archivo:** `tailwind.config.js`

Los colores principales son:
- Primario: `cyan` (400-600)
- Secundario: `blue` (500-600)
- Acento: `purple` (600)
- Fondo: `slate` (900-950)

---

## 🌐 Despliegue

### GitHub Pages

```bash
# 1. Instalar gh-pages
npm install --save-dev gh-pages

# 2. Agregar scripts en package.json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# 3. Configurar base en vite.config.js
export default defineConfig({
  base: '/expo-feria-informatica-plantilla/',
  // ...
})

# 4. Desplegar
npm run deploy
```

### Vercel

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Desplegar
vercel
```

### Netlify

1. Conecta tu repositorio en netlify.com
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 📊 Estadísticas del Proyecto

- **Componentes React**: 9
- **Líneas de código**: ~2,000
- **Archivos JavaScript**: 13
- **Proyectos incluidos**: 20+
- **Niveles educativos**: 7
- **Componentes de PC**: 7
- **Tamaño del bundle**: ~578 KB

---

## 🤝 Contribución

Este es un proyecto educativo para la Unidad Educativa Ecuatoriana Austriaca.

Para modificaciones:
1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto fue desarrollado para fines educativos en el marco de la ExpoTec 2025.

---

## 👨‍💻 Autor

**Área de Informática**  
Unidad Educativa Ecuatoriana Austriaca  
Noviembre 2025

---

## 🙏 Agradecimientos

- Estudiantes del Área de Informática
- Profesores y coordinadores
- Comunidad de React y Vite
- Diseñadores de iconos de Lucide

---

## 📞 Contacto

Para consultas sobre el proyecto:
- **GitHub**: [@Rakatamon](https://github.com/Rakatamon)
- **Repositorio**: [expo-feria-informatica-plantilla](https://github.com/Rakatamon/expo-feria-informatica-plantilla)

---

**⭐ Si te gustó este proyecto, considera darle una estrella en GitHub!**
