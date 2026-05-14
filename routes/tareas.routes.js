const express = require('express');
const router = express.Router();

const {obtenerTareas, getTareaById} = require ('../controllers/tareas.controller');

router.get('/tareas', obtenerTareas);

router.get('/tareas/:id', getTareaById);

module.exports = router;