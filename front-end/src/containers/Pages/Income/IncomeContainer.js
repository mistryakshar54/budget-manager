import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';
import { ViewIncome } from "../../../components/Income/ViewIncome/ViewIncome";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import {Route} from 'react-router-dom';
class IncomeContainer extends Component{

    render(){
        let actionButton = null;
        if(this.props.location.pathname.indexOf('view') > -1)
        {
        actionButton = <div>
                            <NavLink className="btn btn-primary" to={`add`}>Add Income</NavLink>
                           </div>
        }
        return(
            <div>
                    <div className="d-flex d-flex justify-content-between" style={ {'margin':'1% 0%'} }>
                        <div className="content-header card-title h5 ">
                            <label>Income - by</label> 
                            {/* <DropdownButton size="sm" id="dropdown-item-button" title="Dropdown button">
                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                            </DropdownButton> */}
                        </div>
                        <div>
                            {actionButton}
                        </div>
                    </div>
                    <Route path={`${this.props.match.path}/view`} exact component={ViewIncome} />
                    {/* <Route path={`${this.props.match.path}/edit/:paymentModeId`} exact component={EditPaymentMeth} />
                    <Route path={`${this.props.match.path}/add`} exact component={AddNewPayment} /> */}
                
            </div>
        );
    }

}

export default IncomeContainer;