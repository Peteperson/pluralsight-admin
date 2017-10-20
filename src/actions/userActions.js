import { makeActionCreator } from '../utility/makeActionCreator';
import {GET_USER_LIST} from '../actions/actionTypes';

export const loadUsers = makeActionCreator(GET_USER_LIST,"id");
