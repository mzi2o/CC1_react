import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function Navbar() {
    return (
        <div className="nav-top">
            <Link to="/">ACCUEIL</Link>
            <Link to="/calculator">CALCULATOR</Link>
            <Link to="/slider">SLIDER</Link>
            <Link to="/TODO">TO DO LIST</Link>
            <Link to="/Pag">PAGINATION</Link>
        </div>
    );
}
