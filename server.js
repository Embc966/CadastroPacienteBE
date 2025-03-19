const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const pacienteRoutes = require('./src/routes/pacienteRoutes');

const app = express();

app.use(cors());

app.use(express.json());

mongoose
    .connect(
        "mongodb+srv://Embc:Embc966@paciente.ue86q.mongodb.net/?retryWrites=true&w=majority&appName=Paciente",
        {
            serverSelectionTimeoutMS: 300000,
        }
    )
    .then(() => console.log("Conectado ao MongoDB com sucesso!"))
    .catch((err) => console.error("Erro ao conectar ao MongoDB...", err));

    app.get('/health', (req, res) => {
        res.status(200).json(
            { status: 200, message: 'servidor ativo!'});
        
    });

    app.use('/api', pacienteRoutes);

    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    })