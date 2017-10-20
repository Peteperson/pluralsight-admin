import {take, put, call, apply} from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {GET_USER_LIST} from '../actions/actionTypes';

export function* getUsersSaga(){
  console.log("into the generator");
  const qwe = yield take(GET_USER_LIST);
  console.log(qwe);
  const response = yield call(fetch, `http://jsonplaceholder.typicode.com/users`);
  const data = yield apply(response, response.json);
  console.info("Data", data);
}
