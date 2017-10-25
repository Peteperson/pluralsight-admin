import {take, put, call, apply} from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {GET_USER_LIST, GET_USER_LIST_SUCCESS} from '../actions/actionTypes';
import {usersRecieved} from '../actions/userActions';

export function* getUsersSaga(){
  const qwe = yield take(GET_USER_LIST);
  const response = yield call(fetch, `http://jsonplaceholder.typicode.com/users`);
  const userList = yield apply(response, response.json);
  yield put(usersRecieved(userList));
}
