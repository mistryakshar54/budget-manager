import {SIGN_IN, SIGN_OUT} from '../actions/LoginActionCreators';
import {initialState} from './DefaultState';

const authenticationReducer = (prev=initialState.auth, action) => {
    switch(action.type){
        case SIGN_IN:
            return {...prev, isSignedIn : true, userId : action.payLoad};
        case SIGN_OUT:
            return {...prev, isSignedIn : false, userId : null}
        default: return prev;
    }
}
export default authenticationReducer;