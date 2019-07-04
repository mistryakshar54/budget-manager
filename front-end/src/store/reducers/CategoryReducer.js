import {initialState} from './DefaultState';

const CategoryReducer  = ( state = initialState.categoryData , action ) => {

    switch(action.type){
        case 'ADD_PAYMENT_CATEGORY' : {
            const catArr = Object.assign( [] , state.categoryArr );
            return { 
                ...state ,
                categoryArr : catArr.concat( action.payload )
            }
        }
        case 'EDIT_PAYMENT_CATEGORY' : {
            return { ...state}
        }
        case 'DELETE_PAYMENT_CATEGORY' : {
            const catArr = Object.assign( [] , state.categoryArr );
            catArr.splice( action.payload , 1);
            return { ...state,
                categoryArr :catArr
            }
        }
        case 'SAVE_PAYMENT_CATEGORY' : {
            const catArr = Object.assign( [] , state.categoryArr );
            catArr[action.itemIndex ] = action.payload;
            return { 
                ...state,
                categoryArr:catArr
            }
        }
        case 'GET_ALL_PAYMENT_CATEGORY' : {
            return { ...state}
        }
        case 'GET_PAYMENT_CATEGORY_DETAIL' : {
            
            return { 
                ...state,
                selectedCategoryDetail : action.payload
            }
        }
        case 'CLEAR_SELECTED_PAYMENT_CATEGORY' : {
            return { ...state}
        }

        default : {
            return { ...state}
        }
    }
    // return {
    //     ...state
    // }
};

export default CategoryReducer;