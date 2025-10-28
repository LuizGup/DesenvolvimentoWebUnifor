// server/routes/agendamentoRoutes.js

import express from 'express';
import {
  listarUsuario,
  criarUsuario
} from '../controllers/usuarioController.js';

// import {listarUsers} from '../controllers/UsersController.js';
 
const router = express.Router();


// localhost:3000/api/agendamentos/listaId/id


router.get('/list', listarUsuario);
router.post('/add', criarUsuario);

// router.put('/:id', atualizarAgendamento);
// router.delete('/deleteAg/:id', deletarAgendamento);

// Rota inválida dentro de /agendamento/*
router.use((req, res) => {
  res.status(404).json({
    erro: 'Subrota de /agendamento não encontrada',
    caminho: req.originalUrl
  });
});


export default router;
