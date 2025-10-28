// server/controllers/AgendamentoController.js
import Usuario from '../models/Usuario.js';

// const agendamentos = [
//   { id: 1, data: '2023-11-10', hora: '14:00', status: 'ativo', usuarioId: 10 },
//   { id: 2, data: '2023-11-12', hora: '09:00', status: 'concluido', usuarioId: 11 },
//   { id: 3, data: '2023-11-15', hora: '16:30', status: 'ativo', usuarioId: 12 },
//   { id: 4, data: '2023-11-20', hora: '11:50', status: 'ativo', usuarioId: 13 },
// ];

export const listarUsuario = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};

export const criarUsuario = async (req, res) => {
  console.log(req.body )
  const { nome, email } = req.body;
  const novo = new Usuario({nome, email});
  try {

  await novo.save();
  res.status(201).send(`Dados Salvos Usuario com sucesso => Nome: ${nome}, Email:${email}`);
  } catch (error) {
    res.status(400).send('Erro ao salvar o usuario: ' + error.message);
  }
};

