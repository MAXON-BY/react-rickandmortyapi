import { combineReducers } from 'redux';
import testSlice from './reducers/testSlice';

export const rootReducer = combineReducers({
  testSlice,
});
