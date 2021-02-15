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
        users: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
