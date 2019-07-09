import {initialState} from './DefaultState';


const IncomeReducer  = ( state = initialState.incomeData , action ) => {

    switch( action.type )
    {
        case 'ADD_INCOME' : {
            const incArr = Object.assign( [] , state.incomeArr );
            return { 
                ...state ,
                incomeArr : incArr.concat( action.payload )
            }
        }
        case 'EDIT_INCOME' : {
            return { ...state}
        }
        case 'DELETE_INCOME' : {
            const incArr = Object.assign( [] , state.incomeArr );
            incArr.splice( action.payload , 1);
            return { ...state,
                incomeArr :incArr
            }
        }
        case 'SAVE_INCOME' : {
            const incArr = Object.assign( [] , state.incomeArr );
            incArr[action.itemIndex ] = action.payload;
            return { 
                ...state,
                incomeArr:incArr
            }
        }
        case 'GET_ALL_INCOME' : {
            return { ...state}
        }
        case 'GET_INCOME_DETAIL' : {
            
            return { 
                ...state,
                selectedCategoryDetail : action.payload
            }
        }
        case 'CLEAR_SELECTED_INCOME' : {
            return { ...state}
        }

        default : {
            return { ...state}
        }
    }
};

export default IncomeReducer;