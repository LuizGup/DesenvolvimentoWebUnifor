import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const gerarToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  });
};

