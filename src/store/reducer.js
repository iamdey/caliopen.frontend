import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import notifyReducer from 'react-redux-notify';

const reducer = combineReducers({
  routing: routerReducer,
  notifications: notifyReducer,
});

export default reducer;
