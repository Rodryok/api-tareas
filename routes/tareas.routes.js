const express = require('express');
const router = express.Router();

const {obtenerTareas, getTareaById, crearTarea} = require ('../controllers/tareas.controller');

router.get('/tareas', obtenerTareas);

router.get('/tareas/:id', getTareaById);
router.post('/tareas', crearTarea);

module.exports = router;