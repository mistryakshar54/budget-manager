import React, { Component } from 'react';
import AddNewPayment from '../../../components/PaymentModes/AddPayment/AddPaymentMeth';
import ViewPaymentMeth from '../../../components/PaymentModes/ViewPayment/ViewPaymentMeth';
import EditPaymentMeth from '../../../components/PaymentModes/EditPayment/EditPaymentMeth';


import {Route} from 'react-router-dom';
class PaymentContainer extends Component{

    render(){
        return(
            <div>
                <h3 className="content-header">Payment Mode</h3>
                <Route path={`${this.props.match.path}/view`} exact component={ViewPaymentMeth} />
                <Route path={`${this.props.match.path}/edit/:paymentModeId`} exact component={EditPaymentMeth} />
                <Route path={`${this.props.match.path}/add`} exact component={AddNewPayment} />
                
            </div>
        );
    }

}

export default PaymentContainer;