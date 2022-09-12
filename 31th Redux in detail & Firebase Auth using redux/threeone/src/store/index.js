// import reducer from "./reducer";
// import { createStore , applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// const store = createStore(reducer,applyMiddleware(thunk))
// export default store


import reducer from "./reducer"; //// import reducer Q lekh raha ho Q k main ny store/reducer/index.js se directly import kara ha is ko ma ny koi nam nh diya. is tarha directly export kardiya export default (state = INITIAL_STATE,action) => { return state } jab koi function ap import deffulat karty ha or usko koi nam nh dyty ap us ka kuch bhi nam rakh sakty ha or usko import kar sakty ha is tarha import reducer from "./reducer"    
// thunk ko import karna pary ga 'redux-thunk' se or us ko hamy batana hoga MiddleWear apply karna ha taky hum action ka function use kar saky or bad may API bhi call kar saky 
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


const store = createStore(reducer, applyMiddleware(thunk))
export default store;