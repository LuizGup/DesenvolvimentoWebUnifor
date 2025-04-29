// server/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { connectDB} from './config/database.js';

// Importando Rotas
// import usuarioRoutes from './routes/usuarioRoutes.js';
import agendamentoRoutes from './routes/agendamentoRoutes.js'; 

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const ag = {name:'teste 1', id:20, time:21};
// Rota raiz
app.get('/', (req, res) => {
    // res.send('API do Sistema de Agendamentos Online');
  });



  // Usar as rotas
// app.use('/api/usuarios', usuarioRoutes);
app.use('/api/agendamentos', agendamentoRoutes);
// app.use('/api/usuarios', usuarioRoutes);


// Rota coringa: deve ser a **última**
app.use((req, res) => {
  res.status(404).json({
    erro: 'Rota não encontrada',
    caminho: req.originalUrl
  });
});
  
connectDB();


app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});