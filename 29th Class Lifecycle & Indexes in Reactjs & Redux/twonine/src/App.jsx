import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Child from "./components/child";
import { render } from "@testing-library/react";

// main chata ho Inishlee mera component render ho database se data uth k mery pass ajye or mery component may bhi render hojaye

// lifecycle k teen stages ha pehla ha mounting mounting kab chalta ha k jab hamara component start hota ha mountin may sab se pehla lifecycle ha constructor bhi kehlata ha constructor ap sab ny phar liya or pata bhi ha constructor kya hota ha
// Inishlee ye jo function ha hamara run ho jata ha is k undr hum apni state wagera bana dyty ha is taraha se

//tou ye  Inishlee hamara lifecycle mehtod constructor jo k humny pehly bhi phar liya tha jab bhi hamara component hamara render hoga sab se pehly jo mehtod chaly ga wo ha constructor

// class App extends Component{
//   constructor(){
//     super()
//       this.state = {
//         count : 0
//       }
//       console.log("Constructor")
//   }
//   render(){
//     return(
//       <div>
//         <h1>React LifeCycle </h1>
//       </div>
//     )
//   }
// }

// export default App;

//constructor k bad jo second lifecycle chalta ha Mounting pe wo ha getDerivedStateFromProps acha ye new ha is se pehly dou teen lifecycle or thy lekin react nu unko bilkul khatma kardiya ha or un ki jaga pe getDerivedStateFromProps dy diya ye wala jo lifecycle ha ye ha static jab bhi ye wala life cycle hum kary gy hamy ek key
// use karna hoga static ka us k bad ye jo mehtod ha getDerivedStateFromProps ye hum lekhy gy
// class App extends Component{
//   constructor(){
//     super()
//       this.state = {
//         count : 0
//       }
//       console.log("Constructor")
//   }
//   static getDerivedStateFromProps(){
//     console.log("getDerivedStateFromProps",this)
//     return null
//   }
//   render(){
//     return(
//       <div>
//         <h1>React LifeCycle </h1>
//       </div>
//     )
//   }
// }

// export default App;

// class App extends Component{
//   constructor(){
//     super()
//       this.state = {
//         count : 0,
//         Name : "Areeb"
//       }
//       console.log("Constructor")
//   }
//   static getDerivedStateFromProps(){
//     console.log("getDerivedStateFromProps")
//     return {
//       count : 5,
//        Name : "Hussain"
//     }
//   }
//   render(){
//     return(
//       <div>
//        <h1 style={{textAlign:'center'}}>{this.state.count}</h1>
//        <h1 style={{textAlign:'center'}}>{this.state.Name}</h1>
//        <button></button>
//         {/* <h1>React LifeCycle </h1> */}
//       </div>
//     )
//   }
// }
// export default App

// class App extends Component{
//   constructor(){
//     super()
//       this.state = {
//         count : 0,
//       }
//       console.log("Constructor")
//   }
//   // static getDerivedStateFromProps(){
//   //   console.log("getDerivedStateFromProps")
//   //   return {
//   //     count : 5,
//   //   }
//   // }
//   componentDidMount(){
//     console.log("componentDidMount")
//   }
//   render(){
//     console.log("render")
//     return(
//       <div>
//        {/* <h1 style={{textAlign:'center'}}>{this.state.count}</h1>
//        <h1 style={{textAlign:'center'}}>{this.state.Name}</h1>
//        <button></button> */}
//         <h1>React LifeCycle </h1>
//       </div>
//     )
//   }
// }
// export default App

// // componentDidMount k undr api call ki ha
// class App extends Component{
//   constructor(){
//     super()
//       this.state = {
//         count : 0,
//       }
//       console.log("Constructor")
//   }
//   static getDerivedStateFromProps(){
//     console.log("getDerivedStateFromProps")
//     return null
//     // {
//     //   count : 5,
//     // }
//   }
//   componentDidMount(){
//     console.log("componentDidMount")
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.log(error))
//   }
//   render(){
//     console.log("render")
//     return(
//       <div>
//        {/* <h1 style={{textAlign:'center'}}>{this.state.count}</h1>
//        <h1 style={{textAlign:'center'}}>{this.state.Name}</h1>
//        <button></button> */}
//         <h1>React LifeCycle </h1>
//       </div>
//     )
//   }
// }
// export default App

// componentDidMount k undr api call ki ha
// class App extends Component{
//   constructor(){
//     super()
//       this.state = {
//         count : 0,
//       }
//       console.log("Constructor")
//   }
//   static getDerivedStateFromProps(){
//     console.log("getDerivedStateFromProps")
//     return null
//     // {
//     //   count : 5,
//     // }
//   }
//   componentDidMount(){
//     console.log("componentDidMount")
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => console.log("data=>",data))
//   .catch(error => console.log("Error=>" , error))
//   }
//   render(){
//     console.log("render")
//     return(
//       <div>
//        {/* <h1 style={{textAlign:'center'}}>{this.state.count}</h1>
//        <h1 style={{textAlign:'center'}}>{this.state.Name}</h1>
//        <button></button> */}
//         <h1>React LifeCycle </h1>
//       </div>
//     )
//   }
// }
// export default App

// componentDidMount may API se data magwa k apni state may save karwa sakta ho is tarha

// class App extends Component{
//   constructor(){
//     super()
//       this.state = {
//         count : 0,
//         data: []
//       }
//       console.log("Constructor")
//   }
//   static getDerivedStateFromProps(){
//     console.log("getDerivedStateFromProps")
//     return null
//   }
//   componentDidMount(){
//     console.log("componentDidMount")
//     fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(data => {
//     this.setState({data:data})})
//   .catch(error => console.log("Error=>" , error))
//   }
//   render(){
//     console.log("data=>",this.state.data)
//     return(
//       <div>
//         <h1>React LifeCycle </h1>
//         {/* {this.state.data.map((v,i)=>{
//           return(
//             <h2 key={i}>{v}</h2>
//           )
//         })} */}
//       </div>
//     )
//   }
// }
// export default App

// componentDidMount se data API may magwa raha ho render may bhi mujhy data mily ga
// class App extends Component{
//   constructor(){
//     super()
//       this.state = {
//         count : 0,
//         data: []
//       }
//       console.log("Constructor")
//   }
//   static getDerivedStateFromProps(){
//     console.log("getDerivedStateFromProps")
//     return null
//   }
//   componentDidMount(){
//     console.log("componentDidMount")
//     fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(data => {
//     this.setState({data:data})})
//   .catch(error => console.log("Error=>" , error))
//   }
//   render(){
//     console.log("render data=>",this.state.data)
//     // console.log("")
//     return(
//       <div>
//         <h1>React LifeCycle </h1>
//       </div>
//     )
//   }
// }
// export default App

// render k undr bhi mujhy data mil raha ha render k undr Q mil raha ha q k ma ny ComponentDidmount may Api call kari or us may ma ny setState kardiya or ub ma us state ko render may get kar raha ho tou mujhy wo data mil raha ha ub ma is pe map chalao ga or data display karwao ga ie
// class App extends Component{
//   constructor(){
//     super()
//       this.state = {
//         count : 0,
//         data: []
//       }
//       console.log("Constructor")
//   }
//   static getDerivedStateFromProps(){
//     console.log("getDerivedStateFromProps")
//     return null
//   }
//   componentDidMount(){
//     console.log("componentDidMount")
//     fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(data => {
//     this.setState({data:data})})
//   .catch(error => console.log("Error=>" , error))
//   }
//   render(){
//     console.log("render data=>",this.state.data)
//     // console.log("")
//     return(
//       <div>
//         <h1>React LifeCycle </h1>
//         {this.state.data.map((v,i)=>{
//           return(
//             <h2 key={i}>{v}</h2>
//           )
//         })}
//       </div>
//     )
//   }
// }
// export default App

// count bana diya ha jo increament or dicreament kar raha h kis tarha se kar rah ha state k undr count nam ki property majood ha increament ka btn jab press kar raha ho
//  tou count ki property ko incrment kar raha h or discreament k btn ko press kar raha ho tou wo count ko dicreament kar raha ha
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     return(
//     <div style={{textAlign:'center'}}>
//       <h1 >{this.state.count}</h1>
//       <button onClick={()=>this.setState({count:this.state.count + 1})}>Increament</button>
//       <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicreament</button>
//     </div>
//     );
//   }
// }
// export default App;

// count bana diya ha jo increament or dicreament kar raha h kis tarha se kar rah ha state k undr count nam ki property majood ha increament ka btn jab press kar raha ho
//  tou count ki property ko incrment kar raha h or discreament k btn ko press kar raha ho tou wo count ko dicreament kar raha ha ub hum ny dekh liya k getDerivedStateFromProps
// inishali tou chal rha ha lekin getDerivedStateFromProps jab bhi chalta ha jab component may koi update ay koi change ay ya component k state may change ay ya component k
// props may change ay tou getDerivedStateFromProps two perameter dyta ha 1)props 2)state console.log(state) karwa raha ho acha ub ye chaly ga kab jab ma state ko update karunga
// jab jab state meri update hogi getDerivedStateFromProps dubara chaly ga
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     // console.log("Constructor");
//   }
//   static getDerivedStateFromProps(props,state) {
//     console.log("getDerivedStateFromProps=>",state);
//     return null
//   }

//   render() {
//     return(
//     <div style={{textAlign:'center'}}>
//       <h1 >{this.state.count}</h1>
//       <button onClick={()=>this.setState({count:this.state.count + 1})}>Increament</button>
//       <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicreament</button>
//     </div>
//     );
//   }
// }
// export default App;

// acha ye hamny dekh liya k state k update pe hamy la k dy raha ha acha props update hungy tou bhi ye dubara se run hoga props update hony se matlb ye ha k agr mera ek
//  child component ha or us may ma props recive kar raha ho or us k jo props agr wo update hungy tou wo dubara se call hojaye ga thek ha
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     // console.log("Constructor");
//   }
//   render() {
//     return(
//     <div style={{textAlign:'center'}}>
//       {/* <h1 >{this.state.count}</h1> */}
//       <Child plus={this.state.count} />
//       <button onClick={()=>this.setState({count:this.state.count + 1})}>Increament</button>
//       <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicreament</button>
//     </div>
//     );
//   }
// }
// export default App;

// render k undr this.setstate karoga tou error ay ga
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     // console.log("Constructor");
//   }
//   render() {
//     this.setState({
//       count: this.state.count + 1
//     })
//     return(
//     <div style={{textAlign:'center'}}>
//       <Child count={this.state.count} />
//       <button onClick={()=>this.setState({count:this.state.count + 1})}>Increament</button>
//       <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicreament</button>
//     </div>
//     );
//   }
// }
// export default App;

// shouldComponentUpdate
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     // console.log("Constructor");
//   }
//   static getDerivedStateFromProps(props, state) {
//     console.log("getDerivedStateFromProps", state);
//     return null;
//   }
//   shouldComponentUpdate(){
//     return false
//   }
//   render() {
//     return(
//     <div style={{textAlign:'center'}}>
//       <Child count={this.state.count} />
//       <button onClick={()=>this.setState({count:this.state.count + 1})}>Increament</button>
//       <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicreament</button>
//     </div>
//     );
//   }
// }
// export default App;

// agr ap ko koi asiy condition lagani ho k ap chaty ha database se apka data uth k ajye or us k bad render chaly render ko yaha ruk sakty ha ya ap ye chaty ha sirf state
//  k undr ki value ko change karwao or render dubara na karo tou shouldComponentUpdate() k lifecyele may is tarha ruk sakty ha
// class App extends Component {
//     constructor() {
//       super();
//       this.state = {
//         count: 0,
//       };
//       // console.log("Constructor");
//     }
//     static getDerivedStateFromProps(props, state) {
//       console.log("getDerivedStateFromProps", state);
//       return null;
//     }
//     shouldComponentUpdate(){
//       return false
//     }
//     render() {
//       return(
//       <div style={{textAlign:'center'}}>
//         <Child count={this.state.count} />
//         <button onClick={()=>this.setState({count:this.state.count + 1})}>Increament</button>
//         <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicreament</button>
//       </div>
//       );
//     }
//   }
//   export default App;

// shouldComponentUpdate() condidition laga raha ho
// class App extends Component {
//     constructor() {
//       super();
//       this.state = {
//         count: 0,
//       };
//       // console.log("Constructor");
//     }
//     static getDerivedStateFromProps(props, state) {
//       console.log("getDerivedStateFromProps", state);
//       return null;
//     }
//     shouldComponentUpdate(){
//       if(this.state.count < 5){
//         return true
//       }else{
//         return false
//       }
//     }
//     render() {
//       return(
//       <div style={{textAlign:'center'}}>
//         <Child count={this.state.count} />
//         <button onClick={()=>this.setState({count:this.state.count + 1})}>Increament</button>
//         <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicreament</button>
//       </div>
//       );
//     }
//   }
//   export default App;

// class App extends Component {
//     constructor() {
//       super();
//       this.state = {
//         count: 0,
//       };
//       // console.log("Constructor");
//     }
//     static getDerivedStateFromProps(props, state) {
//       console.log("getDerivedStateFromProps", state);
//       return null;
//     }
//     shouldComponentUpdate(){
//       if(this.state.count < 5){
//         return true
//       }else{
//         return false
//       }
//     }
//     render() {
//       return(
//       <div style={{textAlign:'center'}}>
//         <Child count={this.state.count} />
//         <button onClick={()=>this.setState({count:this.state.count + 1})}>Increament</button>
//         <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicreament</button>
//       </div>
//       );
//     }
//   }
//   export default App;

// getSnapshotBeforeUpdate is may kya hota jab apka component update hota ha matlb apki jo state ha wo update hoti ha ya phir ap k jo props ha wo update hoty ha tou ye kya karta ha uski jo old value hoti ha uska snapshot ly k apny pass rakh ly ga
// getSnapshotBeforeUpdate() componentDidUpdate() ye dono related ha mtlb ek dusry k sth he work karty ha dono same work karty ha acha fark ye ha getSnapshotBeforeUpdate update hony se pehly ha Snapshot lyly ta ha componentDidUpdate kab chalta h jab update ho jata ha bus ye fark ha
// getSnapshotBeforeUpdate()
// class App extends Component {
//     constructor() {
//       super();
//       this.state = {
//         count: 0,
//       };
//       // console.log("Constructor");
//     }
//     getSnapshotBeforeUpdate(preProps,preState){
//         console.log("getSnapshotBeforeUpdate=>",preState)
//         return 10
//     }
//     componentDidUpdate(preProps,preState,snapshot){
//         console.log("componentDidUpdate=>",snapshot)
//         // return null
//     }
//     render() {
//       return(
//       <div style={{textAlign:'center'}}>
//         {/* <Child count={this.state.count} /> */}
//         <h1>{this.state.count}</h1>
//         <button onClick={()=>this.setState({count:this.state.count + 1})}>Increament</button>
//         <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicreament</button>
//       </div>
//       );
//     }
//   }
//   export default App;

// componentWillUnmount
// class App extends Component {
//     constructor() {
//       super();
//       this.state = {
//         count: 0,
//       };
//       // console.log("Constructor");
//     }
//     render() {
//       return(
//       <div style={{textAlign:'center'}}>
//         {this.state.count < 5 && <Child count={this.state.count} />}
//         <button onClick={()=>this.setState({count:this.state.count + 1})}>Increament</button>
//         <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicreament</button>
//       </div>
//       );
//     }
//   }
//   export default App;

// REDUX:-
// Redux javascript ki ek labrary ha jo k state mangement kam arahi ha state mangement se mtlb abhi jo component may state use karty ha ye bhi ek state ha constructor(){super();this.state = {count:0,}} or
// is ki manegment kaisy karty this.setstate karwa k isko change karwa dyty ha this.state.property ka nam lekh k get karlytty ha lekin ye wo state ha jo isy component may hamy mily ge
// agr ma chata ho k constructor(){super();this.state = {count:0,}} ye wali state mujhy Child component may mil jaye tou mujhy kya karna hoga is wali state ko props k zariye pass karna hoga lekin
// ub main chata ho koi aisi state bun jaye jo k Global ho puri Appliction may us state ko kahi par bhi get kar sako kahi se bhi us state ko update kar sako tou kitna acha hojaye ga abhi kya hamy karna par raha h
// constructor(){super();this.state = {count:0,}} agr ma state banao is component may or is ko main agr pass karna chaho kisi child component tou hamy Props k zariye pass karna phar raha ha acha aisa bhi ho
//  sakta mery pass koi aisa component ho k ek children ho us undr ek or children ho us undr ek or children ho  children to children kafi ziada nessted components mery pss ha tou agr ma parent component ki state ko nested component may pass karunga
// tou kafi mujhy time lag jaye ga ma pehly child ko props pass karunga phir us child se us k child ko props pass karunga kafi time lag jaye ga tou ub hum aisy state dekhny ja rahy ha jo k Globaly hamy puri
//  react application may mil jaye ge jis k liye hum use kar rahy ha Redux jo k javascript ki ek labrary ha Redux ko hum React k ilawa bhi use kar sakty ha Redux ek open source labrary ha jo k javascript ki ha redux ko ap dusry frame works may bhi use kar sakty ha
// jasiy k angular kisi ko ati ho angular may bhi use kar sakty ha is k ilawa kafi dusry frame work ha jis may ap Redux ko use kar sakty ho
// Redux hum start karty ha pharna

// Redux kafi impotant cheez ha agr ap is ko phar ly gy tou ap k bhot kaam aye ge Redux ki demand bhi bhot ha agr kisi ko react ati ho or react k sth sth Redux manegment bhi ati ho tou uski dabal demand ho jati ha or hamy kafi asani bhi ho jati ha Application may
// Redux use karny k liye humjo packege use kary gy React redux k name se ha
// two pacakeges install karny hogy redux k li React Redux install command: 1)"npm install react-redux" , 2)"npm install redux"
// two package ek sth bhi install kar sakty ha "npm install react-redux redux" is tarha
// Redux install k sth sth redux ka ek package wo bhi use karna hoga

// import {connect} from 'react-redux'

// class App extends Component {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     count: 0,
//   //   };
//   //   // console.log("Constructor");
//   // }
//   render() {
//     console.log("redux_data=>",this.props.email) //ghous@gmail.com
//     return null
//     // (
//     // <div style={{textAlign:'center'}}>
//       {/* {this.state.count < 5 && <Child count={this.state.count} />}
//       <button onClick={()=>this.setState({count:this.state.count + 1})}>Increament</button>
//       <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicreament</button> */}
//     // </div>
//     // );
//   }
// }
// const mapStateToProps = (state) => ({
//     name: state.name,
//     email:"ghous@gmail.com"
// })
// export default connect(mapStateToProps)(App);



// class App extends Component {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     count: 0,
//   //   };
//   //   // console.log("Constructor");
//   // }
//   render() {
//     console.log("redux_data=>",this.props.email) //ghous@gmail.com
//     console.log("redux_data=>",this.props.name) //Ghous
//     console.log("redux_data=>",this.props)
//     return null
//     // (
//     // <div style={{textAlign:'center'}}>
//       {/* {this.state.count < 5 && <Child count={this.state.count} />}
//       <button onClick={()=>this.setState({count:this.state.count + 1})}>Increament</button>
//       <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicreament</button> */}
//     // </div>
//     // );
//   }
// }
// const mapStateToProps = (state) => ({
//     name: state.name,
//     email:"ghous@gmail.com"
// })
// export default connect(mapStateToProps)(App);










// import { connect } from "react-redux";

// class App extends Component {
//   render() {
//     console.log("redux_data=>", this.props);
//     console.log("redux_username=>", this.props.username); //Ghousahmed
//     console.log("redux_email=>", this.props.email); //ghous@gmail.com
//     console.log("redux_app_name=>", this.props.app_name); //Chat App
//     return null;
//   }
// }
// const mapStateToProps = (state) => ({
//   username: state.auth.username,
//   email: state.auth.email,
//   app_name:state.app.app_name
// });
// export default connect(mapStateToProps)(App);






// action
// import { connect } from "react-redux";

// class App extends Component {
//   render() {
//     console.log("redux_data=>", this.props);
//     // console.log("redux_username=>", this.props.username); //Ghousahmed
//     // console.log("redux_email=>", this.props.email); //ghous@gmail.com
//     // console.log("redux_app_name=>", this.props.app_name); //Chat App
//     return <button onClick={()=>this.props.set_data()}>Set</button>
//   }
// }
// const mapStateToProps = (state) => ({
//   username: state.auth.username,
//   email: state.auth.email,
//   app_name:state.app.app_name
// });
// const mapDispatchToProps = (dispatch) =>({
//   set_data: () => console.log("hello")
// })
// export default connect(mapStateToProps,mapDispatchToProps)(App);






// import { connect } from "react-redux";
// import {set_data} from "./store/action/index"
// class App extends Component {
//   render() {
//     // console.log("redux_data=>", this.props);
//     // console.log("redux_username=>", this.props.username); //Ghousahmed
//     // console.log("redux_email=>", this.props.email); //ghous@gmail.com
//     // console.log("redux_app_name=>", this.props.app_name); //Chat App
//     return <button onClick={()=>this.props.set_data()}>Set</button>
//   }
// }
// // const mapStateToProps = (state) => ({
// //   username: state.auth.username,
// //   email: state.auth.email,
// //   app_name:state.app.app_name
// // });
// const mapDispatchToProps = (dispatch) =>({
//   set_data: () => set_data()
// })
// export default connect(null,mapDispatchToProps)(App);








//redux k undr fuctionaly karwanay k lie use karna hoga thunk
// import { connect } from "react-redux";
// import {set_data} from "./store/action/index"
// class App extends Component {
//   render() {
//     // console.log("redux_data=>", this.props);
//     // console.log("redux_username=>", this.props.username); //Ghousahmed
//     // console.log("redux_email=>", this.props.email); //ghous@gmail.com
//     // console.log("redux_app_name=>", this.props.app_name); //Chat App
//     return <button onClick={()=>this.props.set_data()}>Set</button>
//   }
// }
// const mapStateToProps = (state) => ({
//   // username: state.auth.username,
//   // email: state.auth.email,
//   // app_name:state.app.app_name
// });
// const mapDispatchToProps = (dispatch) =>({
//   set_data: () => dispatch(set_data())
// })
// export default connect(mapStateToProps,mapDispatchToProps)(App);




// dipatch
// import { connect } from "react-redux";
// import {set_data} from "./store/action/index"
// class App extends Component {
//   render() {
//     // console.log("redux_data=>", this.props);
//     // console.log("redux_username=>", this.props.username); //Ghousahmed
//     // console.log("redux_email=>", this.props.email); //ghous@gmail.com
//     // console.log("redux_app_name=>", this.props.app_name); //Chat App
//     return <button onClick={()=>this.props.set_data()}>Set</button>
//   }
// }
// const mapStateToProps = (state) => ({
//   // username: state.auth.username,
//   // email: state.auth.email,
//   // app_name:state.app.app_name
// });
// const mapDispatchToProps = (dispatch) =>({
//   set_data: () => dispatch(set_data())
// })
// export default connect(mapStateToProps,mapDispatchToProps)(App);


// ub main karna ye chata ho apny component se kuch data pass karna cha raha ho kis ko action ko 
import { connect } from "react-redux";
import {set_data} from "./store/action/index"
class App extends Component {
  render() {
    // console.log("redux_data=>", this.props);
    // console.log("redux_username=>", this.props.username); //Ghousahmed
    // console.log("redux_email=>", this.props.email); //ghous@gmail.com
    // console.log("redux_app_name=>", this.props.app_name); //Chat App
    return <button onClick={()=>this.props.set_data("Bhai data pass yaaha se bhi ja sakta ")}>Set</button>
  }
}
const mapStateToProps = (state) => ({
  // username: state.auth.username,
  // email: state.auth.email,
  // app_name:state.app.app_name
});
const mapDispatchToProps = (dispatch) =>({
  set_data: (data) => dispatch(set_data(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);