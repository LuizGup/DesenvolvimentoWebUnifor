// server/routes/userRoutes.js

import express from 'express';
import {
  listarUsers,
  obterUser,
  criarUser,
  atualizarUser,
  deletarUser,
  login
} from '../controllers/UserController.js';
 
import {autenticarToken} from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login', login);
router.get('/listarUser', autenticarToken,  listarUsers);
router.get('/listaId/:id', obterUser);
router.post('/criarUser', autenticarToken, criarUser);
router.put('/:id', atualizarUser);
router.delete('/:id', deletarUser);

// Rota inválida dentro de /user/*
router.use((req, res) => {
  res.status(404).json({
    erro: 'Subrota de /user não encontrada',
    caminho: req.originalUrl
  });
});


export default router;
