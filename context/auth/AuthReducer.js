import { RESTORE_TOKEN, SING_IN, SING_OUT } from "./actions";

const authReducer = (state, action) => {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.token,
      };

    case SING_IN:
      return {
        ...state,
        isOut: false,
        userToken: action.token,
      };

    case SING_OUT:
      return {
        ...state,
        isOut: true,
        userToken: null,
      };

    default:
      return state;
  }
};
