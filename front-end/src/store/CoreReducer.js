import IncomeExpenseReducer from './reducers/IncomeExpenseReducer'
import CategoryReducer from './reducers/CategoryReducer'
import PaymentReducer from './reducers/PaymentReducer'
import ApiReducer from './reducers/ApiReducer'

import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
    IncomeExpenseReducer,
    CategoryReducer,
    PaymentReducer,
    ApiReducer,
    form : formReducer
});