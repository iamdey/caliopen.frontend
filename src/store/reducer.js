import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import notifyReducer from 'react-redux-notify';
import applicationReducer from './application-reducer';

const reducer = combineReducers({
  routing: routerReducer,
  notifications: notifyReducer,
  application: applicationReducer,
});

export default reducer;
