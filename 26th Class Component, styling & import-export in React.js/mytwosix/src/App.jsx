// import logo from './logo.svg';

// import React from 'react';
import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BasicTextFields from './components/TextField'
import './App.css';



// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello world</h1>
//       </div>
//     )
//   }
// } 
// export default App;




// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello world</h1>
//       </div>
//     )
//   }
// }
// export default App;


// function component
// function App() {
//   return (
//     <div>
//       <h1>Hello </h1>
//     </div>
//   )
// }
// export default App





// class App extends Component {
//   render() {
//     let name = "Ghous" 
//     return (
//       <div>
//         <h1>Hello {name}</h1>
//       </div>
//     )
//   }
// } 
// export default App;







// let name = "Ghous"
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello {name}</h1>
//       </div>
//     )
//   }
// }
// export default App;






// code may li ko todos[num].name bar bar lekhna hoga is liye map use kary gy abhi is may map use nh kiya is code may  
// class App extends Component {
//   render() {
//     let todos = [
//       { name: "Ghous" },
//       { name: "Basit" },
//       { name: "Ali" },
//       { name: "Umair" },
//       { name: "Asad" },
//     ]
//     return (
//       <div>
//         <ul>
//           <li>{todos[0].name}</li>
//           <li>{todos[1].name}</li>
//           <li>{todos[2].name}</li>
//           <li>{todos[3].name}</li>
//           <li>{todos[4].name}</li>
//         </ul>
//       </div>
//     )
//   }
// }
// export default App;






// map
// class App extends Component {
//   render() {
//     let todos = [{ name: "Ghous" }, { name: "Basit" }, { name: "Ali" }]
//     return (
//       <div>
//         <ul>
//           {todos.map((item, index) => {
//             console.log(item.name,index)
//             // console.log(index)
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
// export default App;




// class App extends Component {
//   render() {
//     let todos = [{ name: "Ghous" }, { name: "Basit" }, { name: "Ali" }]
//     return (
//       <div>
//         <ul>
//           {todos.map((item, index) => {
//             return (<li key={index}>{item.name}</li>)
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
// export default App;







// kya hum ek file k undr ek se ziada component bana sakty ha
// class Header extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Header</h2>
//       </div>
//     )
//   }
// }
// class Footer extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Foooter</h2>
//       </div>
//     )
//   }
// }
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <h1>Main Component</h1>
//         <Footer />
//       </div>
//     )
//   }
// }
// export default App;





// class Header extends Component {
//   render() {
//     return (
//       <div className='header'>
//         <h2>Header</h2>
//       </div>
//     )
//   }
// }
// class Footer extends Component {
//   render() {
//     return (
//       <div className='footer'>
//         <h2>Foooter</h2>
//       </div>
//     )
//   }
// }
// class App extends Component {
//   render() {
//     return (
//       <div className='main'>
//         <Header />
//         <h1 style={{ backgroundColor: 'red', color: 'blue', fontSize: 10 }} >Main Component</h1>
//         <Footer />
//       </div>
//     )
//   }
// }
// export default App;








// class Header extends Component {
//   render() {
//     return (
//       <div className='header'>
//         <h2>Header</h2>
//       </div>
//     )
//   }
// }
// class Footer extends Component {
//   render() {
//     return (
//       <div className='footer'>
//         <h2>Foooter</h2>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <h1 style={{ backgroundColor: 'red', color: 'blue' }} >Main Component</h1>
//         <img src='https://image.shutterstock.com/image-photo/cars-sale-stock-row-car-260nw-636632101.jpg' width="100px" />
//         <Footer />
//       </div>
//     )
//   }
// }
// export default App;





// main chata ho ek folder bana lo or us folder k undr sary components banao alag se file use karo components k liye

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header/>
//         <h1 style={{ color: "red", fontSize: "18px" }} >Main Component</h1>
//         <Footer/>
//       </div>
//     )
//   }
// }
// export default App;






// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header/>
//         <h1 style={{ color: "red", fontSize: "18px" }} >Main Component</h1>
//         <button type="button" className='btn btn-primary'>Primary</button>
//         <br />
//         <br />
//         <Footer/>
//       </div>
//     )
//   }
// }
// export default App;






class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1 style={{ color: "red", fontSize: "18px" }} >Main Component</h1>
        <button type="button" className='btn btn-primary'>Primary</button>
        <br />
        <BasicTextFields/>
        <br />
        <Footer/>
      </div>
    )
  }
}
export default App;

