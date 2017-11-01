import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import users from './userReducer';
import comments from './commentReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import authenticated from './loginReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    users,
    comments,
    ajaxCallsInProgress,
    authenticated
});

export default rootReducer;
