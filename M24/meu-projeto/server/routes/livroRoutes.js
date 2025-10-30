import express from 'express';

import {
    listarLivros,
    criarLivro,
    obterLivro,
    atualizarLivro,
    deletarLivro
} from '../controllers/LivroController.js';

const router = express.Router();

router.get('/', listarLivros);
router.post('/', criarLivro);
router.get('/:id', obterLivro);
router.put('/:id', atualizarLivro);
router.delete('/:id', deletarLivro);

export default router;

// exemplo de Criarlivro em json:
// {
//     "titulo": "O Senhor dos Anéis",
//     "autor": "J.R.R. Tolkien",
//     "anoPublicacao": 1954,
//     "genero": "Fantasia"
//   }