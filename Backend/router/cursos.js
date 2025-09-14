
const express = require('express');
const router = express.Router();
const cursos = require('../controllers/cursos'); 

router.get('/cursos', cursos.getCursos);            
router.get('/cursos/:id', cursos.getCursoById);     
router.post('/cursos', cursos.createCurso);         
router.put('/cursos/:id', cursos.updateCurso);     
router.delete('/cursos/:id', cursos.deleteCurso);   
module.exports = router;

