import {
  SET_CURRENT_USER,
  USER_LOADING
} from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  filledProfile: false,
  user: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        filledProfile: !isEmpty(action.payload) && action.payload.idNumber,
        user: action.payload
      };

    case USER_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}