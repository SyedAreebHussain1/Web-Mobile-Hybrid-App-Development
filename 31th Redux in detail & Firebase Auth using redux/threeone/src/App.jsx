import "./App.css";
import React from "react";
import Home from "./containers/Home";


// REDUX 
//  Store ka ek folder banaya ha store k folder k under action ka folder banaya ha or reducer ka folder banaya reducer k folder may index.js ki file banaye ha us k under hum store bananliya ha store may ek obj bana liya ha const INITIAL_STATE = { users: [] } k nam se jo k hamari global state ha or us k sth sth ek arrow function ko export default (state = INITIAL) => {return state} kardiya ha is may return ho rahi ha hamari state
// index.js state sab se main file ha us may mai ny import  reducer from './reducer' ko us k bad ma ny import {createStore,applyMiddleware} from 'redux' createStore main ny kis liye import kara ha taaky main store ko create kar sako redux ko bata sako ye mera store ha isko apny pass create kardou {applyMiddleware} bad may karty ha or ma ny const bana liya store k nam se const store = createStore(reducer) or export default store kardiya sirf chaar line ka work howa ha redux ki config yaha tak complete hogaye ha 
// ub hamy ajana ha sab se important file may index.js  us may hamy import {Provider} from 'react-redux' or us k sth main ny import store from './store' provider kya kary ga provider ek component hamy dyga us component k child mai apni puri Application rakhy gy thk ha tou is component k child may jo application hogi wo redux k sth connect hojaye ge us k bad <provider store={store}><App/></provider> is k bad hamy apni application chala k dekhny ha Error nh ana chye 


// class App extends React.Component{
//   render(){
//     return(
//       <div style={{textAlign:'center'}}>
//         <Home/>
//       </div>
//     )
//   }
// }
// export default App



class App extends React.Component{
  render(){
    return(
      <div>
        <Home/>
      </div>
    )
  }
}
export default App