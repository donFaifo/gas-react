# gas-react
Scaffolding básico para proyectos Google App Script usando React con Tailwindcss. 

# Instrucciones
* Clonar repositorio
* `npm install`
* `npm run glogin`
* `npm run gcreate`
* Modificar `appscript.json` para añadir
```
"webapp": {
    "access": "MYSELF",
    "executeAs": "USER_ACCESSING"
}
```
* `npm run gdeploy` - esto da una id para hacer reimplementaciones aumentando el número de versión automáticamente, modificar script en `package.json`:
```
"gdeploy": "clasp deploy -i número_de_id_obtenido_en_deploy -d \"Descripción para añadir al deploy\" "
```
* Abrir proyecto App Script con el enlace (VScode) o con `clasp open`
* A partir de aquí se puede usar la implementación de prueba para ver los cambios tras cada _push_. Para monitorizar cambios y subir automáticamente a GAS:
```
npm run start
npm run gstart
```
