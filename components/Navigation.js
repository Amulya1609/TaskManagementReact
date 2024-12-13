import React from "react";
import {NavLink} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';

export default function navigation(){
    
    return(
        <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
        <NavLink className="d-inline p-2 bg-dark text-white" to="/home">Home</NavLink>
        <NavLink className="d-inline p-2 bg-dark text-white" to="/tasks">Tasks</NavLink>
        <NavLink className="d-inline p-2 bg-dark text-white" to="/login">Login</NavLink>



        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )

}