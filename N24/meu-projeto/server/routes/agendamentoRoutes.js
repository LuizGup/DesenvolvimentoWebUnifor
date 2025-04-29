// server/routes/agendamentoRoutes.js

import express from 'express';
import {
  listarAgendamentos,
  criarAgendamento,
  obterAgendamento,
  atualizarAgendamento,
  deletarAgendamento
} from '../controllers/agendamentoController.js';

import {listarUsers} from '../controllers/UsersController.js';
import Agendamento from '../models/Agendamento.js';
 
const router = express.Router();




// router.get('/users', listarUsers);
// localhost:3000/api/agendamentos/listarAgendamento
router.get('/listarAgendamento', listarAgendamentos);
router.post('/criarAgendamento', criarAgendamento);
router.get('/listaId/:id', obterAgendamento);
router.put('/:id', atualizarAgendamento);
router.delete('/excluir/:id', deletarAgendamento);

// Rota inválida dentro de /agendamento/*
router.use((req, res) => {
  res.status(404).json({
    erro: 'Subrota de /agendamento não encontrada',
    caminho: req.originalUrl
  });
});


export default router;
