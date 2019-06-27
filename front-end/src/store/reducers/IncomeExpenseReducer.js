import {initialState} from './DefaultState';


const IncomeExpenseReducer  = ( state = initialState , action ) => {
return {
        ...state
    }
};

export default IncomeExpenseReducer;