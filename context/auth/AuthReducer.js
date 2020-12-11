import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from "./actions";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };

    case SIGN_IN:
      return {
        ...state,
        isOut: false,
        userToken: action.token,
      };

    case SIGN_OUT:
      return {
        ...state,
        userToken: null,
        isOut: true,
      };

    default:
      return state;
  }
};

export default AuthReducer;
