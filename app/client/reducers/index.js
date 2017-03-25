import { combineReducers } from 'redux';
import user from './user';
import redirect from './redirect';

export default combineReducers({
  redirect,
  user
});
