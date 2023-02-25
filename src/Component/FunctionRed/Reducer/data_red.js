// https://github.com/shubhamns/mern-stack-react-redux-thunk-crud-app-with-functional-component/tree/master/react-app/src/reducers
// https://stackoverflow.com/questions/74044438/multiple-components-decide-to-fetch-an-object-at-the-same-time

import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
  } from "../ActionTypes/data_acty";
  const initialState = {
    loading: false,
    item: "",
    data: [],
    error: "",
  };
  export function dataReducer(state = initialState, action) {
    switch (action.type) {
      case GET_USER_REQUEST:
      return {
        ...state,
      };
      case GET_USER_SUCCESS:
        console.log('resss',action);
      return {
        ...state,
        data: action.payload?.data,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
      
      default:
        return state;
    }
  }


 