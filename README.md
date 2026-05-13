En este repositorio se sigue el desarrollo de la api-Tareas.

Los items de la configuracion seguidos en este repositorio son:
app.js
README.md
.gitignore
package-lock.json   (agregado este commit)
package.json        (agregado este commit)

controllers/ 
-- tareas.controller.js

routes/ 
-- tareas.routes.js

Features:
feature-detalle-tarea <- M Peñaloza
En esta version, la ejecucion de app.js permite consultar la api por una entrada especifica
en el listado actual de tareas EJ: http://localhost:3000/1 -> devuelve la tarea con el ID 1. 

para instalar: 
- npm init -y
- npm install express 
- git pull ([url de este repositorio](https://github.com/Rodryok/api-tareas))


Para utilizar:
- node app.js
- *(comunicarse/probar la api, por defecto es localhost:3000/)

repo: https://github.com/Rodryok/api-tareas