En este repositorio se sigue el desarrollo de la api-Tareas.

Los items de la configuracion seguidos en este repositorio son:
app.js
README.md
.gitignore
package-lock.json
package.json

controllers/ 
-- tareas.controller.js

routes/ 
-- tareas.routes.js

Features:
feature-crear-tarea <- Rodrigo Pereyra
En esta version, la ejecucion de app.js permite agregar una tarea a la lista y devuelve como se ve esa tarea en la lista
EJ: http://localhost:3000/tareas
POST:
{
    "titulo": "Hacer TP de Node"
}
Devolucion:
{
  "id": 2,
  "titulo": "Hacer TP de Node"
}

para instalar: 
npm init -y
npm install express
git pull (url de este repositorio)


Para utilizar:
node app.js
*(comunicarse/probar la api, por defecto es localhost:3000/)

repo: https://github.com/Rodryok/api-tareas