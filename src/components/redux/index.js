import displayReducer from "./displayReducer";
import todoReducer from "./todoReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({displayReducer,todoReducer})

export default allReducers