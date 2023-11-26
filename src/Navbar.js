import React, { Switch, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import './Slider.css';
import './TODO.css';
import './Pag.css';

import './sal.css';
import ReactSwitch from 'react-switch';
import {contextTheme} from "./SwitchMode/context/Themecontext";


export default function Navbar() {
    const {Theme, Togglebtn} = useContext(contextTheme)
    return (
        <BootstrapNavbar className={'nav-top '} expand="lg">
            <Link className="navbar-brand p-3" to="/" id='a'>Home</Link>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/calculator">CALCULATOR</Nav.Link>
                    <Nav.Link as={Link} to="/slider">SLIDER</Nav.Link>
                    <Nav.Link as={Link} to="/TODO">TO DO LIST</Nav.Link>
                    <Nav.Link as={Link} to="/Pag">PAGINATION</Nav.Link>
                    <Nav.Link as={Link} to="/lang">MULTILANGUAGE</Nav.Link>
                </Nav>
                <div className="switch">
                    {/* <label> {Theme === 'light' ? 'light Mode': 'Dark Mode'}</label> */}
                    <ReactSwitch onChange={Togglebtn} checked={Theme === "dark"}/>
                </div>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    );
}
