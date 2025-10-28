// server/models/Agendamento.js
import mongoose from 'mongoose';

const agendamentoSchema = new mongoose.Schema({
  data: {
    type: String, 
    required:true},
  hora:{ 
    type: String, 
    required:true},
  usuarioId: {
    type: String, 
    required:true, 
    unique:true
  },
  status: {
    type:String, 
    required:true
  }
});

export default mongoose.model('Agendamento', agendamentoSchema);



// ORM — Object Relational Mapping

// Função:
// Conectar o mundo orientado a objetos (classes e objetos do código) ao mundo 
// relacional (tabelas e colunas do banco SQL).

// ODM — Object Document Mapping

// Função:
// Faz o mesmo que o ORM, mas para bancos de dados baseados em documentos, como o MongoDB.
// Cada classe ou schema representa uma coleção (collection),
// e cada objeto é um documento JSON.




/**
 * 1. Estrutura básica do Schema

const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  idade: {
    type: Number,
    min: 0,
    max: 120
  },
  criadoEm: {
    type: Date,
    default: Date.now
  },
  ativo: {
    type: Boolean,
    default: true
  }
});


---

2. Criando o modelo

const Usuario = mongoose.model('Usuario', usuarioSchema);


---

3. Campos avançados

Subdocumentos (aninhados)

endereco: {
  rua: String,
  cidade: String,
  estado: String,
  numero:Number
}

Array de valores

hobbies: [String]

Enum

genero: {
  type: String,
  enum: ['masculino', 'feminino', 'outro']
}


---

4. Validações personalizadas

idade: {
  type: Number,
  validate: {
    validator: function(v) {
      return v % 2 === 0; // Exemplo: idade deve ser par
    },
    message: props => `${props.value} não é um número par!`
  }
}


---

5. Métodos e Statics

Método de instância

usuarioSchema.methods.saudar = function() {
  console.log(`Olá, meu nome é ${this.nome}`);
};

Static (no modelo, não na instância)

usuarioSchema.statics.encontrarPorNome = function(nome) {
  return this.find({ nome: new RegExp(nome, 'i') });
};


---

 * 
 */