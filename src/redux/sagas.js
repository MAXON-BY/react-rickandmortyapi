import { heroList } from './reducers/heroReducer';
import { put, takeEvery } from '@redux-saga/core/effects';

export function* sagaWatcher() {
    yield takeEvery(heroList, sagaWorker);
}

function* sagaWorker() {
    yield put();
}
