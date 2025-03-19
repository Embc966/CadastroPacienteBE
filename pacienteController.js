const pacienteService = require('../services/pacienteService');

const criarPaciente = async (req, res) => {
    try {
        const { nome, cpf, dataNascimento, telefone, email } = req.body;

        if (!nome || !cpf || !dataNascimento || !telefone || !email) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios.'});
        }
    
        const paciente = await pacienteServeice.criarPaciente(req.body);
        res.status(201).json({message: 'Paciente cadastrado com sucesso'});

    } catch (error) {
        res.status(400).json({ error: error.message});
    }
};

const listarPacientes = async (req, res) => {
    try {
        const pacientes = await pacienteService.listarPacientes();
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

module.exports = { criarPaciente, listarPacientes};