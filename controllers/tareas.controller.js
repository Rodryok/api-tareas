let tareas = [
    { id: 1, titulo: 'Estudiar Express' }
];

// POST /tareas
const crearTarea = (req, res) => {

    const nuevaTarea = {
        id: tareas.length + 1,
        titulo: req.body.titulo
    };

    tareas.push(nuevaTarea);

    res.status(201).json(nuevaTarea);
};

module.exports = {
    crearTarea
};