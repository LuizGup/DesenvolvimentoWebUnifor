import express from 'express'

import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json()); // Middleware
const PORT = 4000;

//ROTAS
app.get("/", (req, res)=> {
    res.send("Olá, Mundo. API Online");
})

let users = [];

app.get("/usuarios", (req, res)=> {
    res.json(users)
})


app.post("/usuarios", (req, res)=> {
    console.log(req.body)
    let novoUser = req.body
    novoUser.id = users.length+1;
    users.push(novoUser)
    res.status(201).json({msg:"cadastro realizado com sucesso.", novoUser})

})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando no endereço: http://localhost:${PORT}`)
})




