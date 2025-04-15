// server/routes/agendamentoRoutes.js

import express from 'express';
import {
  listarAgendamentos,
  obterAgendamento,
  criarAgendamento,
  atualizarAgendamento,
  deletarAgendamento
} from '../controllers/agendamentoController.js';

import {listarUsers} from '../controllers/UsersController.js';
 
const router = express.Router();




// router.get('/users', listarUsers);

router.get('/listaag', listarAgendamentos);
router.get('/listaId/:id', obterAgendamento);
router.post('/createAg', criarAgendamento);
router.put('/:id', atualizarAgendamento);
router.delete('/:id', deletarAgendamento);

// Rota inválida dentro de /agendamento/*
router.use((req, res) => {
  res.status(404).json({
    erro: 'Subrota de /agendamento não encontrada',
    caminho: req.originalUrl
  });
});


export default router;
