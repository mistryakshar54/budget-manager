export const incomeSuccessRequestCallback = () => {
    return {
        type : 'SUCCESS_INCOME'
    }
}
export const incomeErrorRequestCallback = (errorPayload) => {
    return {
        type : 'ERROR_INCOME',
        payload : errorPayload
    }
}
export const incomeInProcessRequestCallback = () => {
    return {
        type : 'IN_PROCESS_INCOME'
    }
}

export const addNewIncomeData = ( incomeData ) => {
    return {
        type:'ADD_INCOME',
        payload : incomeData
    }
}

export const deleteIncomeData = ( recordIndex ) => {
    return {
        type : 'DELETE_INCOME',
        payload : recordIndex 
    }
}


export const saveIncomeData = ( paymentCat, recordIndex ) => {
    return {
        type : 'SAVE_INCOME',
        payload : paymentCat,
        itemIndex : recordIndex
    }
}

export const getAllIncomeData = () => {
    return {
        type : 'GET_ALL_INCOME'
    }
}

export const getIncomeDetail = ( IncomeData ) => {
    return {
        type : 'GET_INCOME',
        payload : IncomeData
    }
}

export const dispatchCreateIncomeData = ( incomeData ) => {
    return ( dispatch ) => {
        dispatch( incomeInProcessRequestCallback() );
        dispatch( addNewIncomeData( incomeData ) );
        dispatch( incomeSuccessRequestCallback() );
    }
}

export const dispatchDeleteIncomeData = ( incomeData , recordIndex ) => {
    return ( dispatch ) => {
        dispatch( incomeInProcessRequestCallback() );
        dispatch( deleteIncomeData( recordIndex ) ); //Add logic to delete it from the backend first and then update the state
        dispatch( incomeSuccessRequestCallback() );
    }
}

export const dispatchUpdateIncomeData = ( incomeData , recordIndex ) => {
    return(dispatch , getState ) => {
        dispatch( incomeInProcessRequestCallback() );  
        let matchIndex = -1;
        let incomeDataArr = Object.assign([] , getState().IncomeReducer.incomeArr);
        incomeDataArr.forEach( (item , index) => {
            if(item.id === parseInt(incomeData.id))
            {
                matchIndex = index;
            }
        });
        if(matchIndex > -1)
        {
            dispatch( saveIncomeData( incomeData ,matchIndex ) );
            dispatch( incomeSuccessRequestCallback());    
        }
        else
        {
            dispatch( incomeErrorRequestCallback({
                message : 'No such record!',
                status : 500,
                apiInProcess : false
            }) );
           
        }
    }
}

export const dispatchGetIncomeData = ( incomeDataId ) => {
    return(dispatch , getState ) => {
        dispatch( incomeInProcessRequestCallback() );
        
        let matchIndex = -1;
        let paymentCatArr = Object.assign([] , getState().CategoryReducer.categoryArr);
        paymentCatArr.forEach( (item , index) => {
            if(item.id === parseInt(incomeDataId))
            {
                matchIndex = index;
            }
        });
        if(matchIndex > -1)
        {
            dispatch( getIncomeDetail( paymentCatArr[ matchIndex ] ) );
            dispatch( incomeSuccessRequestCallback());    
        }
        else
        {
            dispatch( incomeErrorRequestCallback({
                message : 'No such record!',
                status : 500,
                apiInProcess : false
            }) );
           
        }
    }
}
