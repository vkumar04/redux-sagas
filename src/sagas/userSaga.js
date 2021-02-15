import { call, put, takeEvery } from 'redux-saga/effects';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const getApi = async () => {
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data;
};

function* fetchUsers() {
  try {
    const users = yield call(getApi);
    yield put({ type: 'FETCH_USERS_SUCCESS', users });
  } catch (e) {
    yield put({ type: 'FETCH_USERS_FAILED', error: e.message });
  }
}

function* userSaga() {
  yield takeEvery('FETCH_USERS', fetchUsers);
}

export default userSaga;
