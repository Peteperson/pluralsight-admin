import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.GET_USER_LIST_SUCCESS:
      console.log(action.userList);
      return action.userList;
    default:
      return state;
  }
}