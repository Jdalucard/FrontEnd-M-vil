# Star Wars API App

Una aplicación móvil desarrollada con React Native y TypeScript que muestra información de personajes, películas y planetas de Star Wars utilizando la API SWAPI.

## Características

- Listado de personajes de Star Wars
- Búsqueda de personajes
- Vista detallada de cada personaje
- Diseño atómico
- Integración con SWAPI
- Traducción de atributos al español
- Navegación entre pantallas
- Gestión de estado con redux

## Requisitos

- Node.js (versión 14 o superior)
- npm o yarn
- Expo CLI
- Dispositivo móvil con Expo Go instalado o emulador

## Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Instala las dependencias:
```bash
cd my-app
npm install
```

3. Inicia la aplicación:
```bash
npm start
```

4. Escanea el código QR con la aplicación Expo Go en tu dispositivo móvil o presiona 'a' para abrir en un emulador de Android.

## Estructura del Proyecto

```
my-app/
├── src/
│   ├── atoms/         # Componentes básicos (Text, Button, etc.)
│   ├── molecules/     # Componentes compuestos (PersonaCard, etc.)
│   ├── organisms/     # Componentes complejos
│   ├── templates/     # Plantillas de pantalla
│   ├── pages/         # Pantallas principales
│   ├── services/      # Servicios de API
│   ├── types/         # Tipos de TypeScript
│   ├── utils/         # Utilidades
│   └── hooks/         # Hooks personalizados
├── App.tsx            # Componente principal
└── package.json       # Dependencias y scripts
```

## Tecnologías Utilizadas

- React Native
- TypeScript
- React Navigation
- Redux Toolki
- Axios
- Expo

## Funcionalidades

### Listado de Personajes
- Muestra una lista paginada de personajes de Star Wars
- Cada personaje se muestra en una tarjeta con información básica
- Soporte para carga infinita

### Búsqueda
- Buscador en tiempo real de personajes
- Filtrado instantáneo de resultados

### Detalle de Personaje
- Información detallada del personaje seleccionado
- Lista de películas en las que aparece
- Lista de especies asociadas
- Lista de vehículos y naves espaciales


## Licencia

<<<<<<< HEAD
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles. 
=======
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles. 
>>>>>>> 598acba (fixes types and format)
