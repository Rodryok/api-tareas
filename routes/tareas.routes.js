const express = require('express');
const router = express.Router();

const {obtenerTareas} = require ('../controllers/tareas.controller');

router.get('/tareas', obtenerTareas);

module.exports = router;