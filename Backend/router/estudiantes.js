
const express = require('express');
const router = express.Router();
const estudiantes = require('../controllers/estudiantes');


router.get('/estudiantes', estudiantes.getEstudiantes);            
router.get('/estudiantes/:id', estudiantes.getEstudianteById);     
router.post('/estudiantes', estudiantes.createEstudiante);          
router.put('/estudiantes/:id', estudiantes.updateEstudiante);      
router.delete('/estudiantes/:id', estudiantes.deleteEstudiante);    

module.exports = router;
