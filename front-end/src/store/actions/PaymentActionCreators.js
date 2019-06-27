
import store from '../store';

export const fetchPaymentData = ( paymentData ) => {
    return {
        type : 'FETCH_PAYMENT_METHOD',
        payload : paymentData
    }
}

export const successPaymentAction = () => {
    return {
        type : 'SUCCESS_PAYMENT_METHOD'
    }
}

export const errorPaymentAction = ( errorPayload) => {
    return {
        type : 'ERROR_PAYMENT_METHOD',
        payload : errorPayload
    }
}

export const inRequestPaymentAction = () => {
    return {
        type : 'IN_PROCESS_PAYMENT_METHOD'
    }
}

export const addPaymentMethod = ( paymentMethod ) => {
    return{
        type : 'ADD_PAYMENT_METHOD',
        payload : paymentMethod 
    }
}

export const requestNewPaymentMethod = ( paymentMethod ) => {
    return dispatch => {
        dispatch( inRequestPaymentAction() );
        dispatch( addPaymentMethod( paymentMethod ) );
        dispatch( successPaymentAction() );
    }

}

export const fetchPaymentModeDetail = (paymentMode) => {
    return {
        type : 'FETCH_PAYMENT_MODE_DETAIL',
        payload : paymentMode
    }
}
export const errorProcessingPayment = () => {
    return {
        type : 'ERROR_PROCESSING_PAYMENT_METHOD'
    }
}

export const fetchPaymentModeDetailAC = ( paymentModeId ) => {
    return (dispatch,getState) => {
        debugger;
        let matchIndex = -1;
        let paymentModeState = Object.assign({} , getState().PaymentReducer);
        paymentModeState.paymentModeArr.forEach( (item , index) => {
            if(item.id === parseInt(paymentModeId))
            {
                matchIndex = index;
            }
        });
        if(matchIndex > -1)
        {
            dispatch(fetchPaymentModeDetail( paymentModeState.paymentModeArr[matchIndex] ));
            dispatch( successPaymentAction() );
        }
        else
        {
            dispatch( errorProcessingPayment() );
            dispatch( errorPaymentAction( {
                message : 'No such record!',
                status : 500,
                apiInProcess : false
            }));
        }
     
    }
}

export const loadPaymentData = ( paymentModeId ) => {
    return dispatch => {
            dispatch( inRequestPaymentAction() );
            dispatch( fetchPaymentModeDetailAC( paymentModeId ) );
    }
}