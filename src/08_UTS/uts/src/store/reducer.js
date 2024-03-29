import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import app from '../pages/search/apps/modules';

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  app,
});
