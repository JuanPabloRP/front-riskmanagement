# DOCUMENTACIÓN

## Como iniciar la aplicación

- Tener instalado node js y npm
- Instalar dependencias:

```javascript
npm install
```

- Iniciar la aplicación con el comando en modo desarrollo

```javascript
npm run dev
```

## ¿Con que se está estilizando?

- Principalmente con [tailwind](https://tailwindcss.com/)
- Se usa componentes ya hechos con tailwind y react usando la librería [flowbite react](https://flowbite-react.com/) aquí puedes buscar los componentes, copiar y pegar
- Además tambien se usa [flowbite](https://flowbite.com/) por si solo en el caso que flowbite react no tenga lo necesario o se quiera más versatilidad, aquí también puedes copiar y pegar componentes

## ¿Cómo están organizadas las carpetas y que archivos se encontrarán?

- assets: Todos los archivos multimedia (Imagenes, svg, etc)
- components: Componentes que usarán en más de un lugar de la aplicación
- context: Aquí estarán funcionalidades que permitiran que x información (Ejemplo: información del usuario) se mantenga durante toda la aplicación sin importar si se cambia a otra página
- layouts: Contenedores de página relacionadas (para el contenido público, para el contenido privado)
- pages: Donde estarán las páginas de la aplicacióin
  - Aqui podras encontrar la página principal
  - Componentes que solo se usaran aqui
  - Hooks que solo serán usados aquí
- utils: Aquí se encontraran funcionalidades que se podrán usar en toda la aplicación, que no necesariamente son componentes (No tiene un HTML)

## Algunos archivos importantes para tener en cuenta

- App.tsx: Aquí se manejaran las rutas entre otras cosas de la aplicación (Autenticaciones, etc)
- main.tsx: punto de entrada de la aplicación
- index.css: Donde se importa lo necesario para usar tailwind, tambiénm se pueden agregar estados globales
- index.html: Punto de entrada de la aplicación en cuanto al HTML (No se toca)
- package.json: encontraremos las dependencias descargadas, información del proyecto, etc.

## ¿Y el temas de las rutas?

- Se usa react-router-dom
- Puedes encontrar todas las rutas disponibles desde el archivo que está en utils/constanst/paths

## ¿Qué estandares buscamos seguir?

- Se busca que el código esté en inglés
- Que se haga uso del modelo branching para el uso de las ramas en git
- No repetición de código
- Entre otras cosas

## Este readme se estará actualizando...
