const { connection } = require('../config/db');

exports.getInscripciones = (req, res) => {
  connection.query(
    `SELECT i.id_inscripcion, e.nombre AS estudiante, c.nombre AS curso, i.fecha_inscripcion
     FROM inscripciones i
     JOIN estudiantes e ON i.id_estudiante = e.id_estudiante
     JOIN cursos c ON i.id_curso = c.id_curso`,
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    }
  );
};

exports.createInscripcion = (req, res) => {
  const { id_estudiante, id_curso, fecha_inscripcion } = req.body;
  connection.query(
    'INSERT INTO inscripciones (id_estudiante, id_curso, fecha_inscripcion) VALUES (?, ?, ?)',
    [id_estudiante, id_curso, fecha_inscripcion],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Inscripción creada', id: result.insertId });
    }
  );
};

exports.deleteInscripcion = (req, res) => {
  connection.query(
    'DELETE FROM inscripciones WHERE id_inscripcion = ?',
    [req.params.id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Inscripción eliminada' });
    }
  );
};