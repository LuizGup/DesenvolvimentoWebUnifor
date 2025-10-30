import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  anoPublicacao: { type: Number, required: true },
  genero: { type: String, required: true }
});

export default mongoose.model('Livro', livroSchema);
