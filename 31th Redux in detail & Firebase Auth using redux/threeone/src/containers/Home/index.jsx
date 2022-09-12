import React from "react";
import './style.css';
import {connect} from "react-redux"




// Todo
// class Home extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       todos: ["ghous", "basit"],
//       value1: ""
//     }
//   }
  
//   add_todo = () => {
//     this.setState({
//       todos: [...this.state.todos, this.state.value1],
//       value1:''
//     })
//   }
//   delete_all = () => {
//     this.setState({
//       todos:[]
//     })
//   }

//   edit_value = (index) => {
//     const edit_value_promt = prompt("EDIT TODO")
//     this.state.todos[index] = edit_value_promt
//     this.setState({
//       todos: this.state.todos
//     })
//   }
//   delete_todo = (index) => {
//     this.state.todos.splice(index,1)
//     this.setState({
//       todos: this.state.todos
//     })
//   }
//   render() {
//     let { todos, value1 } = this.state
//     return (
//       <div>
//         <input value={value1} onChange={(e) => this.setState({ value1: e.target.value })} type="text" placeholder="TODOS" />
//         <button onClick={this.add_todo}>ADD TODO</button>
//         <button onClick={this.delete_all}>DELETE ALL</button>
//         <ul>
//           {todos.map((v, i) => {
//             return (
//               <li key={i}>{v} <button onClick={() => this.edit_value(i)}>Edit</button> <button onClick={() => this.delete_todo(i)}>Delete</button></li>
//             )
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
// export default Home


// class Home extends React.Component{
//     render(){
//       console.log("redux-data",this.props)
//       console.log("redux-data",this.props.users)
//       return(
//         <div>
//           <h1>{this.props.users[0].page}</h1>
//           <h1>Name: {this.props.users[0].name}</h1>
//           <h1>Email: {this.props.users[0].email}</h1>
//         </div>
//       )
//     }
//   }
//   const mapStateToProps = (state, props) => ({
//     users: state.users
//   });
//   export default connect(mapStateToProps,null) (Home)




// class Home extends React.Component{
//   render(){
//     console.log("redux-Props==>",this.props)
//     console.log("redux-Props==>",this.props.users)
//     return(
//       <div>
//         <h1>Name0: {this.props.users[0].name}</h1>
//         <h1>Email0: {this.props.users[0].email}</h1>
//         <h1>Name1: {this.props.users[1].name}</h1>
//         <h1>Email1: {this.props.users[1].email}</h1>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state, props) => ({
//   users: state.users
// });
// export default connect(mapStateToProps,null) (Home)




// class Home extends React.Component{
//   render(){
//     return(
//       <div>
//         <button onClick={()=>this.props.set_data()}>Set Data</button>
//       </div>
//     )
//   }
// }
// const mapDispatchToProps = (dispatch) => ({
//   set_data: () => console.log("hello")
// })
// export default connect(null,mapDispatchToProps) (Home)



// import set_data from '../../store/action'
// class Home extends React.Component{
//   render(){
//     console.log("redux-Props==>",this.props)
//     // console.log("redux-Props==>",this.props.users)
//     return(
//       <div>
//         <button onClick={()=>this.props.set_data()}>Set Data</button>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state, props) => ({
//   users: state.users
// });
// const mapDispatchToProps = (dispatch) => ({
//   set_data: () => set_data()
// })
// export default connect(mapStateToProps,mapDispatchToProps) (Home)





// import {set_data} from '../../store/action'
// class Home extends React.Component{
//   render(){
//     console.log("redux-Props==>",this.props)
//     // console.log("redux-Props==>",this.props.users)
//     return(
//       <div>
//         {/* props ma ny Q lekha mapDispatchToProps k undr jo bhi hum property bana rahy ha wo props may ja k set ho rahi ha tou mai ny set_data ki ek property banaye or us k under ye wala function rakh diya (data) => dispatch(set_data(data))  */}
//         <button onClick={()=>this.props.set_data({name:"umair",email:"umair@gmail.com"})}>Set Data</button>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state, props) => ({
//   users: state.users
// });
// // action ko call karny k liye hum mapDispatchToProps ka bhi ek function banaye gy 
// // 
// const mapDispatchToProps = (dispatch) => ({
//   set_data: (data) => dispatch(set_data(data))
// })
// export default connect(mapStateToProps,mapDispatchToProps) (Home)






// import {set_data} from '../../store/action'
// class Home extends React.Component{
//   render(){
//     console.log("render-redux-Props==>",this.props)
//     console.log("redux-Props-users==>",this.props.users)
//     // console.log("redux-Props==>",this.props.users)
//     let user = {name:"umair",email:"umair@gmail.com"}
//     return(
//       <div>
//         {/* props ma ny Q lekha mapDispatchToProps k undr jo bhi hum property bana rahy ha wo props may ja k set ho rahi ha tou mai ny set_data ki ek property banaye or us k under ye wala function rakh diya (data) => dispatch(set_data(data))  */}
//         <button onClick={()=>this.props.set_data(user)}>Set Data</button>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state, props) => ({
//   users: state.users
// });
// // action ko call karny k liye hum mapDispatchToProps ka bhi ek function banaye gy 
// // 
// const mapDispatchToProps = (dispatch) => ({
//   set_data: (data) => dispatch(set_data(data))
// })
// export default connect(mapStateToProps,mapDispatchToProps) (Home)






// import {set_data} from '../../store/action'
// class Home extends React.Component{
//   render(){
//     console.log("redux-data",this.props)
//     // console.log("redux-data",this.props.users)
//     let user = {name:'umair',email:'umair@gmail.com'}
//     return(
//       <div>
//         <h1>Home</h1>
//         <button onClick={()=>this.props.set_data(user)}>Set Data</button>
//       </div>
//     )
//   }
// }
// const mapStateToProps =(state) => ({
//   users: state.users
// })
// const mapDispatchToProps = (dispatch) => ({
//   set_data: (data) => dispatch(set_data(data))
// })
// export default connect(mapStateToProps,mapDispatchToProps) (Home)






// import {set_data} from '../../store/action'
// class Home extends React.Component{
//   static getDerivedStateFromProps(props,state){
//     console.log("updated_Props==>",props)
//     return {

//     }
//   }
//   render(){
//     console.log("render-redux-Props==>",this.props)
//     // console.log("redux-Props-users==>",this.props.users)
//     // console.log("redux-Props==>",this.props.users)
//     let user = {name:"umair",email:"umair@gmail.com"}
//     return(
//       <div>
//         {/* props ma ny Q lekha mapDispatchToProps k undr jo bhi hum property bana rahy ha wo props may ja k set ho rahi ha tou mai ny set_data ki ek property banaye or us k under ye wala function rakh diya (data) => dispatch(set_data(data))  */}
//         <h2>Home</h2>
//         <button onClick={()=>this.props.setdata(user)}>Set Data</button>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state) => ({
//   // (state) k perametr k undr mujhy puri redux ka data mil jaye ga
//   users: state.users
// });
// // action ko call karny k liye hum mapDispatchToProps ka bhi ek function banaye gy 
// // 
// const mapDispatchToProps = (dispatch) => ({
//   setdata: (data) => dispatch(set_data(data))
// })
// export default connect(mapStateToProps,mapDispatchToProps) (Home)








// import {set_data} from '../../store/action'
// class Home extends React.Component{
//   render(){
//     console.log("Home-Props==>",this.props)
//     // console.log("redux-Props-users==>",this.props.users)
//     // console.log("redux-Props==>",this.props.users)
//     return(
//       <div>
//         {/* props ma ny Q lekha mapDispatchToProps k undr jo bhi hum property bana rahy ha wo props may ja k set ho rahi ha tou mai ny set_data ki ek property banaye or us k under ye wala function rakh diya (data) => dispatch(set_data(data))  */}
//         <h2>Home</h2>
//         <button onClick={()=>this.props.setdata()}>Set Data</button>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state) => ({
//   // (state) k perametr k undr mujhy puri redux ka data mil jaye ga
//   users: state.users
// });
// // action ko call karny k liye hum mapDispatchToProps ka bhi ek function banaye gy 
// // 
// const mapDispatchToProps = (dispatch) => ({
//   setdata: (data) => dispatch(set_data(data))
// })
// export default connect(mapStateToProps,mapDispatchToProps) (Home)





// firebase facebook login


import {set_data,facebook_login} from '../../store/action'
class Home extends React.Component{
  render(){
    let user = {name:"umair",email:"umair@gmail.com"}
    return(
      <div>
        <h2>Home</h2>
        <button onClick={()=>this.props.facebook_login()}>FACEBOOK LOGIN</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  users: state.users
});
const mapDispatchToProps = (dispatch) => ({
  setdata: () => dispatch(set_data()),
  facebook_login: () => dispatch(facebook_login())
})
export default connect(mapStateToProps,mapDispatchToProps) (Home)



