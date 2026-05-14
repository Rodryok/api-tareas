const express = require('express');
const router = express.Router();

const tareasController = require('../controllers/tareas.controller');

router.post('/tareas', tareasController.crearTarea);

module.exports = router;