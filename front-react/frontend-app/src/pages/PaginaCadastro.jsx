import React, { useState, useRef, useEffect } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createUsuario } from '../services/api'; // Importa nossa função da API

function PaginaCadastro() {
    // HOOK: useState para gerenciar os dados do formulário
    const [formData, setFormData] = useState({ nome: '', email: '' });
    const [mensagem, setMensagem] = useState(null); // Para feedback

    // HOOK: useNavigate para redirecionar após o cadastro
    const navigate = useNavigate();

    // HOOK: useRef para focar no primeiro campo
    const nomeInputRef = useRef(null);

    // HOOK: useEffect para focar no campo "nome" quando a página carregar
    useEffect(() => {
        nomeInputRef.current.focus();
    }, []); // O array vazio [] faz isso rodar só uma vez

    // Função para atualizar o estado quando o usuário digita
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault(); // Impede o recarregamento da página
        try {
            // Chama a função da API para criar o usuário
            const response = await createUsuario(formData);
            console.log('Usuário criado:', response.data);

            // Limpa o formulário e dá feedback
            setFormData({ nome: '', email: '' });
            setMensagem({ tipo: 'success', texto: 'Usuário cadastrado com sucesso!' });

            // Redireciona para a página de lista após 2 segundos
            setTimeout(() => navigate('/lista'), 2000);

        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            setMensagem({ tipo: 'danger', texto: 'Erro ao cadastrar usuário.' });
        }
    };

    return (
        <Container>
            <h2>Cadastro de Novo Usuário</h2>
            {mensagem && <Alert variant={mensagem.tipo}>{mensagem.texto}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        ref={nomeInputRef} // Liga a ref ao input
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </Container>
    );
}

export default PaginaCadastro;
