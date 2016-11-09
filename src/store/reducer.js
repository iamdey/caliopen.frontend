import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import notifyReducer from 'react-redux-notify';
import applicationReducer from './application-reducer';
import userReducer from './user-reducer';

const reducer = combineReducers({
  routing: routerReducer,
  notifications: notifyReducer,
  application: applicationReducer,
  user: userReducer,
});

export default reducer;
