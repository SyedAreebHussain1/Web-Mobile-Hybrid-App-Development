// const INITIAL_STATE = {
//     name:"Ghous",
//     data:[
//         {school:"saylani",teacher:"Muhammad Ali Mughal"},{couse:"Web & Mobile"}
//     ]
// }
// export default (state = INITIAL_STATE) => {
//     return state;  
// }



import { combineReducers } from "redux";
import auth_reducer from "./auth_reducer";
import app_reducer from "./app_reducer";

export default combineReducers({
    auth:auth_reducer,
    app:app_reducer
})