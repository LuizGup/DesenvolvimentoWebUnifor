// server/controllers/UserController.js
import { hashSenha, verificarSenha } from  '../utils/bcrypt.js';
import { gerarToken } from '../utils/jwt.js';
import User from '../models/User.js';


export const login = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const usuario = await User.findOne({ email });
    if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });
    
    const senhaValida = await verificarSenha(senha, usuario.password);
    if (!senhaValida) return res.status(401).json({ erro: 'Senha incorreta' });

    const token = gerarToken(usuario);
    res.json({ token, usuario: { name: usuario.name, email: usuario.email } });
  } catch (err) {
    res.status(500).json({ erro: 'Erro no login', err:JSON.stringify(err) });
  }
};
// ###########################

export const listarUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const criarUser = async (req, res) => {
  const { name, email, tipo, password} = req.body;

  const senhaHash = await hashSenha(password); //Aplicação do Bcrypt para criptografar a senha
  
  const novo = new User({ name, email, tipo, password:senhaHash});
  await novo.save();
  res.status(201).json(novo);

};

export const obterUser = async (req, res) => {
  const us = await User.findById(req.params.id);
  if (!us) return res.status(404).json({ erro: 'User não encontrado' });
  res.json(us);
};

export const atualizarUser = async (req, res) => {
  const { name, email, tipo, password} = req.body;
  const senhaHash = await hashSenha(password); //Aplicação do Bcrypt para criptografar a senha
  const us = await User.findByIdAndUpdate(req.params.id, { name, email, tipo, password:senhaHash}, { new: true });
  res.json(us);
};

export const deletarUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
 
