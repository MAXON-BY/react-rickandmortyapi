import { heroItem, heroList, setPage } from './reducers/heroReducer';
import { takeEvery, put, call } from '@redux-saga/core/effects';

function* sagaWorkerList() {
  const payload = yield call(fetchHeroes);
  yield put({ type: 'heroes/heroList', payload });
}

function* sagaWorkerItem() {
  const payload = yield call(fetchHeroItem);
  yield put({ type: 'heroes/heroItem', payload });
}

function* sagaWorkerPage() {
  yield put({ type: 'heroes/setPage', payload });
}

export function* sagaWatcher() {
  yield takeEvery(heroList, sagaWorkerList);
  yield takeEvery(heroItem, sagaWorkerItem);
  yield takeEvery(setPage, sagaWorkerPage);
}

async function fetchHeroes() {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
  return await response.json();
}

async function fetchHeroItem() {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  return await response.json();
}
