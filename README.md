# Plantilla simple para crear sitios web con Yarn y Gulp

Plantilla sencilla para la creación de sitios web simples mediante el uso de Yarn como manejador de dependencias y Gulp como automatizador de tareas.

## Características de samareWebTemplate:

* Puedes iniciar tu proyecto con npm o yarn.
* Usa gulp para automatizar tareas.

## Modo de uso

1. Clona este repositorio o descarga el archivo comprimido.
2. Puedes iniciar tu proyecto desde cero optando por el manejador de dependencias de tu preferencia (recomendado yarn: https://yarnpkg.com/es-ES/) -> NPM(npm init) o YARN(yarn init).
3. Utilizar esta línea de comandos para instalar las dependencias que se utilizan desde cero con Yarn (los archivos no incluyen el archivo package.json):
		yarn add babel-core babel-preset-env babelify browser-sync browserify cssnano gulp gulp-babel gulp-plumber gulp-postcss gulp-pug gulp-sass gulp-sourcemaps gulp-watch vinyl-buffer vinyl-source-stream --dev
4. No se recomienda hacer modificaciones en el archivo gulpfile.babel.js, a menos que sepas lo que estas haciendo.

## Estructura

1. La carpeta dev contiene la estructura de archivos con la que trabajará con Pug, SASS y JavaScript.
2. La carpeta css dentro de app, contiene un archivo con una librería muy sencilla para el uso de flex box para el layout.
3. Puedes realizar pruebas antes de realizar los ajustes propios de tu proyecto.

Siéntete libre de usarlo y hacer sugerencias o reportar cualquier problema que encuentres.
