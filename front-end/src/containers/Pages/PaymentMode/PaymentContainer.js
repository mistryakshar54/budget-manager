import React, { Component } from 'react';
import AddNewPayment from '../../../components/PaymentModes/AddPayment/AddPaymentMeth';
import ViewPaymentMeth from '../../../components/PaymentModes/ViewPayment/ViewPaymentMeth';
import EditPaymentMeth from '../../../components/PaymentModes/EditPayment/EditPaymentMeth';
import {NavLink} from 'react-router-dom';


import {Route} from 'react-router-dom';
class PaymentContainer extends Component{

    render(){
        let actionButton = null;
        if(this.props.location.pathname.indexOf('view') > -1)
        {
        actionButton = <div>
                            <NavLink className="btn btn-primary" to={`add`}>Add Payment Mode</NavLink>
                           </div>
        }
        return(
            <div>
                    <div className="d-flex d-flex justify-content-between" style={ {'margin':'1% 0%'} }>
                        <div className="content-header card-title h5 ">
                            Payment Modes
                        </div>
                        <div>
                            {actionButton}
                        </div>
                    </div>
                    <Route path={`${this.props.match.path}/view`} exact component={ViewPaymentMeth} />
                    <Route path={`${this.props.match.path}/edit/:paymentModeId`} exact component={EditPaymentMeth} />
                    <Route path={`${this.props.match.path}/add`} exact component={AddNewPayment} />
                
            </div>
        );
    }

}

export default PaymentContainer;