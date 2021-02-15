import * as type from '../types';

const getUsers = (users) => ({
  type: type.FETCH_USERS,
  payload: users,
});

export default getUsers;
