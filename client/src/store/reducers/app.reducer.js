import {combineReducers} from "redux";
import foreCastReducer from "./forecast.reducer";

const appReducer = combineReducers({
    foreCastReducer
})

export default appReducer;