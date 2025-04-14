// server/controllers/AgendamentoController.js
import Agendamento from '../models/Agendamento.js';

export const listarAgendamentos = async (req, res) => {
  // const agendamentos = await Agendamento.find();
  // res.json(agendamentos);
  res.send([{nome:"teste1", tipo:2}, {nome:"teste2", tipo:3}])

  
};

export const criarAgendamento = async (req, res) => {
  const { nome, data, horario } = req.body;
  const novo = new Agendamento({ nome, data, horario });
  await novo.save();
  res.status(201).json(novo);
};

export const obterAgendamento = async (req, res) => {
  const ag = await Agendamento.findById(req.params.id);
  if (!ag) return res.status(404).json({ erro: 'Agendamento não encontrado' });
  res.json(ag);
};

export const atualizarAgendamento = async (req, res) => {
  const { nome, data, horario } = req.body;
  const ag = await Agendamento.findByIdAndUpdate(req.params.id, { nome, data, horario }, { new: true });
  res.json(ag);
};

export const deletarAgendamento = async (req, res) => {
  await Agendamento.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

