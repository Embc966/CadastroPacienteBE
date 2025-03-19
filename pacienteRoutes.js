const express = require('express');
const pacienteController = require('../controllers/pacienteController');

const router = express.Router();

router.post('/pacientes', pacienteController.criarPaciente);
router.get('/pacientes', pacienteController.listarPacientes);

module.exports = router;