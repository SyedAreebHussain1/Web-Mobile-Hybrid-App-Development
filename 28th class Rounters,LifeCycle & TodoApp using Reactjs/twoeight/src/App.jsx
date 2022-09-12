import logo from "./logo.svg";
import React, { Component } from "react";
// import firebase from "./config/firebase";
import "./App.css";

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       todos: ["ghous","ahmed","umair"],
//       // value : ""
//     }
//   }
//   render(){
//     return(
//       <div>
//         <ul>
//           {this.state.todos.map((v,i)=>{
//            return( <li key={i}>{v}</li>)
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
// export default App;

// input k zariye value ly k add karoga
// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       todos: ["ghous","ahmed","umair"],
//       value : ""
//     }
//   }
//   render(){
//     let {todos,value} = this.state;
//     return(
//       <div>
//         <input onChange={(e)=>console.log(e.target.value)} type="text" placeholder='Enter Value' />
//         <button>Add Item</button>
//         <ul>
//           {todos.map((v,i)=>{
//            return( <li key={i}>{v}</li>)
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
// export default App;

// e.target = <input onChange={(e)=>console.log(e.target)} type="text" placeholder='Enter Value' />
// e.target.type = text
//e.target.placeholder = Enter Value
// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       todos: ["ghous","ahmed","umair"],
//       value : ""
//     }
//   }
//   render(){
//     let {todos,value} = this.state;
//     return(
//       <div>
//         <input onChange={(e)=>console.log(e.target.placeholder)} type="text" placeholder='Enter Value' />
//         <button>Add Item</button>
//         <ul>
//           {todos.map((v,i)=>{
//            return( <li key={i}>{v}</li>)
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
// export default App;

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       todos: ["ghous","ahmed","umair"],
//       value : ""
//     }
//   }
//   add_todo = () => {
//     console.log(this.state.value)
//   }
//   render(){
//     let {todos,value} = this.state;
//     return(
//       <div>
//         <input value={value} onChange={(e)=>this.setState({ value: e.target.value})} type="text" placeholder='Enter Value' />
//         <button onClick={this.add_todo}>Add Item</button>
//         <ul>
//           {todos.map((v,i)=>{
//            return( <li key={i}>{v}</li>)
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
// export default App;

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       todos: ["ghous","ahmed","umair"],
//       value : ""
//     }
//   }
//   add_todo = () => {
//     this.state.todos.push(this.state.value)
//     this.setState ({
//       todos : this.state.todos
//     })
//   }

//   render(){
//     let {todos,value} = this.state;
//     return(
//       <div>
//         <input value={value} onChange={(e)=>this.setState({ value: e.target.value})} type="text" placeholder='Enter Value' />
//         <button onClick={this.add_todo}>Add Item</button>
//         <ul>
//           {todos.map((v,i)=>{
//            return( <li key={i}>{v}</li>)
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
// export default App;

// seprate operator [...old,new ]
// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       todos: ["ghous","ahmed","umair"],
//       value : ""
//     }
//   }
//   add_todo = () => {
//     this.setState ({
//       todos : [...this.state.todos,this.state.value]
//     })
//   }

//   render(){
//     let {todos,value} = this.state;
//     return(
//       <div>
//         <input value={value} onChange={(e)=>this.setState({ value: e.target.value})} type="text" placeholder='Enter Value' />
//         <button onClick={this.add_todo}>Add Item</button>
//         <ul>
//           {todos.map((v,i)=>{
//            return( <li key={i}>{v}</li>)
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
// export default App;

// empty input
// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       todos: [],
//       value : ''
//     }
//   }
//   add_todo = () => {
//     this.setState ({
//       todos : [...this.state.todos,this.state.value],
//       value: ''
//     })
//   }

//   render(){
//     let {todos,value} = this.state;
//     return(
//       <div>
//         <input value={value} onChange={(e)=>this.setState({ value: e.target.value})} type="text" placeholder='Enter Value' />
//         <button onClick={this.add_todo}>Add Item</button>
//         <ul>
//           {todos.map((v,i)=>{
//            return( <li key={i}>{v}</li>)
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
// export default App;

// ub hum dekhy gy delete kaisy hoga javascript may apkko yadd hoga delete k liye humy ek <button> banana hoga delete k nam ka
// index numbr hamara pass agya
// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       todos: ["ghous"],
//       value : ''
//     }
//   }
//   add_todo = () => {
//     this.setState ({
//       todos : [...this.state.todos,this.state.value],
//       value: ''
//     })
//   }
//   delete_todo = (index) => {
//       // [this.state.todos]= this.state.value.splice(i,0)
//     console.log(index)
//   }
//   render(){
//     let {todos,value} = this.state;
//     return(
//       <div>
//         <input value={value} onChange={(e)=>this.setState({ value: e.target.value})} type="text" placeholder='Enter Value' />
//         <button onClick={this.add_todo}>Add Item</button>
//         <ul>
//           {todos.map((v,i)=>{
//            return( <li key={i}>{v} <button onClick={()=>this.delete_todo(i)}>Delete</button></li>)
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
// export default App;

// index numbr hamara pass agya
// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       todos: ["ghous","ahmed"],
//       value : ''
//     }
//   }
//   add_todo = () => {
//     this.setState ({
//       todos : [...this.state.todos,this.state.value],
//       value: ''
//     })
//   }
//   delete_todo = (index) => {
//     this.state.todos.splice(index,1)
//     this.setState({
//       todos : this.state.todos
//     })
//   }
//   render(){
//     let {todos,value} = this.state;
//     return(
//       <div>
//         <input value={value} onChange={(e)=>this.setState({ value: e.target.value})} type="text" placeholder='Enter Value' />
//         <button onClick={this.add_todo}>Add Item</button>
//         <ul>
//           {todos.map((v,i)=>{
//            return( <li key={i}>{v} <button onClick={()=>this.delete_todo(i)}>Delete</button></li>)
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
// export default App;

// delete all
// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       todos: ["ghous","ahmed"],
//       value : ''
//     }
//   }
//   add_todo = () => {
//     this.setState ({
//       todos : [...this.state.todos,this.state.value],
//       value: ''
//     })
//   }
//   delete_todo = (index) => {
//     this.state.todos.splice(index,1)
//     this.setState({
//       todos : this.state.todos
//     })
//   }
//   delete_all = () => {
//     this.setState({
//       todos: []
//     })
//   }
//   render(){
//     let {todos,value} = this.state;
//     return(
//       <div>
//         <input value={value} onChange={(e)=>this.setState({ value: e.target.value})} type="text" placeholder='Enter Value' />
//         <button onClick={this.add_todo}>Add Item</button>
//         <button onClick={this.delete_all}>Delete All</button>
//         <ul>
//           {todos.map((v,i)=>{
//            return( <li key={i}>{v} <button onClick={()=>this.delete_todo(i)}>Delete</button></li>)
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
// export default App;

// edit promt
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: ["ghous", "ahmed"],
//       value: "",
//     };
//   }
//   add_todo = () => {
//     this.setState({
//       todos: [...this.state.todos, this.state.value],
//       value: "",
//     });
//   };
//   delete_todo = (index) => {
//     this.state.todos.splice(index, 1);
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//   edit_todo = (index) => {
//     var updated_value = prompt("Enter Value");
//     this.state.todos[index] = updated_value;
//     this.setState({
//       todos: this.state.todos,
//     });
//     // console.log(index)
//   };
//   delete_all = () => {
//     this.setState({
//       todos: [],
//     });
//   };
//   render() {
//     let { todos, value } = this.state;
//     return (
//       <div>
//         <input
//           value={value}
//           onChange={(e) => this.setState({ value: e.target.value })}
//           type="text"
//           placeholder="Enter Value"
//         />
//         <button onClick={this.add_todo}>Add Item</button>
//         <button onClick={this.delete_all}>Delete All</button>
//         <ul>
//           {todos.map((v, i) => {
//             return (
//               <li key={i}>
//                 {v}
//                 <button onClick={() => this.edit_todo(i)}>Edit</button>
//                 <button onClick={() => this.delete_todo(i)}>Delete</button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
// export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [],
//       value1: "",
//     };
//   }
//   add_todo = () => {
//     this.setState({
//       todos: [...this.state.todos, this.state.value1],
//       value1: "",
//     });
//   };
//   delete_all = () => {
//     this.setState({
//       todos: [],
//     });
//   };
//   delete_todo = (index) => {
//     this.state.todos.splice(index, 1);
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//   edit_todo = (index) => {
//     var update_todo = prompt("Enter Value");
//     this.state.todos[index] = update_todo;
//     this.setState({
//       todos: this.state.todos
//     });
//   };
//   render() {
//     let { todos, value1 } = this.state;
//     return (
//       <div>
//         <input
//           value={value1}
//           type="text"
//           onChange={(e) => this.setState({ value1: e.target.value })}
//           placeholder="Enter Value"
//         />
//         <button onClick={this.add_todo}>Add Todo</button>
//         <button onClick={this.delete_all}>Delete All</button>
//         <ul>
//           {todos.map((v, i) => {
//             return (
//               <li key={i}>
//                 {v} <button onClick={() => this.delete_todo(i)}>Delete</button>
//                 <button onClick={() => this.edit_todo(i)}>Edit</button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
// export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: ["ghous", "ahmed"],
//       value1: "",
//     };
//   }
//   delete_all = () => {
//     this.setState({
//       todos: [],
//     });
//   };
//   add_todo = () => {
//     this.setState({
//       // destructing
//       todos: [...this.state.todos, this.state.value1],
//       value1: "",
//     });
//   };
//   delete_todo = (i) => {
//     this.state.todos.splice(i, 1);
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//   edit_todo = (i) => {
//     var update_todo = prompt("Enter Value");
//     this.state.todos[i] = update_todo;
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <input
//           value={this.state.value1}
//           type="text"
//           onChange={(e) => this.setState({ value1: e.target.value })}
//           placeholder="Enter Value"
//           name=""
//           id=""
//         />
//         <button onClick={this.add_todo}>Add Todo</button>
//         <button onClick={this.delete_all}>Delete All</button>
//         <ul>
//           {this.state.todos.map((v, index) => {
//             return (
//               <li key={index}>
//                 {v}
//                 <button onClick={() => this.edit_todo(index)}>Edit</button>
//                 <button onClick={() => this.delete_todo(index)}>Delete</button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
// export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: ["Ghous","Ahmed"],
//       value1: ""
//     };

//   }
//   add_todo = () => {
//     this.setState({
//      todos: [...this.state.todos,this.state.value1],
//      value1: ""
//     })
//   }
//   delete_all = () =>{
//     this.setState({
//       todos:[]
//     })
//   }
//   edit_todo = (index) =>{
//     var update_value = prompt("Edit Value")
//    this.state.todos[index] = update_value
//    this.setState({
//     todos: this.state.todos
//    })
//   }
//   delete_todo = (index) =>{
//     this.state.todos.splice(index,1)
//     this.setState({
//      todos: this.state.todos
//     })
//   }
//   render(){
//     let {todos,value1} = this.state
//     return(
//       <div>
//         <input value={value1} onChange={(e)=>this.setState({value1:e.target.value})} type="text" placeholder="Enter Value"  />
//         <button onClick={this.add_todo}>Add Todo</button>
//         <button onClick={this.delete_all}>Delete All</button>
//         <ul>
//           {todos.map((v,i)=>{
//             return(
//               <li key={i}>{v}
//               <button onClick={()=>this.edit_todo(i)}>Edit Todo</button>
//               <button onClick={()=>this.delete_todo(i)}>Delete Todo</button>
//               </li>
//             )
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
// export default App

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [{title:"ghous"},{title:"ahmed"}],
//       value1: ""
//     };

//   }
//   add_todo = () => {
//     let obj = {title:this.state.value1}
//     this.setState({
//      todos: [...this.state.todos,obj],
//      value1: ""
//     })
//   }
//   delete_all = () =>{
//     this.setState({
//       todos:[]
//     })
//   }
//   edit_todo = (index) =>{
//     var update_value = prompt("Edit Value")
//    this.state.todos[index] = update_value
//    this.setState({
//     todos: this.state.todos
//    })
//   }
//   delete_todo = (index) =>{
//     this.state.todos.splice(index,1)
//     this.setState({
//      todos: this.state.todos
//     })
//   }
//   render(){
//     let {todos,value1} = this.state
//     return(
//       <div>
//         <input value={value1} onChange={(e)=>this.setState({value1:e.target.value})} type="text" placeholder="Enter Value"  />
//         <button onClick={this.add_todo}>Add Todo</button>
//         <button onClick={this.delete_all}>Delete All</button>
//         <ul>
//           {todos.map((v,i)=>{
//             return(
//               <li key={i}>{v.title}
//               <button onClick={()=>this.edit_todo(i)}>Edit Todo</button>
//               <button onClick={()=>this.delete_todo(i)}>Delete Todo</button>
//               </li>
//             )
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
// export default App

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [{title:"ghous" , edit:false},{title:"ahmed", edit:false}],
//       value1: "",
//     };

//   }
//   add_todo = () => {
//     let obj = {title:this.state.value1}
//     this.setState({
//      todos: [...this.state.todos,obj],
//      value1: ""
//     })
//   }
//   delete_all = () =>{
//     this.setState({
//       todos:[]
//     })
//   }
//   delete_todo = (index) =>{
//     this.state.todos.splice(index,1)
//     this.setState({
//       todos: this.state.todos
//     })
//   }
//   edit_todo = (index,val) =>{
//     this.state.todos[index].edit = true;
//     this.setState({
//       todos:this.state.todos
//     })
//   }
//   update_value = (index) =>{
//     this.state.todos[index].edit = false;
//     this.setState({
//       todos: this.state.todos
//     })
//   }
//   handleChange = (e,index) => {
//     this.state.todos[index].title = e.target.value
//     this.setState({
//     todos:  this.state.todos
//     })
//   }
//   render(){
//     let {todos,value1} = this.state
//     return(
//       <div>
//         <input value={value1} onChange={(e)=>this.setState({value1:e.target.value})} type="text" placeholder="Enter Value"  />
//         <button onClick={this.add_todo}>Add Todo</button>
//         <button onClick={this.delete_all}>Delete All</button>
//         <ul>
//           {todos.map((v,i)=>{
//             return(
//               <li key={i}>
//                 {v.edit? <input value={v.title} onChange={(e)=> this.handleChange(e,i)} type="text"/> : v.title }
//              {v.edit ?
//              <button onClick={()=>this.update_value(i)}>Update</button>
//              :
//              <button onClick={()=>this.edit_todo(i,v.title)}>Edit Todo</button>
//              }
//              <button onClick={()=>this.delete_todo(i)}>Delete Todo</button>
//               </li>
//             )
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
// export default App

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       // object bana diya ha
//       todos: [
//         { title: "ghous", edit: false },
//         { title: "ahmed", edit: false },
//       ],
//       value1: "",
//     };
//   }
//   add_todo = () => {
//     let obj = { title: this.state.value1 };
//     this.setState({
//       todos: [...this.state.todos, obj],
//       value1: "",
//     });
//   };
//   delete_todo = (index) => {
//     this.state.todos.splice(index, 1);
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//   edit_todo = (index, val) => {
//     this.state.todos[index].edit = true;
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//   delete_all = () => {
//     this.setState({
//       todos: [],
//     });
//   };
//   handleChange = (e,index) => {
//     this.state.todos[index].title = e.target.value;
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//   update = (index) => {
//     this.state.todos[index].edit = false;
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//   render() {
//     let { todos, value1 } = this.state;
//     return (
//       <div>
//         <input
//           value={value1}
//           onChange={(e) => this.setState({ value1: e.target.value })}
//           type="text"
//           placeholder="Enter Value"
//         />
//         <button onClick={this.add_todo}>Add Item</button>
//         <button onClick={this.delete_all}>Delete All</button>
//         <ul>
//           {todos.map((v, i) => {
//             return (
//               <li key={i}>
//                 {v.edit ? (
//                   <input
//                     type="text"
//                     onChange={(e) => this.handleChange(e, i)}
//                     value={v.title}
//                   />
//                 ) : (
//                   v.title
//                 )}
//                 {v.edit ? (
//                   <button onClick={() => this.update(i)}>Update</button>
//                 ) : (
//                   <button onClick={() => this.edit_todo(i, v.title)}>
//                     Edit
//                   </button>
//                 )}
//                 <button onClick={() => this.delete_todo(i)}>Delete</button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
// export default App;

// input k zariye value get
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [
//         { title: "ghous", edit: false },
//         { title: "ahmed", edit: false },
//       ],
//       value1: "",
//     };
//   }
//   add_todo = () => {
//     let obj = { title: this.state.value1 };
//     this.setState({
//       todos: [...this.state.todos, obj],
//       value1: "",
//     });
//   };
//   delete_all = () => {
//     this.setState({
//       todos: [],
//     });
//   };
//   delete_todo = (index) => {
//     this.state.todos.splice(index, 1);
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//   edit_todo = (index, val) => {
//     this.state.todos[index].edit = true;
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//   update_value = (index) => {
//     this.state.todos[index].edit = false;
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//   handleChange = (e, index) => {
//     this.state.todos[index].title = e.target.value;
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//   render() {
//     let { todos, value1 } = this.state;
//     return (
//       <div>
//         <input
//           value={value1}
//           onChange={(e) => this.setState({ value1: e.target.value })}
//           type="text"
//           placeholder="Enter Value"
//         />
//         <button onClick={this.add_todo}>Add Todo</button>
//         <button onClick={this.delete_all}>Delete All</button>
//         <ul>
//           {todos.map((v, i) => {
//             return (
//               <li key={i}>
//                 {v.edit ? (
//                   <input
//                     value={v.title}
//                     onChange={(e) => this.handleChange(e, i)}
//                     type="text"
//                   />
//                 ) : (
//                   v.title
//                 )}
//                 {v.edit ? (
//                   <button onClick={() => this.update_value(i)}>Update</button>
//                 ) : (
//                   <button onClick={() => this.edit_todo(i, v.title)}>
//                     Edit Todo
//                   </button>
//                 )}
//                 <button onClick={() => this.delete_todo(i)}>Delete Todo</button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
// export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: ["Ghous", "Ahmed"],
//       value1: "",
//     };
//   }
//   add_todo = () => {
//     this.setState({
//       todos: [...this.state.todos, this.state.value1],
//       value1: "",
//     });
//   };
//   delete_all = () => {
//     this.setState({
//       todos: [],
//     });
//   };
//   delete_todo = (index) => {
//     this.state.todos.splice(index, 1);
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//   edit_todo = (index) => {
//     var update_todo = prompt("Enter VAlue");
//     this.state.todos[index] = update_todo
//     this.setState({
//     todos: this.state.todos
//     });
//   };
//   render() {
//     let { todos, value1 } = this.state;
//     return (
//       <div>
//         <input
//           value={value1}
//           onChange={(e) => this.setState({ value1: e.target.value })}
//           placeholder="Enter Value"
//           type="text"
//         />
//         <button onClick={this.add_todo}>Add Todo</button>
//         <button onClick={this.delete_all}>Delete All</button>
//         <ul>
//           {todos.map((v, i) => {
//             return (
//               <li key={i}>
//                 {v}
//                 <button onClick={() => this.edit_todo(i)}>Edit</button>
//                 <button onClick={() => this.delete_todo(i)}>Delete</button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
// export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [{title:"ghous",edit:false},{title:"ahmed",edit:false}],
//       value1: "",
//     };
//   }
//   add_todo = () => {
//     let obj = { title: this.state.value1 };
//     this.setState({
//       todos: [...this.state.todos, obj],
//       value1: "",
//     });
//   };
//   delete_all = () => {
//     this.setState({
//       todos: [],
//     });
//   };
//   delete_todo = (index) => {
//     this.state.todos.splice(index, 1);
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//    edit_todo = (index, val) => {
//     this.state.todos[index].edit = true;
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//   update_value = (index) => {
//     this.state.todos[index].edit = false;
//     this.setState({
//       todos: this.state.todos,
//     });
//   }
//   handlechange = (e,index) => {
//     this.state.todos[index].title = e.target.value;
//         this.setState({
//           todos: this.state.todos,
//         });
//   }
//   render() {
//     let { todos, value1 } = this.state;
//     return (
//       <div>
//         <input
//           value={value1}
//           onChange={(e) => this.setState({ value1: e.target.value })}
//           placeholder="Enter Value"
//           type="text"
//         />
//         <button onClick={this.add_todo}>Add Todo</button>
//         <button onClick={this.delete_all}>Delete All</button>
//         <ul>
//           {todos.map((v, i) => {
//             return (
//               <li key={i}>
//                 {v.edit ? ( <input value={v.title} onChange={(e)=> this.handlechange(e,i)} /> )
//                 :
//                 (v.title)}
//                 {v.edit? ( <button onClick={()=>this.update_value(i)}>Update</button> )
//                 :
//                 ( <button onClick={() => this.edit_todo(i,v.title)}>Edit</button>
//                  )}
//                 <button onClick={() => this.delete_todo(i)}>Delete</button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
// export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [
//         { title: "ghous", edit: false },
//         { title: "ahmed", edit: false },
//       ],
//       value1: "",
//     };
//   }
//   add_todo = () => {
//     let obj = { title: this.state.value1 };
//     this.setState({
//       todos: [...this.state.todos, obj],
//       value1: "",
//     });
//   };
//   delete_all = () => {
//     this.setState({
//       todos: [],
//     });
//   };
//   delete_todo = (index) => {
//     this.state.todos.splice(index, 1);
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//   edit_todo = (index, val) => {
//     this.state.todos[index].edit = true;
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//   update_value = (index) => {
//     this.state.todos[index].edit = false;
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//   handleChange = (e, index) => {
//     this.state.todos[index].title = e.target.value;
//     this.setState({
//       todos: this.state.todos,
//     });
//   };
//   render() {
//     let { todos, value1 } = this.state;
//     return (
//       <div>
//         <input
//           value={value1}
//           onChange={(e) => this.setState({ value1: e.target.value })}
//           type="text"
//           placeholder="Enter Value"
//         />
//         <button onClick={this.add_todo}>Add Todo</button>
//         <button onClick={this.delete_all}>Delete All</button>
//         <ul>
//           {todos.map((v, i) => {
//             return (
//               <li key={i}>
//                 {v.edit ? (
//                   <input value={v.title} onChange={(e) => this.handleChange(e, i)} type="text" /> )
//                   :
//                   ( v.title )}
//                 {v.edit ? ( <button onClick={() => this.update_value(i)}>Update</button> )
//                 :
//                 ( <button onClick={() => this.edit_todo(i, v.title)}>Edit Todo</button>
//                )}
//                 <button onClick={() => this.delete_todo(i)}>Delete Todo</button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
// export default App;

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       todos : [],
//       value1 : ""
//     }
//   }
//   add_todo = () => {
//     let obj = {title: this.state.value1}
//     this.setState({
//       todos: [...this.state.todos,obj],
//       value1:""
//     })
//   }
//   delete_all = () => {
//     this.setState({
//       todos:[]
//     })
//   }
//   delete_todo = (index) => {
//     this.state.todos.splice(index,1)
//     this.setState({
//     todos:  this.state.todos
//     })
//   }
//   edit_todo = (index) =>{
//     this.state.todos[index].edit = true
//     this.setState({
//       todos:this.state.todos
//     })
//   }
//   update_value = (index) => {
//     this.state.todos[index].edit = false
//     this.setState({
//       todos:this.state.todos
//     })
//   }
//   handlechange = (e,index) => {
//     this.state.todos[index].title = e.target.value;
//     this.setState({
//       todos: this.state.todos
//     })
//   }
//   render(){
//     let {todos,value1} = this.state
//   return(
//   <div>
//     <input value={value1} onChange={(e)=>this.setState({value1: e.target.value})} type="text" placeholder="Enter Value" />
//     <button onClick={this.add_todo}>Add</button>
//     <button onClick={this.delete_all}>Delete All</button>
//     <ul>
//       {todos.map((v,i)=>{
//         return(
//           <li key={i}>
//             {v.edit ? (<input onChange={(e)=> this.handlechange(e,i)} value={v.title} type="text"/> ) : (v.title) }
//             {v.edit ? (<button onClick={()=>this.update_value(i)}>Update</button>):(<button onClick={()=>this.edit_todo(i)}>Edit</button>)}

//           <button onClick={()=>this.delete_todo(i)}>Delete</button>
//           </li>
//         )
//       })}
//     </ul>
//   </div>
//   )}
// }
// export default App

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [
//         { title: "ghous", edit: false },
//         { title: "umair", edit: false },
//       ],
//       value1: "",
//     };
//   }
//   add_todo = () => {
//     let obj = {title: this.state.value1};
//     this.setState({
//       todos: [...this.state.todos, obj],
//       value1: "",
//     });
//   };
//   delete_all = () => {
//     this.setState({
//       todos:[]
//     })
//   }
//   delete_todo = (index) => {
//     this.state.todos.splice(index,1)
//     this.setState({
//      todos: this.state.todos
//     })
//   }
//   edit_todo = (index) =>{
//     this.state.todos[index].edit = true
//     this.setState({
//      todos: this.state.todos
//     })
//   }
//   update = (index) =>{
//     this.state.todos[index].edit = false
//     this.setState({
//      todos: this.state.todos
//     })
//   }
//   handlechange = (e,index) => {
//     this.state.todos[index].title = e.target.value
//     this.setState({
//       todos:this.state.todos
//     })
//   }
//   render() {
//     let { todos, value1 } = this.state;
//     return (
//       <div>
//         <input
//           value={value1}
//           onChange={(e) => this.setState({ value1: e.target.value })}
//           type="text"
//           placeholder="Enter Value"
//         />
//         <button onClick={this.add_todo}>Add</button>
//         <button onClick={this.delete_all}>Delete All</button>
//         <ul>
//           {todos.map((v, i) => {
//             return( 
//             <li key={i}>
//               {v.edit ? (<input value={v.title} onChange={(e)=>this.handlechange(e,i)} type="text" placeholder="Update"/>) : (v.title)}
//               {v.edit ? (<button onClick={()=>this.update(i)}> Update</button>) : (<button onClick={()=>this.edit_todo(i)}>Edit</button>)}
//               <button onClick={()=>this.delete_todo(i)}>Delete</button>
//             </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
// export default App;




// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       todos: [{title: "ghous",edit:false},{title: "umair" , edit:false}],
//       value1: ""
//     }
//   }
//   // let arr =[1,2,3,4,5]
//   // arr[2]
//   delete_all = () => {
//     this.setState({
//       todos:[]
//     })
//   }
//   add_todo = () => {
//     let obj = {title : this.state.value1}
//     this.setState({
//       todos: [...this.state.todos,obj],
//       value1: ""
//     })
//   }
//   delete_todo = (index) => {
//     this.state.todos.splice(index,1)
//     this.setState({
//       todos: this.state.todos
//     })
//   }
//   edit_todo = (index) =>{
//     this.state.todos[0].edit = true
//     this.setState({
//       todos: this.state.todos
//     })
//   }
//   update_todos = (index) =>{
//     this.state.todos[index].edit = false
//     this.setState({
//       todos: this.state.todos
//     })
//   }
//   handleChange = (e,index) => {
//     this.state.todos[index].title = e.target.value
//     this.setState({
//       todos: this.state.todos
//     })
//   }
//   render(){
//     let {todos , value1 } = this.state
//     return(
//       <div>
//         <input value={value1} onChange={(e)=>this.setState({value1 : e.target.value})}  type="text" placeholder="Enter Value" name="" id="" />
//        <button onClick={this.add_todo}>Add</button> <button onClick={this.delete_all}>Delete All</button>
//         <ul>
//           {todos.map((v,i)=> {
//             return <li key={i}> 
//             {v.edit ? (<input value={v.title} onChange={(e)=> this.handleChange(e,i)} type="text" placeholder="Edit Todo"/>) : (v.title)}
//             {v.edit ? (<button onClick={()=> this.update_todos(i)}>Update</button>) : ( <button onClick={()=> this.edit_todo(i)}>Edit</button> )}
//             <button onClick={()=>this.delete_todo(i)}>Delete</button>
//             </li>
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
// export default App

class App extends Component{
  constructor(){
    super()
    this.state = {
      todos: [{title: "ghous",edit:false},{title: "umair" , edit:false}],
      value1: ""
    }
  }
  delete_all = () => {
    this.setState({
      todos:[]
    })
  }
  add_todo = () => {
    let obj = {title : this.state.value1}
    firebase.database.ref('/').child('todos')
    .push(obj)
    this.setState({
      todos: [...this.state.todos,obj],
      value1: ""
    })
  }
  delete_todo = (index) => {
    this.state.todos.splice(index,1)
    this.setState({
      todos: this.state.todos
    })
  }
  edit_todo = (index) =>{
    this.state.todos[index].edit = true
    this.setState({
      todos: this.state.todos
    })
  }
  update_todos = (index) =>{
    this.state.todos[index].edit = false
    this.setState({
      todos: this.state.todos
    })
  }
  handleChange = (e,index) => {
    this.state.todos[index].title = e.target.value
    this.setState({
      todos: this.state.todos
    })
  }
  render(){
    console.log(firebase)
    let {todos , value1 } = this.state
    return(
      <div>
        <input value={value1} onChange={(e)=>this.setState({value1 : e.target.value})}  type="text" placeholder="Enter Value" name="" id="" />
       <button onClick={this.add_todo}>Add</button> <button onClick={this.delete_all}>Delete All</button>
        <ul>
          {todos.map((v,i)=> {
            return <li key={i}> 
            {v.edit ? (<input value={v.title} onChange={(e)=> this.handleChange(e,i)} type="text" placeholder="Edit Todo"/>) : (v.title)}
            {v.edit ? (<button onClick={()=> this.update_todos(i)}>Update</button>) : ( <button onClick={()=> this.edit_todo(i)}>Edit</button> )}
            <button onClick={()=>this.delete_todo(i)}>Delete</button>
            </li>
          })}
        </ul>
      </div>
    )
  }
}
export default App






// rounting

// import AppRouter from "./config/route";

//  class App extends Component{
//   render(){
//     return(
//       <div>
//         <h1>App</h1>
//       <AppRouter />
//       </div>
//     )
//   }
//  }

// export default App








