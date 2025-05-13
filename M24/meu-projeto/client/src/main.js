// Importa CSS e JS do Bootstrap diretamente da node_modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; 



// Exemplo de uso do DOM
const root = document.getElementById('app');
root.innerHTML = `
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="card shadow p-4" style="width: 100%; max-width: 400px;">
      <h3 class="text-center mb-4">Login</h3>
    
      <form id="loginForm">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Senha</label>
          <input type="password" class="form-control" id="password" required />
        </div>

        <div class="d-grid">
          <button type="submit" class="btn btn-primary">Entrar</button>
        </div>
      </form>
      <div class="text-center mt-3">
        <button class="btn btn-link" onclick="forgotPassword()">Esqueci minha senha</button>
      </div>
    </div>
  </div>
`;

document.addEventListener("DOMContentLoaded", ()=> {



const linkForm = document.getElementById('loginForm');

linkForm.addEventListener('submit', fazerLogin);

const API_BASE = "http://localhost:3000"; // Ajuste se necessário

async function fazerLogin(e){
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;
  if (!email || !senha) {
    return alert('Preencha todos os campos!');
  }
  try{
    const resp = await fetch(`${API_BASE}/api/users/login/`, {
      method: "POST",
      body: JSON.stringify({email, senha}),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    if (!resp.ok) {
      console.log(resp)
      // throw new Error(`Erro ao fazer login: ${resp.status}`);
      alert("Usuario/Senha Inválidos");
      // document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      return;
    }
    const resp_req = await resp.json();
    console.log(resp_req)
    if (resp_req){
      localStorage.setItem("token", resp_req.token);
      window.location.href = "/dashboard";
    }
  }
  catch(err){
    // console.log(err)
    // console.log(`Error: ${err}`)
    // document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    return;

  }
}

});
