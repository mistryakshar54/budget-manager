export const initialState = {
    auth : {
        isSignedIn : null,
        userId : null
    },
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
    categoryData : {
        categoryArr : [ 
            // {
            //     id: 123,
            //     "category" : "Food",
            //     "subcat" : "Lunch",
            // },
            // {
            //     id: 124,
            //     "category" : "Gift",
            //     "subcat" : "Birth Day Gift",
            // }
        ],
        selectedCategoryDetail : {},
        reqStatus : {
            message : '',
            error : false
        }
    },
    apiRequest : {
        message : '',
        status : 200,
        apiInProcess : false
    }
};
