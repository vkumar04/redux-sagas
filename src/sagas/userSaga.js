import { call, put, takeEvery } from 'redux-saga/effects';
import * as type from '../redux/types';
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const getApi = async () => {
  let res = await fetch(apiUrl);
  let data = await res.json();
  return data;
};

function* fetchUsers(action) {
  try {
    users = yield call(getApi);
    yield put({ type: type.FETCH_USERS_SUCCESS, users: users });
  } catch (e) {
    yield put({ type: type.FETCH_USERS_FAILED, error: e.message });
  }
}

function* userSaga() {
  yield takeEvery({ type: type.FETCH_USERS, fetchUsers });
}

export default userSaga;
