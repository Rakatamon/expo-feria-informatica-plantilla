# 🎓 ExpoTec 2025 - Área de Informática UEEA

Sistema web interactivo para la Casa Abierta del Área de Informática de la Unidad Educativa Ecuatoriana Austriaca. Incluye un simulador educativo de ensamblaje de PC con componentes realistas y validaciones didácticas.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?style=flat-square&logo=tailwind-css)

🌐 **Demo en vivo**: [https://rakatamon.github.io/expo-feria-informatica-plantilla/](https://rakatamon.github.io/expo-feria-informatica-plantilla/)

---

## ✨ Características Principales

- 🎯 **7 Niveles Educativos**: Navegación organizada por cursos (8vo EGB - 3ro BGU + Robótica)
- 🖥️ **Simulador de PC**: Ensamblaje interactivo con 7 componentes y validaciones educativas
- 📱 **Diseño Responsivo**: Optimizado para desktop, tablet y móvil
- 🎨 **Interfaz Moderna**: Tema oscuro con gradientes y animaciones suaves
- 🌐 **Navegación Real**: React Router para URLs compartibles y botón "Atrás" funcional
- 🔒 **100% Seguro**: 0 vulnerabilidades detectadas

---

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 16+
- npm 8+

### Instalación

```bash
# 1. Clonar repositorio
git clone https://github.com/Rakatamon/expo-feria-informatica-plantilla.git
cd expo-feria-informatica-plantilla

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Comandos Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilar para producción
npm run preview  # Vista previa del build
npm run deploy   # Desplegar a GitHub Pages
```

---

## 🎮 Simulador de PC

### Componentes Instalables

1. **Motherboard** (obligatorio primero)
2. **CPU** - AMD Ryzen 9 (requiere motherboard)
3. **RAM** - DDR5 32GB (requiere motherboard)
4. **GPU** - RTX 4090 Ti (requiere motherboard)
5. **Cooler** - AIO 360mm (requiere CPU)
6. **SSD** - Samsung 990 PRO 2TB
7. **PSU** - 1200W 80+ Gold

El simulador enseña el orden correcto de ensamblaje con validaciones en tiempo real.

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── features/       # PCBuilder, ProjectModal
│   ├── layout/         # Navbar, Footer
│   └── ui/             # ProjectCard, HardwareVisual
├── views/              # HomeView, LevelView
├── data/               # db.jsx (configuración)
└── assets/             # Imágenes de proyectos
```

---

## 🎨 Personalización

### Editar Información del Evento

Archivo: `src/data/db.jsx`

```javascript
export const INFO_EVENTO = {
  titulo: "UEEA - Área de Informática",
  fecha: "Jueves 27 de Noviembre de 2025",
  lugar: "Laboratorios de Computación y Robótica"
};
```

### Agregar Proyectos

```javascript
export const PROYECTOS_POR_NIVEL = {
  primero: {
    proyectos: [
      {
        id: 1,
        nombre: "Nuevo Proyecto",
        descripcion: "...",
        imagen: "/ruta/imagen.jpg"
      }
    ]
  }
};
```

---

## 🌐 Despliegue a GitHub Pages

```bash
# Deploy automático
npm run deploy
```

El sitio se publicará en: `https://[usuario].github.io/[repositorio]/`

**Tiempo de actualización**: 1-2 minutos

---

## �️ Tecnologías

- **React 19.2.0** - Biblioteca UI
- **Vite 7.2.4** - Build tool
- **React Router DOM 7.1.3** - Navegación
- **Tailwind CSS 4.1.17** - Estilos
- **Lucide React** - Iconos

---

## 📊 Información del Evento

- **Institución**: Unidad Educativa Ecuatoriana Austriaca (UEEA)
- **Evento**: Casa Abierta - Área de Informática
- **Fecha**: Jueves 27 de Noviembre de 2025
- **Ubicación**: Laboratorios de Computación y Robótica
- **Entrada**: Acceso libre para todo el público

---

## 👨‍💻 Autor

**Josue Gomez**  
Unidad Educativa Ecuatoriana Austriaca  
Área de Informática

---

## � Licencia

Proyecto educativo desarrollado para la ExpoTec 2025 - UEEA

---

## 🔗 Enlaces

- **Repositorio**: [GitHub](https://github.com/Rakatamon/expo-feria-informatica-plantilla)
- **Demo**: [GitHub Pages](https://rakatamon.github.io/expo-feria-informatica-plantilla/)
- **Autor**: [@Rakatamon](https://github.com/Rakatamon)
