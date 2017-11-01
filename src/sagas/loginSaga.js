import { take, put, call, apply } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { AUTHENTICATE_BEGIN } from '../actions/actionTypes';
import { authRecieved } from '../actions/loginActions';

export function* loginSaga() {
    const act = yield take(AUTHENTICATE_BEGIN);
    const response = yield call(fetch, `http://jsonplaceholder.typicode.com/comments`);
    const authData = yield apply(response, response.json);
    yield put(authRecieved(true));
}
