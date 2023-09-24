# gas-react
Scaffolding básico para proyectos Google App Script usando React con Tailwindcss. 

# Instrucciones
* Clonar repositorio
* `npm install`
* `npm run start` - Compila el proyecto en la carpeta `dist` en modo _desarrollo_
* `npm run glogin`
* `npm run gcreate`
* Ir a [Google App Script](https://script.google.com/home) para configurar el proyecto
* Modificar zona horaria (si fuera necesario) y marcar _Mostrar manifiesto_
* `npm run gpull`
* Modificar `appscript.json` para añadir
```
"webapp": {
    "access": "MYSELF",
    "executeAs": "USER_ACCESSING"
}
```
* Asegurar que `.clasp.json` esté en el directorio raíz y no en la carpeta `dist`.
* `npm run gpush` - Saltará mensaje de que el manifiesto ha sido modificado, ¿aceptar? -> Sí
* `npm run gdeploy` - esto da una id para hacer reimplementaciones aumentando el número de versión automáticamente, modificar script en `package.json`:
```
"gdeploy": "clasp deploy -i número_de_id_obtenido_en_deploy -d \"Descripción para añadir al deploy\" "
```
* Abrir proyecto App Script con `clasp open` (si no estuviera abierto ya)
* A partir de aquí se puede usar la implementación de prueba para ver los cambios tras cada _push_.
* `npm run gstart` Para monitorizar cambios y subir automáticamente a GAS
