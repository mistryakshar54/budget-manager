import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import ViewPaymentCat from '../../../components/PaymentCategories/ViewPaymentCat/ViewPaymentCat';
import EditPaymentCat from '../../../components/PaymentCategories/EditPaymentCat/EditPaymentCat';
import AddPaymentCat from '../../../components/PaymentCategories/AddPaymentCat/AddPaymentCat';

import {Route} from 'react-router-dom';
class PaymentCategoryContainer extends Component{

    render(){
        let actionButton = null;
        if(this.props.location.pathname.indexOf('view') > -1)
        {
        actionButton = <div>
                            <NavLink className="btn btn-primary" to={`add`}>Add Categoey</NavLink>
                        </div>
        }
        return(
            <div>
                    <div className="d-flex d-flex justify-content-between" style={ {'margin':'1% 0%'} }>
                        <div className="content-header card-title h5 ">
                            Payment Categories
                        </div>
                        <div>
                            {actionButton}
                        </div>
                    </div>
                    <Route path={`${this.props.match.path}/view`} exact  component={ViewPaymentCat} />
                    <Route path={`${this.props.match.path}/edit/:categoryId`} exact component={EditPaymentCat}  />
                    <Route path={`${this.props.match.path}/add`} exact component={AddPaymentCat} /> 
            </div>
        );
    }

}

export default PaymentCategoryContainer;