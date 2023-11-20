import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

export default function Navbar({ toggleDarkMode, isDarkMode }) {
    return (
        <BootstrapNavbar className={`nav-top ${isDarkMode ? 'dark-mode' : 'light-mode'}`} expand="lg">
            <Link className="navbar-brand p-3" to="/">Home</Link>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/calculator">CALCULATOR</Nav.Link>
                    <Nav.Link as={Link} to="/slider">SLIDER</Nav.Link>
                    <Nav.Link as={Link} to="/TODO">TO DO LIST</Nav.Link>
                    <Nav.Link as={Link} to="/Pag">PAGINATION</Nav.Link>
                    <Nav.Link as={Link} to="/lang">MULTILANGUAGE</Nav.Link>
                </Nav>
                <div className="toggle-mode-btn">
                    <button onClick={toggleDarkMode}>
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    );
}
