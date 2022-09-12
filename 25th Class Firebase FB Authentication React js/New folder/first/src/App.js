import logo from './logo.svg';
import './App.css';
import React from 'react';



// jsx
class App extends React.Component {
  render() {
    let fName = "Ghous";
    let lName = "Ahmed";
    let fullName = fName + ' ' + lName
    let arr = [1,2,3,4,5]
    return (
      <div>
        <h1>{`${fName} ${lName}`}</h1>
        <h1>{arr[0]}</h1>
      </div>
    )
  }
}
export default App;


// class component old react
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//       </div>
//     )
//   }
// }

// export default App;

// function component updated react may aya ha 
// function App() {
//   return (
//     <div className="App">
//      <h1>Hello World</h1>
//     </div>
//   );
// }

// export default App;
