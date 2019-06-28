import React, { Component } from 'react';
import AddNewPayment from '../../../components/PaymentModes/AddPayment/AddPaymentMeth';
import ViewPaymentMeth from '../../../components/PaymentModes/ViewPayment/ViewPaymentMeth';
import EditPaymentMeth from '../../../components/PaymentModes/EditPayment/EditPaymentMeth';
import {NavLink} from 'react-router-dom';


import {Route} from 'react-router-dom';
class PaymentContainer extends Component{

    render(){
    //     let showBtn = null;
    //    console.log("PRops => " , this.props);
    //    console.log( this.props.location.pathname.indexOf('add')  );
        return(
            <div>
                    <div className="content-header card-title h5">
                        Payment Modes
                    </div>
                    {/* <hr/> */}
                    <Route path={`${this.props.match.path}/view`} exact component={ViewPaymentMeth} />
                    <Route path={`${this.props.match.path}/edit/:paymentModeId`} exact component={EditPaymentMeth} />
                    <Route path={`${this.props.match.path}/add`} exact component={AddNewPayment} />
                 {/* <div className="col-12">
                    <div>
                    <h3 className="content-header">
                        Payment Mode
                    </h3>        
                    </div>
                        
                    <div>
                        <NavLink className="btn btn-primary" to={`add`}>Add</NavLink>
                    </div>
                </div> */}
                {/* <h3 className="content-header">
                    Payment Mode
                    
                </h3> */}
                
            </div>
        );
    }

}

export default PaymentContainer;