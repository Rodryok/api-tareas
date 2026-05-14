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
  "id": 2, "titulo": "Hacer TP de Node"
}

feature-detalle-tarea <- Mauricio Peñaloza
La ejecucion de app.js permite consultar la api por una entrada especifica
en el listado actual de tareas EJ: GET http://localhost:3000/tareas/1 -> devuelve la tarea con el ID 1.

{
    "id": 1, "detalle": "Aprender express"
  }


feature-listado-tarea <- Federico Sassenberg
La ejecucion de app.js permite consultar la lista completa a la api 
EJ: GET http://localhost:3000/tareas -> Devuelve la lista completa

{
    "id": 1, "detalle": "Aprender express"
  },
  {
    "id": 2, "detalle": "terminar la tarea"
  },

para instalar: 
- npm init -y
- npm install express 
- git pull ([url de este repositorio](https://github.com/Rodryok/api-tareas))


Para utilizar:
- node app.js
- *(comunicarse/probar la api, por defecto es localhost:3000/)
