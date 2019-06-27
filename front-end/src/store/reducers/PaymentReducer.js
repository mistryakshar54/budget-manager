import {initialState} from './DefaultState';


const PaymentReducer  = ( state = initialState.paymentData , action ) => {
    switch(action.type){
        case 'ADD_PAYMENT_METHOD' : {
            let paymentDataObj = Object.assign({} , state);
            
            return{
                ...state,
                paymentModeArr : paymentDataObj.paymentModeArr.concat(action.payload)
            }
           
        }
        case 'EDIT_PAYMENT_METHOD' : {

            let paymentDataArr = Object.assign([] , state.paymentModeArr);
            
                paymentDataArr[action.payloadIndex] = action.payload;
                return{
                    ...state,
                    paymentModeArr : paymentDataArr
                }
           
        }
        case 'DELETE_PAYMENT_METHOD' : {

            let paymentData = Object.assign([] , state);
            let matchIndex = -1;
            paymentData.paymentModeArr.forEach( (item , index) => {
                if(item.id === action.payload.id)
                {
                    matchIndex = index;
                }
            });
            if(matchIndex > -1)
            {
                paymentData.paymentModeArr.splice(matchIndex , 1);
                return{
                    ...state,
                    paymentModeArr : paymentData.paymentModeArr
                }
            }
            else
            {
                return{
                   ...state
                }
            }
        }
        case 'FETCH_PAYMENT_METHOD' : {

            return {
                ...state
            }
        }

        case 'ERROR_PROCESSING_PAYMENT_METHOD' : {

            return {
                ...state,
                selectedPaymentDetail : {}
            }
        }

        case 'FETCH_PAYMENT_MODE_DETAIL':{
            debugger
            return{
                ...state,
                selectedPaymentDetail : action.payload
            }
        }
        
        case 'LOAD_PAYMENT_DETAIL' : {
            let matchIndex = -1;
            state.paymentModeArr.forEach( (item , index) => {
                if(item.id === action.payload.paymentModeId)
                {
                    matchIndex = index;
                }
            });
            if(matchIndex > -1)
            {
                state.paymentModeArr.splice(matchIndex , 1);
                return{
                    ...state,
                    selectedPaymentDetail : state.paymentModeArr[matchIndex]
                }
            }
            else
            {
                return{
                   ...state,
                   selectedPaymentDetail : {}
                }
            }
        }
        case 'CLEAR_SELECTED_PAYMENT_DETAIL' : {
            return{
                ...state,
                selectedPaymentDetail : {}
            }
        }

        default : {
            return {
                ...state
            }
        }
    }
};

export default PaymentReducer;