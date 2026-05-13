const obtenerTareas = (req, res) => {
    const tareas = [
        {
            id: 1,
            titulo: "Estudiar GCS"
        },
        {
            id: 2,
            titulo: "TP GIT mini proyecto"
        }
    ];

    res.json(tareas);
};
module.exports = {
    obtenerTareas
}