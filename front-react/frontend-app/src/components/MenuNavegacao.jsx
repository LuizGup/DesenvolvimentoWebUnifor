import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MenuNavegacao() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/">App React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Usamos as={Link} e to="..." para integrar com o React Router */}
                        <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/lista">Lista</Nav.Link>
                        <Nav.Link as={Link} to="/cadastro">Cadastro</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MenuNavegacao;

