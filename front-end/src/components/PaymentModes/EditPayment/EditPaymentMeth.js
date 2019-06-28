import React, { useState , useEffect } from 'react';
import {connect} from 'react-redux';
import * as PaymentActions from '../../../store/actions/PaymentActionCreators';
import EditPaymentFrom from './EditPaymentForm';
import Spinner from 'react-bootstrap/Spinner'

let EditPaymentMeth = (props) => {
    useEffect( () => {
        
        let idToFetch = props.match.params.paymentModeId;
        if(props.match.params.paymentModeId)
        {
            props.onLoadDataHandler(idToFetch);
        }
    },[] );


    const onFormSubmitHandler = ( formValues ) => {
        props.onSavePaymentModeHandler(formValues);
        props.history.push('../view');

    }

    if(props.requestState)
    {
        if(props.requestState.apiInProcess === true)
        {
            return(<Spinner animation="grow" />);
        }
        else
        {
            if( props.requestState.status === 200 && props.initialValues.id === parseInt(props.match.params.paymentModeId) )
            {
               return(
                   <div>
                       <div className="h5">Edit Payment Mode</div>
                       <EditPaymentFrom onSubmit={onFormSubmitHandler} initialValues={props.initialValues} />
                   </div> 
                    
               );
            }
            else
            {
                return(<Spinner animation="grow" />);
                // return(<h1>No data fetched!!</h1>);
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