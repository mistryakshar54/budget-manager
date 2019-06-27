export const initialState = {
    paymentData : {
        paymentModeArr : [],
        selectedPaymentDetail : {},
        reqStatus : {
            message : '',
            error : false
        }
    },
    incomeData : {},
    expenseData : {},
    categoryData : {},
    apiRequest : {
        message : '',
        status : 200,
        apiInProcess : false
    }
};
