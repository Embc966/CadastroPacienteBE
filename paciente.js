const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    cpf: { type: String, required: true, unique: true},
    dataNascimento: { type: Date, required: true},
    email: { type: String, required: true},
    telefone: { type: String, required: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('Paciente', pacienteSchema);

