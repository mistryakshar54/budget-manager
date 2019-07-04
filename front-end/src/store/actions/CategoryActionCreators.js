
export const catSuccessRequestCallback = () => {
    return {
        type : 'SUCCESS_PAYMENT_CATEGORY'
    }
}
export const catErrorRequestCallback = (errorPayload) => {
    return {
        type : 'ERROR_PAYMENT_CATEGORY',
        payload : errorPayload
    }
}
export const catInProcessRequestCallback = () => {
    return {
        type : 'IN_PROCESS_PAYMENT_CATEGORY'
    }
}

export const createPaymentCategory = ( paymentCat ) => {
    return {
        type : 'ADD_PAYMENT_CATEGORY',
        payload : paymentCat
    }
}

export const editPaymentCategory = ( paymentCat ) => {
    return {
        type : 'EDIT_PAYMENT_CATEGORY',
        payload : paymentCat 
    }
}

export const deletePaymentCategory = ( catIndex ) => {
    return {
        type : 'DELETE_PAYMENT_CATEGORY',
        payload : catIndex 
    }
}

export const savePaymentCategory = ( paymentCat, catIndex ) => {
    return {
        type : 'SAVE_PAYMENT_CATEGORY',
        payload : paymentCat,
        itemIndex : catIndex
    }
}

export const getAllPaymentCategories = () => {
    return {
        type : 'GET_ALL_PAYMENT_CATEGORY'
    }
}

export const getPaymentCatDetail = ( PaymentCategory ) => {
    return {
        type : 'GET_PAYMENT_CATEGORY_DETAIL',
        payload : PaymentCategory
    }
}

export const dispatchCreatePaymentCategory = ( paymentCat ) => {
    return (dispatch) => {
        dispatch( catInProcessRequestCallback() );
        dispatch( createPaymentCategory(paymentCat) );
        dispatch( catSuccessRequestCallback());
    }
}

export const dispatchDeletePaymentCategory = ( paymentCat , catIndex ) => {
    return (dispatch) => {
        dispatch( catInProcessRequestCallback() );
        dispatch( deletePaymentCategory(catIndex) );
        dispatch( catSuccessRequestCallback());
    }
}

export const dispatchGetAllPaymentCategories = ( ) => {
    return (dispatch) => {
        dispatch( catInProcessRequestCallback() );
        dispatch( getAllPaymentCategories() );
        dispatch( catSuccessRequestCallback());
    }
}

export const dispatchGetCategoryDetail = ( PaymentCatId ) => {
    return (dispatch , getState) => {
        dispatch( catInProcessRequestCallback() );
        
        let matchIndex = -1;
        let paymentCatArr = Object.assign([] , getState().CategoryReducer.categoryArr);
        paymentCatArr.forEach( (item , index) => {
            if(item.id === parseInt(PaymentCatId))
            {
                matchIndex = index;
            }
        });
        if(matchIndex > -1)
        {
            dispatch( getPaymentCatDetail( paymentCatArr[ matchIndex ] ) );
            dispatch( catSuccessRequestCallback());    
        }
        else
        {
            dispatch( catErrorRequestCallback({
                message : 'No such record!',
                status : 500,
                apiInProcess : false
            }) );
           
        }


    }
}

export const dispatchSaveCategoryDetail = ( PaymentCatdata ) => {
    return (dispatch , getState) => {
        dispatch( catInProcessRequestCallback() );
        
        let matchIndex = -1;
        let paymentCatArr = Object.assign([] , getState().CategoryReducer.categoryArr);
        paymentCatArr.forEach( (item , index) => {
            if(item.id === parseInt(PaymentCatdata.id))
            {
                matchIndex = index;
            }
        });
        if(matchIndex > -1)
        {
            dispatch( savePaymentCategory( PaymentCatdata ,matchIndex ) );
            dispatch( catSuccessRequestCallback());    
        }
        else
        {
            dispatch( catErrorRequestCallback({
                message : 'No such record!',
                status : 500,
                apiInProcess : false
            }) );
           
        }


    }
}