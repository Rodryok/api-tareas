const express = require("express");
const router = express.Router();
const tareaController = require('../controllers/tareas.controller.js');

router.get('/tareas/:id', tareaController.getTareaById);

module.exports = router;