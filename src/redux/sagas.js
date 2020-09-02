import { heroItem, heroList, setPage } from './reducers/heroReducer';
import { takeEvery } from '@redux-saga/core/effects';

function* sagaWorker() {
  // yield put('heroes/heroList');
  // yield put('heroes/setPage');
  // yield put('heroes/heroItem');
}

export function* sagaWatcher() {
  yield takeEvery(heroList, sagaWorker);
  yield takeEvery(heroItem, sagaWorker);
  yield takeEvery(setPage, sagaWorker);
}
