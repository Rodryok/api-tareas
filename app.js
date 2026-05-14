const express = require('express');
const app = express();

app.use(express.json()); // para leer JSON

const PORT = 3000;

const tareasRoutes = require('./routes/tareas.routes');

app.use('/', tareasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});