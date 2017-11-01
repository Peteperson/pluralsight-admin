import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.authenticated, action) {
    switch (action.type) {
        case types.AUTHENTICATE_SUCCESS:
            return action.authData;
        case types.LOGOFF_BEGIN:
            return false;
        default:
            return state;
    }
}