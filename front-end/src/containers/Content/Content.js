import React, { Component } from 'react';
import './Content.scss';
import PaymentContainer from '../Pages/PaymentMode/PaymentContainer';
import PaymentCategoryContainer from '../Pages/PaymentCategory/PaymentCategoryContainer';

import { Route, Link,NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from "react-router-bootstrap";
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown , faChevronUp } from '@fortawesome/free-solid-svg-icons';
class AppContent extends Component{
    state = {
      expenseCollapseFlag : false
    }
    toggleCollapseHandler = ( keyToSet ) => {
      
      this.setState( {
        [keyToSet] : !this.state.expenseCollapseFlag
      }  )
    }
    render(){
        return(
            <div className="container-fluid main-content">
                <div className="side-nav">
                <Nav className="mr-auto">
                <LinkContainer to="/payment-category/view">
                    <Nav.Link >Payment Categories</Nav.Link>
                  </LinkContainer >
                <LinkContainer to="/payment-mode/view">
                    <Nav.Link >Payment Modes</Nav.Link>
                  </LinkContainer >
                <div className="collapse-nav-items" >
                    <Nav.Link  onClick={ () => this.toggleCollapseHandler('expenseCollapseFlag')} >
                      <label className="item-label">  
                        Income/Expense
                        <FontAwesomeIcon className="icon-margin bm-icon" icon={faChevronDown}> </FontAwesomeIcon>
                      </label>
                      </Nav.Link>
                      <Collapse className="collapse-links" in={this.state.expenseCollapseFlag}>
                          <div id="example-collapse-text">
                          <LinkContainer to="/payment-category/view">
                            <Nav.Link >
                              Manage Expense
                            </Nav.Link>
                          </LinkContainer >
                          <LinkContainer to="/payment-category/view">
                            <Nav.Link >
                              Manage Income
                            </Nav.Link>
                          </LinkContainer >
                        </div>
                      </Collapse>
                  </div >


                {/* <NavDropdown title="Manage Income/Expense" id="collasible-nav-dropdown">
                  <LinkContainer to="/payment-mode1">
                      <NavDropdown.Item >Income</NavDropdown.Item>
                  </LinkContainer >
                  <LinkContainer to="/payment-mode2">
                      <NavDropdown.Item >Expense action</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown> */}
              </Nav>
                </div>
                <div className="routing-content"> 
                  <Card className="col-lg-11 col-xs-12 col-sm-12">
                    <Card.Body>
                        <Route path="/payment-mode" component={PaymentContainer} />
                        <Route path="/payment-category" component={PaymentCategoryContainer} />
                    </Card.Body>
                  </Card>
                </div>
            </div>
        );
    }

}

export default AppContent;
