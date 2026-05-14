let tareas = [
    {id: 1, detalle: 'Aprender express'},
    {id: 2, detalle: 'terminar la tarea'},
    {id: 3, detalle: 'eliminar relleno de prueba'}
];
const obtenerTareas = (req, res) => {
    res.json(tareas);
};
// modelo de tarea y listado ejemplo

const getTareaById = (req, res) => {
    const tarea = tareas.find(t => t.id === parseInt(req.params.id));
    if (!tarea) return res.status(404).send('Tarea not found');
    res.json(tarea);
}
const crearTarea = (req, res) => {

    const nuevaTarea = {
        id: tareas.length + 1,
        titulo: req.body.titulo
    };

    tareas.push(nuevaTarea);

    res.status(201).json(nuevaTarea);
};

module.exports = {
    obtenerTareas,
    getTareaById,
    crearTarea
}
