// 3. server/config/database.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
    console.log('Conectando ao MongoDB...');
  try {
    console.log('Conectado ao MongoDB');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado ao MongoDB');
  } catch (err) {
    console.error('Erro ao conectar no MongoDB:', err);
  }
};
