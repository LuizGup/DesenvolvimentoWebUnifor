import Livro from "../models/Livro.js";

export const listarLivros = async (req, res) => {
  try {
    const livros = await Livro.find();
    res.status(200).json(livros);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao listar livros" });
  }
};

export const criarLivro = async (req, res) => {
  try {
    const { titulo, autor, anoPublicacao, genero } = req.body;
    const novo = new Livro({ titulo, autor, anoPublicacao, genero });
    await novo.save();
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao criar livro" });
  }
};

export const obterLivro = async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id);
    if (!livro) return res.status(404).json({ erro: "Livro não encontrado" });
    res.status(200).json(livro);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao obter livro" });
  }
};

export const atualizarLivro = async (req, res) => {
  try {
    const { titulo, autor, anoPublicacao, genero } = req.body;
    const livro = await Livro.findByIdAndUpdate(
      req.params.id,
      { titulo, autor, anoPublicacao, genero },
      { new: true }
    );
    res.status(200).json(livro);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao atualizar livro" });
  }
};

export const deletarLivro = async (req, res) => {
  try {
  await Livro.findByIdAndDelete(req.params.id);
  res.status(204).end();
  } catch (error) {
    res.status(500).json({ erro: "Erro ao deletar livro" });
  }
};
