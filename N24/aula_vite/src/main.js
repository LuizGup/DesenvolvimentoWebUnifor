import './style.css'


document.querySelector('#app').innerHTML = /*html*/`
  <div>
    <h1>Acessando API</h1>
    
    <div class="card">
      <input type="text" placeholder="Digite uma Entrada"> 
      <button>Buscar</button>
    </div>
    <div id="listaDeLivro">
    
    </div>
    
  </div>
`

setupCounter(document.querySelector('#counter'))
