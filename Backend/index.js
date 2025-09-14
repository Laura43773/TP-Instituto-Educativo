const express = require("express"); // CORRECTO
const mysql = require("mysql2");
const app = express();

const cursosRouter = require('./router/cursos');
const estudiantesRouter = require('./router/estudiantes');
const inscripcionesRouter = require('./router/inscripciones');

app.use(express.json());

app.use('/api', cursosRouter);
app.use('/api', estudiantesRouter);
app.use('/api', inscripcionesRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
