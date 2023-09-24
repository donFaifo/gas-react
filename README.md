# gas-react
Scaffolding básico para proyectos Google App Script usando [React](https://es.react.dev/) y [Parcel](https://parceljs.org/docs/). Además se han usado:
* [@google/clasp](https://github.com/google/clasp)
* [React-router](https://reactrouter.com/en/6.16.0/router-components/browser-router) (Usando `BrowserRouter`)
* [Tailwindcss](https://tailwindcss.com/)
* [material-tailwind/react](https://www.npmjs.com/package/@material-tailwind/react?activeTab=readme)
* [tailwind heroicons](https://github.com/tailwindlabs/heroicons)

# Instrucciones
* Clonar repositorio
* `npm install` - Instala las dependencias del proyecto
* `npm run start` - Compila el proyecto en la carpeta `dist` en modo _desarrollo_
* `npm run glogin` - Ingresa en la cuenta Google donde se quiera desplegar la app
* Crear el proyecto Google App Script usando `clasp`:
```sh
clasp create --title "React app" --rootDir ./dist --type webapp
```
* Asegurar que `.clasp.json` esté en el directorio raíz y no en la carpeta `dist`. Cuando se crea el proyecto desde un script de `package.json`, usualmente está dentro de la carpeta `dist`.
* Ir a [Google App Script](https://script.google.com/home) para configurar el proyecto
* Modificar zona horaria (si fuera necesario) y marcar _Mostrar manifiesto_ (opcional)
* Hacer nueva implementación tipo "Aplicación web"
* `npm run gpull` - Para obtener la última versión del manifiesto.
* `npm run gpush` - Para enviar el archivo `Code.js` y el `index.html` compilado.
* Usando la implementación de prueba se pueden ver los cambios tras cada _push_. Para implementar una nueva versión de la implementación inicial, se puede hacer desde el portal de la aplicación en GAS o bien usando el script del `package.json`. Recordar usar el id de la aplicación web implementada.
```js
"gdeploy": "clasp deploy -i número_de_id_obtenido_en_deploy -d \"Descripción para añadir al deploy\" "
```
* `npm run gstart` Para monitorizar cambios y subir automáticamente a GAS
* Una vez finalizado el proyecto realizar la build (solo usar `gdeploy` si se ha modificado la id en el script, en caso contrario, ir a GAS e implementar nueva versión desde allí).
```sh
npm run build
npm run gpush
npm run gdeploy
```
