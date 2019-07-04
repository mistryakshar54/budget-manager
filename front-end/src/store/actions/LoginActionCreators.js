export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

const signInCreator = userId => {
    return {
        type: SIGN_IN,
        payLoad: userId 
    }
}

const signOutCreator = () => {
    return {
        type: SIGN_OUT
    }
}

export const signInAction = (userId) => (dispatch, getState) => {
    dispatch(signInCreator(userId));
}

export const signOutAction = () => dispatch  => {
    dispatch(signOutCreator());
}