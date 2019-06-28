import React, { Component } from 'react';
import './Content.scss';
import PaymentContainer from '../Pages/PaymentMode/PaymentContainer';
import { Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from "react-router-bootstrap";
import Card from 'react-bootstrap/Card';

class AppContent extends Component{

    render(){
        return(
            <div className="container-fluid main-content">
                <div className="side-nav">
                <Nav className="mr-auto">
                <LinkContainer to="/payment-cat">
                    <Nav.Link >Payment Categories</Nav.Link>
                  </LinkContainer >
                <LinkContainer to="/payment-mode/view">
                    <Nav.Link >Payment Modes</Nav.Link>
                  </LinkContainer >
                <NavDropdown title="Manage Income/Expense" id="collasible-nav-dropdown">
                  <LinkContainer to="/payment-mode1">
                      <NavDropdown.Item >Income</NavDropdown.Item>
                  </LinkContainer >
                  <LinkContainer to="/payment-mode2">
                      <NavDropdown.Item >Expense action</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
                </div>
                <div className="routing-content"> 
                  <Card className="col-lg-11 col-xs-12 col-sm-12">
                    <Card.Body>
                        <Route path="/payment-mode" component={PaymentContainer} />
                    </Card.Body>
                  </Card>
                </div>
            </div>
        );
    }

}

export default AppContent;
