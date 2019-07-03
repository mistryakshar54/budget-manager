import {initialState} from './DefaultState';

const CategoryReducer  = ( state = initialState.categoryData , action ) => {

    switch(action.type){
        case 'ADD_PAYMENT_CATEGORY' : {
            return { ...state}
        }
        case 'EDIT_PAYMENT_CATEGORY' : {
            return { ...state}
        }
        case 'DELETE_PAYMENT_CATEGORY' : {
            return { ...state}
        }
        case 'SAVE_PAYMENT_CATEGORY' : {
            return { ...state}
        }
        case 'GET_ALL_PAYMENT_CATEGORY' : {
            return { ...state}
        }
        case 'GET_PAYMENT_CATEGORY_DETAIL' : {
            return { ...state}
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