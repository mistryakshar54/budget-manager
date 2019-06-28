import React, { Component} from 'react';
import AddPaymentForm from './AddPaymentForm';

import Card from 'react-bootstrap/Card';

import {connect} from 'react-redux';

import * as PaymentActions from '../../../store/actions/PaymentActionCreators';
import ToastComponent from '../../UI/Toast/Toast';


class AddNewPayment extends Component{

    state={
        toggleToast : false
    }

    onFormSubmitHandler = ( formValues ) => {
        console.log(formValues);
        formValues.id=this.props.payments.paymentModeArr.length;
        // new Date().getTime();
        this.setState({ toggleToast:true });
        this.props.onAddPayment( formValues );
        this.props.history.push('view')

    }

    toastToggleHandler = () => {
        this.setState({ toggleToast:false });
    }

    render(){
        return(
            <div>
                    <div className="h5">Add New Payment Mode</div>
                    <AddPaymentForm onSubmit={this.onFormSubmitHandler}/>
                    <ToastComponent  
                        showToast={this.state.toggleToast} 
                        closeToastHandler={this.toastToggleHandler}
                        showMessage="New Payment Mode Added!"
                        />
            </div>
           
        );
    }
}

const mapStateToProps = (state) => {
    return {
        payments : state.PaymentReducer,
        formData : state.form
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPayment : ( paymentMethod ) => { dispatch( PaymentActions.requestNewPaymentMethod( paymentMethod ) ) }
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(AddNewPayment);