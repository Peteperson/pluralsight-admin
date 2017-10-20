import {take, put, call, apply} from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {GET_USER_LIST} from '../actions/actionTypes';

export function* getUsersSaga(){
  console.log("into the generator");
  const qwe = yield take(GET_USER_LIST);
  const response = yield call(fetch, `http://jsonplaceholder.typicode.com/users`);
  const userList = yield apply(response, response.json);
}
