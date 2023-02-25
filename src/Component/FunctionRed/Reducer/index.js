import { combineReducers } from "redux";
import { dataReducer } from "./data_red";
import {dimensionReducer} from "./dimsion_red"

export default combineReducers({
    dataReducer,
    dimensionReducer
});