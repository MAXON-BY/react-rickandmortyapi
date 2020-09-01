import { combineReducers } from 'redux';
import heroReducer from './reducers/heroReducer';

export const rootReducer = combineReducers({
  heroReducer,
});
