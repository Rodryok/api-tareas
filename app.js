const express = require('express');
const app = express();

const tareasRoutes = require('./routes/tareas.routes')
app.use(express.json()); // para leer JSON
app.use('/', tareasRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});