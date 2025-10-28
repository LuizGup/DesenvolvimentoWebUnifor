import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// 1. Importe os componentes e páginas
import MenuNavegacao from './components/MenuNavegacao';
import Dashboard from './pages/Dashboard';
import PaginaLista from './pages/PaginaLista';
import PaginaCadastro from './pages/PaginaCadastro';


function App() {


  return (
    <div>
      {/* 2. O Menu fica fora do <Routes> para aparecer em todas as páginas */}
      <MenuNavegacao />

      {/* 3. O <Container> do Bootstrap centraliza o conteúdo da página */}
      <Container>
        {/* 4. O <Routes> define qual página renderizar com base na URL */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/lista" element={<PaginaLista />} />
          <Route path="/cadastro" element={<PaginaCadastro />} />

          {/* Adicione outras rotas aqui (ex: edição) */}
          {/* <Route path="/editar/:id" element={<PaginaEdicao />} /> */}
        </Routes>
      </Container>
    </div>
  )
}

export default App
