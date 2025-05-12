// user.js
// Importa CSS e JS do Bootstrap diretamente da node_modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; 


export function initUser() {
  const main = document.getElementById('conteudoPrincipal');
  main.innerHTML = `
    <h2>Gerenciar Usuários</h2>
    <form id="formUser" >
      <input type="hidden" id="userId" />
      <div class="row g-2">
          <div class="col-md-3">
          <label for="nameUser" class="form-label">Nome</label>
          <input type="text" id="nameUser" class="form-control" required />
          </div>
          <div class="col-md-3">
          <label for="emailUser" class="form-label">Email</label>
          <input type="email" id="emailUser" class="form-control" required />
          </div>
          <div class="col-md-3">
          <label for="passwordUser" class="form-label">Senha</label>
          <input type="password" id="passwordUser" class="form-control" required />
          </div>
      </div>
      <div class="mt-3">
          <button type="submit" class="btn btn-primary" id="btnSalvar">Salvar</button>
          <button type="button" class="btn btn-secondary" id="btnCancelarEdicaoUser" style="display:none;">Cancelar Edição</button>
      </div>
    </form>
    <hr/>
    <button class="btn btn-success mb-3" id="btnNovoUsuario">Novo Usuário</button>
    <div id="listaUsuarios"></div>
  `;

  // Listeners
  document.getElementById('formUser').addEventListener('submit', salvarUser);
  document.getElementById('btnCancelarEdicaoUser').addEventListener('click', cancelarEdicao);


  listarUsuarios();

  }

  const API_BASE = 'http://localhost:3000'; // Ajuste se necessário
  const token = localStorage.getItem('token'); // ou sessionStorage

async function listarUsuarios() {
  // JSON estático (poderia vir de um arquivo local ou estar definido no próprio código)
  
  try{
    const resp = await fetch(`${API_BASE}/api/users/listarUser`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    if (!resp.ok) {
      throw new Error(`Erro ao listar user: ${resp.status}`);
    }  
    else if (resp.status === 401) {
      // Token expirado ou inválido
      alert('Sessão expirada. Faça login novamente.');
      localStorage.removeItem('token'); // Remove token inválido
      window.location.href = '/index'; // Redireciona para login
    } else {
      const usuarios = await resp.json();  

      // Supondo que exista uma div com id="listaUsuarios" no HTML
      const listaDiv = document.getElementById('listaUsuarios');
      listaDiv.innerHTML = ''; // limpa qualquer conteúdo anterior

      if (usuarios.length != 0){
        usuarios.forEach((user) => {
          const card = document.createElement('div');
          card.classList.add('card', 'mb-2');

          // Exemplo: exibindo dados em formato de card Bootstrap
          card.innerHTML =/*html */ `
            <div class="card-body">
              <h5 class="card-title">Usuário #${user._id}</h5>
              <p class="card-text">
                Nome: <strong>${user.name}</strong><br/>
                E-mail: <strong>${user.email}</strong>
              </p>
              <!-- Se quiser ações, por exemplo: -->
              <button class="btn btn-warning btn-sm" id="btn-editar-user-${user._id}">Editar</button>
              <button class="btn btn-danger btn-sm" id="btn-excluir-user-${user._id}">Excluir</button>
              
            </div>
          `;

          listaDiv.appendChild(card);

          // Ações
          card.querySelector(`#btn-editar-user-${user._id}`).addEventListener('click', () => {
            carregarParaEdicao(user._id);
          });
          card.querySelector(`#btn-excluir-user-${user._id}`).addEventListener('click', () => {
            excluirAgendamento(user._id);
          });
        });
    }
    else {
      listaDiv.innerHTML = `<h2>Lista Vazia!</h2>`
    }
  }

} catch (error) {
  console.error('Erro ao listar user:', error);
}
}

  async function salvarUser(event) {
    event.preventDefault();
  
    const userId = document.getElementById('userId').value.trim();
    const name = document.getElementById('nameUser').value.trim();
    const email = document.getElementById('emailUser').value.trim();
    const senha = document.getElementById('passwordUser').value.trim();
    const tipo = "Não Definido";
    if (!name || !email || !senha) {
      return alert('Preencha todos os campos!');
    }
    try{
      
      if (userId) {
        // alert("salvar....edição")
      
        const resp = await fetch(`${API_BASE}/api/users/${userId}`, {
          method: "PUT",
          body: JSON.stringify({name, email, tipo, password:senha}),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        if (!resp.ok) {
          throw new Error(`Erro ao editar user: ${resp.status}`);
        }
        
      } else {
        // Novo
        const novo = { name, email, tipo, password:senha};
      
        const resp = await fetch(`${API_BASE}/api/users/criarUser`, {
          method: "POST",
          body: JSON.stringify(novo),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        if (!resp.ok) {
          throw new Error(`Erro ao salvar user: ${resp.status}`);
        }
      }
  
    // Limpa form e atualiza lista
    limparFormulario();
    listarUsuarios();
    
  }
  catch (error) {
      console.error('Erro ao salvar usuário:', error);
    }
  }
  
  async function carregarParaEdicao(id) {

    try{
      
      const resp = await fetch(`${API_BASE}/api/users/listaId/${id}`);
      if (!resp.ok) {
        throw new Error(`Erro ao listar user: ${resp.status}`);
      }
      const user = await resp.json();  
      console.log(user)
    // const ag = user.find(a => a.id === id);
    // if (!ag) return alert('Agendamento não encontrado');
  
    // Preenche form
    document.getElementById('userId').value = user._id;
    document.getElementById('nameUser').value = user.name;
    document.getElementById('emailUser').value = user.email;
    document.getElementById('passwordUser').value = user.password;
    
  
    // Mostra o botão "Cancelar Edição"
    document.getElementById('btnCancelarEdicaoUser').style.display = 'inline-block';
    }
    catch(error){
      console.error('Erro ao ler usuário:', error);
    }
  }
  
  async function excluirAgendamento(id) {
    try{
      const resp = await fetch(`${API_BASE}/api/users/${id}`,{
        method: "DELETE",
      });
      if (!resp.ok) {
        throw new Error(`Erro ao listar user: ${resp.status}`);
      }
      const user = await resp.json();  
      console.log(user)
    
      listarUser();
      limparFormulario();
    }
    catch(error){
      console.log(`Erro: ${error}`)
    }
  }
  
  function cancelarEdicao() {
    limparFormulario();
  }
  
  function limparFormulario() {
    document.getElementById('userId').value = '';
    document.getElementById('nameUser').value = '';
    document.getElementById('emailUser').value = '';
    document.getElementById('passwordUser').value = '';
    
  
    document.getElementById('btnCancelarEdicaoUser').style.display = 'none';
  }
  