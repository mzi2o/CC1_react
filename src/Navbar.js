import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


export default function Navbar({ toggleDarkMode, isDarkMode }) {
    return (
        <nav className={`navbar navbar-expand-lg nav-top ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <Link className="navbar-brand p-3" to="/">Home</Link>
            <button className="navbar-toggler btn btn-info text-white mx-2" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/calculator">CALCULATOR</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/slider">SLIDER</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/TODO">TO DO LIST</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Pag">PAGINATION</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/lang">MULTILANGUAGE</Link>
                    </li>
                    <div className="toggle-mode-btn">
                        <button onClick={toggleDarkMode}>
                            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </div>
                </ul>
            </div>
        </nav>
    );
}
