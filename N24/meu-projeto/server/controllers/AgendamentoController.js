// server/controllers/AgendamentoController.js
import Agendamento from '../models/Agendamento.js';

// const agendamentos = [
//   { id: 1, data: '2023-09-10', hora: '14:00', status: 'ativo', usuarioId: 10 },
//   { id: 2, data: '2023-09-11', hora: '09:00', status: 'concluido', usuarioId: 11 },
//   { id: 3, data: '2023-09-12', hora: '16:30', status: 'ativo', usuarioId: 12 },
// ];

export const listarAgendamentos = async (req, res) => {
  const agendamentos = await Agendamento.find();
  res.json(agendamentos);
  
};

export const criarAgendamento = async (req, res) => {
  const { data, hora, status, usuarioId, nome } = req.body;

  console.log(req.body);
  const novo = new Agendamento({ data, hora, status, usuarioId , nome });
  await novo.save();
  res.status(201).json({novo, "status":"criado com sucesso!"});
  // // "data" = "12-12-12",
  // // "hora" = "12-12",
  // // "status" = "concluido",
  // // "usuarioId  " = "1012"
  
};

export const obterAgendamento = async (req, res) => {
  // const ag = await Agendamento.findById(req.params.id);
  // if (!ag) return res.status(404).json({ erro: 'Agendamento não encontrado' });
  // res.json(ag);
  console.log(req.params.id);
};

export const atualizarAgendamento = async (req, res) => {
  const { nome, data, horario } = req.body;
  const ag = await Agendamento.findByIdAndUpdate(req.params.id, { nome, data, horario }, { new: true });
  res.json(ag);
};

export const deletarAgendamento = async (req, res) => {
  await Agendamento.findByIdAndDelete(req.params.id);
  res.status(204).json({status:"Excluíndo com sucesso!"})
};