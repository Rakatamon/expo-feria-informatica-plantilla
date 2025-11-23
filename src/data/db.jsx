import { Code, Cpu, Gamepad2, Monitor, Database, Video, Zap, Wrench, Sparkles, BookOpen, PenTool, Globe, Bot } from 'lucide-react';
import React from 'react';

// Importación de Imágenes
import imgWord from '../assets/proyectos/word.webp';
import imgImpresion3d from '../assets/proyectos/Impresión3d.webp';
import imgExcel from '../assets/proyectos/excel.png';
import imgPython from '../assets/proyectos/python.png';
import imgServidorWeb from '../assets/proyectos/servidorweb.jpg';
import imgVoip from '../assets/proyectos/VOIP.jpg';
import imgRiego from '../assets/proyectos/sistema de riego.webp';
import imgScratch from '../assets/proyectos/scratch.jpg';
import imgEv3 from '../assets/proyectos/ev3.jpg';
import imgMotores from '../assets/proyectos/motores.jpg';
import imgArduino from '../assets/proyectos/arduino.jpg';
import imgElectronica from '../assets/proyectos/electrónica.jpg';
import imgSimulacionComp from '../assets/proyectos/simulacióncomponentes.jpg';
import imgCarta from '../assets/proyectos/programacióncarta.jpg';
import imgPaginaWeb from '../assets/proyectos/páginaweb.jpg';
import imgJuego2d from '../assets/proyectos/juego2dunity.jpg';
import imgAppMovil from '../assets/proyectos/aplicaciónmóvil.jpg';
import imgSemaforo from '../assets/proyectos/arduino-semaforo.jpg';
import imgMantenimiento from '../assets/proyectos/Mantenimientoensamblajecomputador.jpg';
import imgAudioVisual from '../assets/proyectos/Producción y Postproducción Audio Visual.jpg';

export const INFO_EVENTO = {
    titulo: "ÁREA DE INFORMÁTICA",
    subtitulo: "Casa Abierta de Informática y Tecnología",
    colegio: "Unidad Educativa Ecuatoriana Austriaca",
    bienvenida: "Bienvenidos al futuro. Explora los proyectos innovadores desarrollados por el Área de Informática.",
    fecha: "Noviembre Jueves 26 de 2025",
    lugar: "Patio Central & Laboratorios de escuela"
};

export const NAV_ITEMS = [
    { id: 'home', label: 'Inicio', icon: <Sparkles size={18} /> },
    { id: 'octavo', label: '8vo EGB', icon: <BookOpen size={18} /> },
    { id: 'noveno', label: '9no EGB', icon: <PenTool size={18} /> },
    { id: 'decimo', label: '10mo EGB', icon: <Globe size={18} /> },
    { id: 'primero', label: '1ro BGU', icon: <Code size={18} /> },
    { id: 'segundo', label: '2do BGU', icon: <Cpu size={18} /> },
    { id: 'tercero', label: '3ro BGU', icon: <Gamepad2 size={18} /> },
    { id: 'robotica', label: 'Club Robótica', icon: <Bot size={18} /> },
];

export const PROYECTOS_POR_NIVEL = {
    octavo: {
        titulo: "8vo EGB",
        descripcion: "Iniciando el viaje en la tecnología.",
        color: "from-teal-500 to-emerald-400",
        icon: <BookOpen size={40} />,
        proyectos: [
            {
                id: 1,
                nombre: "Word - Página Web",
                categoria: "Opciones de Computación",
                descripcion: "Creación de páginas web utilizando Microsoft Word.",
                contenidoLargo: "Los estudiantes demuestran cómo utilizar las herramientas de diseño de Word para crear estructuras web básicas.",
                icono: <Monitor className="text-blue-400" />,
                autores: "Ing. Rony Holguín Morán MSc.",
                imagen: imgWord
            }
        ]
    },
    noveno: {
        titulo: "9no EGB",
        descripcion: "Explorando nuevas herramientas.",
        color: "from-indigo-500 to-blue-400",
        icon: <PenTool size={40} />,
        proyectos: [
            {
                id: 1,
                nombre: "Excel – Dashboard y Formularios",
                categoria: "Opciones de Computación",
                descripcion: "Gestión de datos y visualización con Excel.",
                contenidoLargo: "Creación de tableros de control dinámicos y formularios para ingreso de datos.",
                icono: <Database className="text-green-400" />,
                autores: "Ing. Rony Holguín Morán MSc.",
                imagen: imgExcel
            }
        ]
    },
    decimo: {
        titulo: "10mo EGB",
        descripcion: "Preparándose para el bachillerato.",
        color: "from-rose-500 to-pink-400",
        icon: <Globe size={40} />,
        proyectos: [
            {
                id: 1,
                nombre: "Python – Programación de Juegos",
                categoria: "Opciones de Computación",
                descripcion: "Desarrollo de videojuegos básicos con Python.",
                contenidoLargo: "Introducción a la lógica de programación mediante la creación de juegos interactivos.",
                icono: <Gamepad2 className="text-yellow-400" />,
                autores: "Ing. Rony Holguín Morán MSc.",
                imagen: imgPython
            }
        ]
    },
    primero: {
        titulo: "1ro Bachillerato",
        descripcion: "Sistemas Operativos, Redes y Programación.",
        color: "from-blue-500 to-cyan-400",
        icon: <Code size={40} />,
        proyectos: [
            {
                id: 1,
                nombre: "Servidor Web",
                categoria: "Sistemas Operativos y Redes",
                descripcion: "Implementación y configuración de un servidor web.",
                contenidoLargo: "Despliegue de servicios web utilizando tecnologías de servidor.",
                icono: <Database className="text-blue-400" />,
                autores: "Ing. Rony Holguín Morán MSc.",
                imagen: imgServidorWeb
            },

            {
                id: 4,
                nombre: "Simulación - Componentes del Computador",
                categoria: "Soporte Técnico",
                descripcion: "Simulador interactivo de ensamble de PC.",
                contenidoLargo: "Herramienta visual para aprender sobre hardware.",
                customView: 'pc-builder',
                icono: <Monitor className="text-cyan-400" />,
                autores: "Ing. Josué Gómez Guerra",
                imagen: imgSimulacionComp
            },
            {
                id: 5,
                nombre: "Programación de Carta Digital",
                categoria: "Programación y Base de Datos",
                descripcion: "Carta digital interactiva desarrollada en Python.",
                contenidoLargo: "Aplicación de escritorio para enviar mensajes personalizados.",
                icono: <Code className="text-yellow-400" />,
                autores: "Ing. Josué Gómez Guerra",
                imagen: imgCarta
            },
            {
                id: 6,
                nombre: "Página Web",
                categoria: "Programación y Base de Datos",
                descripcion: "Desarrollo web frontend.",
                contenidoLargo: "Sitio web informativo creado con HTML, CSS y JS.",
                icono: <Globe className="text-orange-400" />,
                autores: "Ing. Josué Gómez Guerra",
                imagen: imgPaginaWeb
            }
        ]
    },
    segundo: {
        titulo: "2do Bachillerato",
        descripcion: "Hardware, Redes y Producción Multimedia.",
        color: "from-purple-500 to-pink-500",
        icon: <Cpu size={40} />,
        proyectos: [
            {
                id: 1,
                nombre: "Tecnología de Hardware: Ensamblaje y Mantenimiento",
                categoria: "Soporte Técnico",
                descripcion: "Mantenimiento preventivo y correctivo de equipos.",
                contenidoLargo: "Técnicas profesionales para el cuidado y reparación de computadoras.",
                icono: <Wrench className="text-gray-400" />,
                autores: "Ing. Jonathan Ponce Pozo",
                imagen: imgMantenimiento
            },
            {
                id: 2,
                nombre: "Producción y Postproducción Audio Visual",
                categoria: "Diseño Web",
                descripcion: "Edición de video y efectos visuales.",
                contenidoLargo: "Creación de contenido multimedia de alta calidad.",
                icono: <Video className="text-pink-400" />,
                autores: "Prof. Anthony Holguín Rodríguez",
                imagen: imgAudioVisual
            },
            {
                id: 3,
                nombre: "Juego 2D",
                categoria: "Programación y Base de Datos",
                descripcion: "Videojuego de plataformas desarrollado en Unity.",
                contenidoLargo: "Proyecto de desarrollo de software enfocado en entretenimiento.",
                icono: <Gamepad2 className="text-green-400" />,
                autores: "Ing. Josué Gómez Guerra",
                imagen: imgJuego2d
            },
            {
                id: 4,
                nombre: "VoIP – Asterisk",
                categoria: "Sistemas Operativos y Redes",
                descripcion: "Telefonía IP con servidor Asterisk (2do y 3ero Bachillerato).",
                contenidoLargo: "Configuración de una central telefónica digital. Proyecto conjunto de 2do y 3ero de Bachillerato.",
                icono: <Zap className="text-purple-400" />,
                autores: "Ing. Rony Holguín Morán MSc.",
                imagen: imgVoip
            }
        ]
    },
    tercero: {
        titulo: "3ro Bachillerato",
        descripcion: "Maestría en Código y Aplicaciones avanzadas.",
        color: "from-orange-500 to-red-500",
        icon: <Gamepad2 size={40} />,
        proyectos: [
            {
                id: 1,
                nombre: "Aplicación Móvil con Flutter",
                categoria: "Programación y Base de Datos",
                descripcion: "App multiplataforma para dispositivos móviles.",
                contenidoLargo: "Desarrollo de aplicaciones modernas utilizando el framework Flutter.",
                icono: <Zap className="text-blue-400" />,
                autores: "Ing. Josué Gómez Guerra",
                imagen: imgAppMovil
            },
            {
                id: 2,
                nombre: "Juego 2D (Avanzado)",
                categoria: "Programación y Base de Datos",
                descripcion: "Mecánicas avanzadas en desarrollo de videojuegos.",
                contenidoLargo: "Continuación del proyecto de juegos con características complejas.",
                icono: <Gamepad2 className="text-purple-400" />,
                autores: "Ing. Josué Gómez Guerra",
                imagen: imgJuego2d
            }
        ]
    },
    robotica: {
        titulo: "Club de Robótica",
        descripcion: "Innovación y creación de prototipos.",
        color: "from-slate-600 to-slate-400",
        icon: <Bot size={40} />,
        proyectos: [
            {
                id: 1,
                nombre: "Tinkercad",
                categoria: "Robótica",
                descripcion: "Diseño 3D y simulación de circuitos.",
                contenidoLargo: "Uso de Tinkercad para aprender electrónica y diseño 3D de forma interactiva.",
                icono: <Code className="text-orange-400" />,
                autores: "Lcda. Evelyn Muñoz Méndez",
                imagen: imgScratch
            },
            {
                id: 2,
                nombre: "LEGO EV3",
                categoria: "Robótica",
                descripcion: "Construcción y programación de robots LEGO.",
                icono: <Bot className="text-red-400" />,
                autores: "Lcda. Evelyn Muñoz Méndez",
                imagen: imgEv3
            },
            {
                id: 3,
                nombre: "Motores y Mecanismos",
                categoria: "Robótica",
                descripcion: "Fundamentos de movimiento robótico.",
                icono: <Wrench className="text-gray-400" />,
                autores: "Lcda. Evelyn Muñoz Méndez",
                imagen: imgMotores
            },
            {
                id: 4,
                nombre: "Arduino",
                categoria: "Robótica",
                descripcion: "Proyectos electrónicos con microcontroladores.",
                icono: <Cpu className="text-teal-400" />,
                autores: "Lcda. Evelyn Muñoz Méndez",
                imagen: imgArduino
            },
            {
                id: 5,
                nombre: "Electrónica Básica",
                categoria: "Robótica",
                descripcion: "Circuitos y componentes electrónicos.",
                icono: <Zap className="text-yellow-400" />,
                autores: "Lcda. Evelyn Muñoz Méndez",
                imagen: imgElectronica
            },
            {
                id: 6,
                nombre: "Impresión 3D y Arduino",
                categoria: "Robótica",
                descripcion: "Introducción al modelado 3D y control con Arduino.",
                contenidoLargo: "Exposición sobre el funcionamiento de impresoras 3D y proyectos básicos de automatización.",
                icono: <Cpu className="text-teal-400" />,
                autores: "Ing. Rony Holguín Morán MSc.",
                imagen: imgImpresion3d
            },
            {
                id: 7,
                nombre: "Simulación de semáforo con Arduino",
                categoria: "Robótica",
                descripcion: "Control de luces LED simulando un semáforo.",
                contenidoLargo: "Proyecto práctico de programación en C++ para Arduino.",
                icono: <Zap className="text-yellow-400" />,
                autores: "Ing. Josué Gómez Guerra",
                imagen: imgSemaforo
            },
            {
                id: 8,
                nombre: "Sistema de Riego Automatizado",
                categoria: "Robótica",
                descripcion: "Automatización de riego mediante sensores y controladores.",
                contenidoLargo: "Proyecto IoT para la gestión eficiente del agua en cultivos. (2do Bachillerato)",
                icono: <Cpu className="text-green-400" />,
                autores: "Ing. Rony Holguín Morán MSc.",
                imagen: imgRiego
            }
        ]
    }
};
