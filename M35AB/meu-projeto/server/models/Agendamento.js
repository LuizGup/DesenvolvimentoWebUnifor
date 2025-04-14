// server/models/Agendamento.js
import mongoose from 'mongoose';

const agendamentoSchema = new mongoose.Schema({
  nome: String,
  data: String,
  horario: String,
});

export default mongoose.model('Agendamento', agendamentoSchema);
