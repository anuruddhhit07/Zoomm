// https://github.com/shubhamns/mern-stack-react-redux-thunk-crud-app-with-functional-component/tree/master/react-app/src/reducers
// https://stackoverflow.com/questions/74044438/multiple-components-decide-to-fetch-an-object-at-the-same-time
// https://gist.github.com/mbostock/2983699
import {
    GET_DIMENSION,
    SET_DIEMNSION,
  } from "../ActionTypes/data_acty";
  const initialState = {
    loading: false,
    width: 300,
    height: 300,
    margin:{top:10,bottom:25,left:50,right:10},
    error: "",
  };



  export function dimensionReducer(state = initialState, action) {
    switch (action.type) {
      case GET_DIMENSION:
      return {
        ...state,
      };
      case SET_DIEMNSION:
        console.log('resss',action);
      return {
        ...state,
        width: state.width + action.payload?.width_inc,
        height: state.height + action.payload?.height_inc,
      };
    
      
      default:
        return state;
    }
  }