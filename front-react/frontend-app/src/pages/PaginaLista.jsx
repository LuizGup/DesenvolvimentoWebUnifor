import React, { useState, useEffect } from 'react';
import { Container, Table, Spinner, Alert } from 'react-bootstrap';
import { getUsuarios } from '../services/api'; // Importa nossa função da API

function PaginaLista() {
    // HOOK: useState para guardar a lista de usuários
    const [usuarios, setUsuarios] = useState([]);

    // HOOK: useState para controlar o estado de "carregando"
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // HOOK: useEffect para buscar os dados da API quando o componente montar
    useEffect(() => {
        // Define uma função assíncrona dentro do useEffect
        const fetchUsuarios = async () => {
            try {
                setLoading(true);
                setError(null);
                // Chama a função da API
                const response = await getUsuarios();
                setUsuarios(response.data); // Atualiza o estado com os dados
            } catch (err) {
                console.error("Erro ao buscar usuários:", err);
                setError("Não foi possível carregar a lista de usuários.");
            } finally {
                setLoading(false); // Para de carregar, com sucesso ou erro
            }
        };

        fetchUsuarios(); // Chama a função
    }, []); // O array vazio [] garante que isso rode apenas uma vez

    // --- Renderização condicional ---
    if (loading) {
        return (
            <Container className="text-center mt-5">
                <Spinner animation="border" />
                <p>Carregando...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <Alert variant="danger">{error}</Alert>
            </Container>
        );
    }

    return (
        <Container>
            <h2>Lista de Usuários Cadastrados</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.length > 0 ? (
                        usuarios.map(user => (
                            // Use um ID único do seu banco de dados como 'key'
                            <tr key={user.id || user._id}>
                                <td>{user.id || user._id}</td>
                                <td>{user.nome}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="text-center">Nenhum usuário cadastrado.</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
}

export default PaginaLista;
