import axios from 'axios';

// ATENÇÃO: Altere a URL base para a URL do seu servidor Node.js
const api = axios.create({
    baseURL: 'http://localhost:3001/api/usuarios' // Ex: 'http://localhost:3001/usuarios'
});

// Funções para interagir com a API
// (Ex: assumindo que sua rota de usuários é '/usuarios')

export const getUsuarios = () => api.get('/list');
export const createUsuario = (data) => api.post('/add', data);
// Adicione outras funções (update, delete) se precisar

export default api;
