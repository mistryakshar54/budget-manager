import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './Header.scss';
import {NavLink} from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import GoogleAuth from '../../components/Authorization/Google-auth/Google-auth';


class AppHeader extends Component{
    render(){


        return(
            <Navbar collapseOnSelect expand="lg"   >
              <Navbar.Brand href="#home">Budget Manager</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Toggle />
              <Navbar.Collapse id="responsive-navbar-nav">
              
              {/* <GoogleAuth /> */}
                
                
              <Nav className="mr-auto">

                  {/* <LinkContainer to="/payment-cat">
                      <Nav.Link >Payment Categories</Nav.Link>
                    </LinkContainer > */}
                </Nav>
                <Nav >
                <GoogleAuth />
                  {/* <LinkContainer>
                      <GoogleAuth />
                  </LinkContainer >
                  <NavDropdown title="Manage Income/Expense" id="collasible-nav-dropdown">
                    <LinkContainer to="/payment-mode1">
                        <NavDropdown.Item >Income</NavDropdown.Item>
                    </LinkContainer >
                    <LinkContainer to="/payment-mode2">
                        <NavDropdown.Item >Expense action</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown> */}
                </Nav> 
              </Navbar.Collapse>
          </Navbar>

        );
    }
}

export default AppHeader;