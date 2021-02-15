import * as type from '../types';

export const getUsers = (users) => ({
  type: type.FETCH_USERS,
  payload: users,
});
