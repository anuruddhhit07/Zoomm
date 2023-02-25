import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_DIMENSION,
  SET_DIEMNSION,
} from "../ActionTypes/data_acty";

import { api_url } from "../Config/index";
import axios, * as others from "axios";
// const axios = require("axios");

import {testdata} from "../Dummydata/dummydata"

export function getData() {
  return (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    //axios
     // .get(`${api_url}/data`)
    //  .then(function (res) {
       // var arrayObj = res.data.data;
      //  var i;

      //  for (i = 0; i < arrayObj.length; i++) {
          
       //   arrayObj[i].time = new Date(arrayObj[i]["unixtime"] * 1000);
          // delete arrayObj[i]["unixtime"];
      //  }
     //   console.log("res obj =>", arrayObj);

        dispatch({
          type: GET_USER_SUCCESS,
          payload: { data: testdata },
        });
    //  })
   //   .catch(function (error) {
     //   const { response } = error;
     //   console.log("err", response);
     //   if (response !== undefined) {
    //    dispatch({
     //       type: GET_USER_SUCCESS,
       //     payload: {data:testdata},
         // });
       // }
    //  });
  };
}

export function setDim(width_increment = 10, height_increment = 20,operrator=1) {
  return (dispatch) => {
    dispatch({
      type: SET_DIEMNSION,
      payload: { width_inc: operrator*width_increment, height_inc: operrator*height_increment },
    });
  };
}
