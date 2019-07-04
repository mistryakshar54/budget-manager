import IncomeExpenseReducer from './reducers/IncomeExpenseReducer'
import CategoryReducer from './reducers/CategoryReducer'
import PaymentReducer from './reducers/PaymentReducer'
import ApiReducer from './reducers/ApiReducer'

import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import authenticationReducer from './reducers/AuthReducer';

export const rootReducer = combineReducers({
    auth : authenticationReducer,
    IncomeExpenseReducer,
    CategoryReducer,
    PaymentReducer,
    ApiReducer,
    form : formReducer
});