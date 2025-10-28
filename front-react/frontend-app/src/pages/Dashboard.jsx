import React from 'react';
import { Container, Alert } from 'react-bootstrap';

function Dashboard() {
    return (
        <Container>
            <Alert variant="success">
                <Alert.Heading>Bem-vindo ao Dashboard!</Alert.Heading>
                <p>
                    Este é seu projeto React com Bootstrap conectado a um backend Node.js.
                    Use o menu acima para navegar.
                </p>
            </Alert>
        </Container>
    );
}

export default Dashboard;
