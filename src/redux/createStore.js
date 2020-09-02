import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './sagas';

const saga = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: true }), saga];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

saga.run(sagaWatcher);
