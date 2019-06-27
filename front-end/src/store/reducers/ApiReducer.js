import {initialState} from './DefaultState';


const ApiReducer  = ( state = initialState.apiRequest , action ) => {
    switch(action.type){
        case 'SUCCESS_PAYMENT_METHOD' : {
            let apiReqStatus = Object.assign({} , state);
            apiReqStatus.message="Success";
            apiReqStatus.status=200;
            apiReqStatus.apiInProcess=false;
            return {
                 ...apiReqStatus
            }
        }
        case 'ERROR_PAYMENT_METHOD' : {
            let apiReqStatus = Object.assign({} , state);
            apiReqStatus.message="Error" + action.payload.error;
            apiReqStatus.status=action.payload.status;
            apiReqStatus.apiInProcess=false;
            return {
                ...apiReqStatus
            }
        }
        case 'IN_PROCESS_PAYMENT_METHOD' : {

            let apiReqStatus = Object.assign({} , state);
            apiReqStatus.message="In Process";
            apiReqStatus.status=0;
            apiReqStatus.apiInProcess=true;
            return {
                ...apiReqStatus
            }
        }
        default : {
            return {
                ...state
            }
        }
    }
};

export default ApiReducer;