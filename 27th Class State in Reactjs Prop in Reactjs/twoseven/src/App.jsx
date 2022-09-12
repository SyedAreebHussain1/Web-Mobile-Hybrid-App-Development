import logo from "./logo.svg";
import React, { Component } from "react";
// import Header from "./components/Header";
import { Header, Logo } from "./components/Header";
import Footer from "./components/Footer";
import BasicTextFields from "./components/TextField";
import "./App.css";
import Child from "./components/child";
import { Button } from "bootstrap";

// ek he file may multipl components
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <h1 style={{ backgroundColor: "red", color: "blue", fontSize: "18px" }}>
//           Main Component
//         </h1>
//         <button type="button" class="btn btn-primary">
//           Primary
//         </button>
//         <br />
//         <BasicTextFields />
//         <br />
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;

// img
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <h1 style={{ backgroundColor: "red", color: "blue", fontSize: "18px" }}>
//           Main Component
//         </h1>
//         <button type="button" className="btn btn-primary">
//           Primary
//         </button>
//         <Logo/>
//         <br />
//         <BasicTextFields />
//         <br />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;

// state
// state ap samjh ly component ka ek object ha jaisy ma ny ek component banaya howa ha App k nam se esy component ka ek obj ha jo k pury component may hamy access karta ha
// pory component may kahi par bhi hum usko get kar sakty ha or us may se data ly k render karwa sakty ha or us obj ko hum change bhi kar sakty ha mtlb wo state pury component ko mange kary gy mtlb pura jo hamara component us k data ko mange kary ge sirf us component ko jis component k stat hogi

//  stat k liye life cycle call hota consructor apko pata hoga humny ES6 may phara tha or is k undr call hota super()
// agy ja k hum jo pary gay us may ye waly construtor use nh hoty ha

// is may jo bhi hamara kam hoga functionalyty jo bhi hoga sara kuch stat se hoga
// hamay user ki profile change karwani ha jo sab kuch state control kary ge

// ye baat apko yaad rakhni ha react may hum DOM use nh karty jaisy hum document.getElementById hum use karty thy

// constructor apko yaad hoga jab hum dou classes ko apus may merge karty thy or us k undr constructor method lagaty thy or super lagaty
// thy super hum kab laga ty thy jo us k parent component ha perent component se koi method ya koi property get karna cha rahy ho is component may tou hum super use karty thy super may ny directly call kardiya isk under main koi value nh lekhi super hum jab call karty ha jb hum parent se koi value ly rahy ho abhi hum koi value nh ly rahy super ko mai ny aisy he call kardiya perametr ya arrgument pass nh kara

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Ghous Ahmed",
//       email: "ghous@gmail.com",
//     };
//   }
//   render() {
//     return (
//       <div>
//         <Header />
//         <h2>My name is   {this.state.name}</h2>

//         <input type="text" placeholder="Enter Value" />

//         <br />
//         <br />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Ghous Ahmed",
//       email: "ghous@gmail.com",
//     };
//   }
//   render() {
//     return (
//       <div>
//         <Header />
//         <h2>My name is   {this.state.name}</h2>

//         <h4>Email: {this.state.email}</h4>

//         <input type="text" placeholder="Enter Value" />
//         {/* <input type="Email" placeholder="Enter Value" /> */}

//         <br />
//         <br />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;

// component k undr function
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Ghous Ahmed",
//       email: "ghous@gmail.com",
//     };
//   }
//   set_name() {
//     console.log("Running...")
//   }
//   render() {
//     return (
//       <div>
//         <Header />
//         <h2>My name is {this.state.name}</h2>

//         <h4>Email: {this.state.email}</h4>

//         <input type="text" placeholder="Enter Value" />
//          <button onClick={this.set_name}>Set Name</button>

//         <br />
//         <br />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;

// normal function may error mily ga
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Ghous Ahmed",
//       email: "ghous@gmail.com",
//     };
//   }
//   set_name () {
//     console.log(this.state.name)
//   }
//   render() {
//     return (
//       <div>
//         <Header />
//         <h2>My name is {this.state.name}</h2>

//         <h4>Email: {this.state.email}</h4>

//         <input type="text" placeholder="Enter Value" />
//          <button onClick={this.set_name}>Set Name</button>

//         <br />
//         <br />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;

// normal function may this call karty ha tou usey function ka this lyta ha agr hum arrow function banaty or arrow function this lekhty ha tou parent ka this lyta ha ye fark hota ha arrow function may or normal function
// agr ap chaty ha arrow function use nh karna lekin phir bhi hamy noraml function k undr state use karni ha
// acha ye jo cheezy ha function normal waly buind waly ye sari cheezy hogaye ha purani lekin phir bhi apko pharaya jara ha taky concept sab clear hojaye ub jo react agye us itni sari cheezy karny ki zarorat nh hoti bulky asani se hamara kam hojata ha

// // part1
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Ghous Ahmed",
//       email: "ghous@gmail.com",
//     };
//     this.set_name = this.set_name.bind(this);
//   }
//   set_name() {
//     console.log(this.state.name);
//   }
//   render() {
//     return (
//       <div>
//         <Header />
//         <h2>My name is {this.state.name}</h2>

//         <h4>Email: {this.state.email}</h4>

//         <input type="text" placeholder="Enter Value" />
//         <button onClick={this.set_name}>Set Name</button>

//         <br />
//         <br />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;

// part2
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Ghous Ahmed",
//       email: "ghous@gmail.com",
//     };
//   }
//   set_name () {
//     console.log(this.state.name);
//   };
//   render() {
//     return (
//       <div>
//         <Header />
//         <h2>My name is {this.state.name}</h2>

//         <h4>Email: {this.state.email}</h4>

//         <input type="text" placeholder="Enter Value" />
//         <button onClick={()=>this.set_name()}>Set Name</button>

//         <br />
//         <br />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;

// arrow function may value mil jaye ge
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Ghous Ahmed",
//       email: "ghous@gmail.com",
//     };
//   }
//   set_name = () => {
//     console.log(this.state.name);
//   };
//   render() {
//     return (
//       <div>
//         <Header />
//         <h2>My name is {this.state.name}</h2>

//         <h4>Email: {this.state.email}</h4>

//         <input type="text" placeholder="Enter Value" />
//         <button onClick={this.set_name}>Set Name</button>

//         <br />
//         <br />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;



// multiple functions
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Ghous Ahmed",
//       email: "ghous@gmail.com",
//     };
//   }
//   set_name = () => {
//     this.setState({
//       name:"Umair"
//     })
//   };
//   get_name = () => {
//     console.log(this.state.name);
//   };
//   render() {
//     return (
//       <div>
//         <Header />
//         <h2>My name is {this.state.name}</h2>

//         <h4>Email: {this.state.email}</h4>

//         <input type="text" placeholder="Enter Value" />
//         <button onClick={this.set_name}>Set Name</button>
//         <button onClick={this.get_name}>Get Name</button>

//         <br />
//         <br />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;





// input se value get karna (e.terget.value)
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Ghous Ahmed",
//       email: "ghous@gmail.com",
//     };
//   }
//   render() {
//     return (
//       <div>
//         <Header />
//         <h2>My name is {this.state.name}</h2>

//         <h4>Email: {this.state.email}</h4>

//         <input onChange={(e)=>console.log(e.target.value)} type="text" placeholder="Enter Your Name" />
//         <br />
//         <br />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;




// state may value set karny k dou tareeky ha 
// part1
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Ghous Ahmed",
//       email: "ghous@gmail.com",
//     };
//   }
//   set_name = () => {
//     // this.setState({
//     //   name:"Umair",
//     //   email: "umair@gmail.com"
//     // })
//   };
//   get_name = () => {
//     // console.log(this.state.name);
//   };
//   render() {
//     return (
//       <div>
//         <Header />
//         <h2>My name is {this.state.name}</h2>

//         <h4>Email: {this.state.email}</h4>

//         <input onChange={(e)=>this.setState({name : e.target.value})} type="text" placeholder="Enter Your Name" />
//         <button onClick={this.set_name}>Set Name</button>
//         <button onClick={this.get_name}>Get Name</button>

//         <br />
//         <br />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;





// part2
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Ghous Ahmed",
//       email: "ghous@gmail.com",
//       value: ""
//     };
//   }
//   set_name = () => {
//     this.setState({
//       name: this.state.value
//     })
//   };
//   render() {
//     return (
//       <div>
//         <Header />
//         <h2>My name is {this.state.name}</h2>

//         <h4>Email: {this.state.email}</h4>

//         <input onChange={(e)=>this.setState({value : e.target.value})} type="text" placeholder="Enter Your Name" />
//         <button onClick={this.set_name}>Set Name</button>
//         <br />
//         <br />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;





// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Ghous Ahmed",
//       email: "ghous@gmail.com",
//       // value: ""
//     };
//   }
//   handleChange(e){
//     console.log(e.target.name)
//     console.log(e.target.value)
//   }
//   render() {
//     return (
//       <div>
//         <Header />
//         <h2>My name is {this.state.name}</h2>

//         <h4>Email: {this.state.email}</h4>

//         <input name="name" onChange={(e)=>this.handleChange(e)} type="text" placeholder="Enter Your Name" />
//         <br />
//         <input name="email" onChange={(e)=>this.handleChange(e)} type="text" placeholder="Enter Your Name" />
//         <button onClick={this.set_name}>Set Name</button>
//         <br />
//         <br />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;



// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Ghous Ahmed",
//       email: "ghous@gmail.com",
//     };
//   }

//   set_value(e){
//  this.setState({
//   [e.target.name]:e.target.value
//  })
//   }
//   render() {
//     return (
//       <div>
//         <Header />
//         <h2>My name is {this.state.name}</h2>

//         <h4>Email: {this.state.email}</h4>

//         <input name="name" onChange={(e)=>this.set_value(e)} type="text" placeholder="Enter Your Name" />
//         <br />
//         <input name="email" onChange={(e)=>this.set_value(e)} type="text" placeholder="Enter Your Name" />

//         <br />
//         <br />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;

// var obj = {
// name: "ghous",
//email:"ghous@gmail.com"
// }
// var val prompt("Enter value")
// conosle.log(obj[val])
// conosle.log(obj["name"]) ub bhi wo hee kam kary ga jo obj[val] may kar raha ha





// prop in Reactjs


// class App extends Component {

//   render() {
//     return (
//       <div>
       // // props pass kardiya ha html attribute kehty ha 
//         <Header name={this.state.name} page="Application Page" />
//         <br />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;



// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Ghous Ahmed",
//       email: "ghous@gmail.com",
//     };
//   }

//   set_value(e){
//  this.setState({
//   [e.target.name]:e.target.value
//  })
//   }
//   render() {
//     return (
//       <div>
//         {/* props pass kardiya ha html may attribute kehty ha  */}
//         <Header name={this.state.name} page="Application Page" />
//         <h2>My name is {this.state.name}</h2>

//         <h4>Email: {this.state.email}</h4>

//         <input name="name" onChange={(e)=>this.set_value(e)} type="text" placeholder="Enter Your Name" />
//         <br />
//         <input name="email" onChange={(e)=>this.set_value(e)} type="text" placeholder="Enter Your Name" />

//         <br />
//         <br />
//         <Footer /> 
//       </div>
//     );
//   }
// }
// export default App;




// parent se child component
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Ghous Ahmed",
//       email: "ghous@gmail.com",
//     };
//   }

//   set_value(e){
//  this.setState({
//   [e.target.name]:e.target.value
//  })
//   }
//   render() {
//     return (
//       <div>
//         {/* props pass kardiya ha html may attribute kehty ha  */}
//         <Header email={this.state.email} name={this.state.name} page="Application Page" />
//         <h2>My name is {this.state.name}</h2>

//         <h4>Email: {this.state.email}</h4>

//         <input name="name" onChange={(e)=>this.set_value(e)} type="text" placeholder="Enter Your Name" />
//         <br />
//         <input name="email" onChange={(e)=>this.set_value(e)} type="text" placeholder="Enter Your Name" />

//         <br />
//         <br />
//         <Footer /> 
//       </div>
//     );
//   }
// }
// export default App;




// child se parent
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Ghous Ahmed",
//       email: "ghous@gmail.com",
//     };
//   }

//   set_value(e){
//  this.setState({
//   [e.target.name]:e.target.value
//  })
//   }
//   get_props = (props) => {
//     console.log(props)
//   }
//   render() {
//     return (
//       <div>
//         {/* props pass kardiya ha html may attribute kehty ha  */}
//         <Header get_props={this.get_props}  email={this.state.email} name={this.state.name} page="Application Page" />
//         <h2>My name is {this.state.name}</h2>

//         <h4>Email: {this.state.email}</h4>

//         <input name="name" onChange={(e)=>this.set_value(e)} type="text" placeholder="Enter Your Name" />
//         <br />
//         <input name="email" onChange={(e)=>this.set_value(e)} type="text" placeholder="Enter Your Name" />

//         <br />
//         <br />
//         <Footer /> 
//       </div>
//     );
//   }
// }
// export default App;





// parent se data pass karna ha child ko 
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>App Parent Component</h1>
//         <Child name="Car" price="150000" />
//         <Child name="Watch" price="300" />
//         <Child name="House" price="8000000" />
//         <Child name="Bike" price="340000" />
//       </div>
//     );
//   }
// }
// export default App;



// child se data
class App extends Component {
  get_data(data){
    console.log(data)
  }
  render() {
    return (
      <div>
        <h1>App Parent Component</h1>
        <Child get_data={this.get_data} name="Car" price="10000" />
      </div>
    );
  }
}
export default App;
