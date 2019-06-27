import React, { useState , useEffect } from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import Form from 'react-bootstrap/Form'
import * as PaymentActions from '../../../store/actions/PaymentActionCreators';
import EditPaymentFrom from './EditPaymentForm';

let EditPaymentMeth = (props) => {
    useEffect( () => {
        
        let idToFetch = props.match.params.paymentModeId;
        if(props.match.params.paymentModeId)
        {
            props.onLoadDataHandler(idToFetch);
        }
    },[] );


    const onFormSubmitHandler = ( formValues ) => {
        console.log(formValues);
        props.onSavePaymentModeHandler(formValues);
        console.log(props.history);
        props.history.push('../view');

    }

    if(props.requestState)
    {
        if(props.requestState.apiInProcess === true)
        {
            return(<h1>Loading</h1>);
        }
        else
        {
            debugger;
            if( props.requestState.status === 200 && props.initialValues.id === parseInt(props.match.params.paymentModeId) )
            {
               return( 
                   <EditPaymentFrom onSubmit={onFormSubmitHandler} initialValues={props.initialValues} />
               );
            }
            else
            {
                return(<h1>No data fetched!!</h1>);
            }
           
        }
    }

}

const mapStateToProps = ( state) => {
    return {
        initialValues : state.PaymentReducer.selectedPaymentDetail,
        requestState : state.ApiReducer,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return{
        onLoadDataHandler : (idToFetch) => dispatch( PaymentActions.loadPaymentData(idToFetch) ),
        onSavePaymentModeHandler : ( updatedPaymentMode ) => dispatch( PaymentActions.editPaymentModeDetail( updatedPaymentMode ) )
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(EditPaymentMeth);