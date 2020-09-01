import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
// import createSagaMiddleware from 'redux-saga';
// import { sagaWatcher } from './sagas';

// const saga = createSagaMiddleware();

// const middleware = [...getDefaultMiddleware({ thunk: false }), saga];

export const store = configureStore({
  reducer: rootReducer,
  // middleware,
});

// saga.run(sagaWatcher);
