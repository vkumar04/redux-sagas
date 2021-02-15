import * as type from '../types';

const initalState = {
  users: [],
  loading: true,
  error: null,
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case type.FETCH_USERS:
      return {
        ...state,
        loading: true,
      };
    case type.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case type.FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};

export default userReducer;
