const express = require('express');
const router = express.Router();
const inscripciones = require('../controllers/inscripciones');

router.get('/inscripciones', inscripciones.getInscripciones);
router.post('/inscripciones', inscripciones.createInscripcion);
router.delete('/inscripciones/:id', inscripciones.deleteInscripcion);

module.exports = router;
