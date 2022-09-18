import {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../action/vocal";

const initialState = {
  isLoggedIn: false,
  user_details: {},
  error: {},
};

export default function login(state = initialState, action) {
  switch (action.type) {

    case LOGIN_BEGIN:
      return {
        ...state,
        isLoggedIn: true,
        error: {},
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user_details: action.payload,
      };

      case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user_details: {},
        error: action.payload,
      };

    default:
      return state;
  }
}
