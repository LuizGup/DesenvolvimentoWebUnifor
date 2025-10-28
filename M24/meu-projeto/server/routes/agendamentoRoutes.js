// server/routes/agendamentoRoutes.js

import express from 'express';
import {
  listarAgendamentos,
  obterAgendamento,
  criarAgendamento,
  atualizarAgendamento,
  deletarAgendamento,
  listarQuery
} from '../controllers/agendamentoController.js';

const router = express.Router();

// localhost:3000/api/agendamentos/criarAg
// router.get('/users', listarUsers);

router.get('/listarAg', listarAgendamentos);
router.get('/listaId/:id', obterAgendamento);
router.post('/criarAg', criarAgendamento);
router.put('/:id', atualizarAgendamento);
router.delete('/:id', deletarAgendamento);
router.get('/listaquery', listarQuery);

// Rota inválida dentro de /agendamento/*
router.use((req, res) => {
  res.status(404).json({
    erro: 'Subrota de /agendamento não encontrada',
    caminho: req.originalUrl
  });
});


export default router;
