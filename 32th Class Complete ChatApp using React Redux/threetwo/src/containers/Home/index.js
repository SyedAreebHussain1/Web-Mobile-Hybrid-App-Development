import React from "react";
import { connect } from "react-redux";


// import { set_data } from "../../store/actions";
// class Home extends React.Component {
//   // render apko pata hoga component ki jab state update hogi render mehtod dubara chalta ha ap ye baat zehan may rakhy 
//   // ise tarha se redux ki state update hogi tou bhi render ka mehtod dubara chaly ga ye baat bhi yadd rakhni ha
//   render() {
//     console.log('Home props==>',this.props)
//     var use = {name:'ghous',email:'ghous@gmail.com'}
//     return (
//       <div>
//         <h1>Home</h1> 
//         <button onClick={()=>this.props.setData(use)}>Set Data</button>
//       </div>
//     );
//   }
// }
// // redux ki jo bhi state hogi apko mapStateToProps k function k perameter may mil rahi hogi(state)
// // main ny mapStateToProps k undr ek obj return karwaya wa ha is obj k undr ap jo bhi property banaye gy ye property kaha ja k save hojaye gi ap k is component k props k undr thk ha 
// const mapStateToProps = (state) => ({
//     user: state.users 
// })
// // mapDispatchToProps ye function kya kar raha ha apny jitny bhi function apny pass banaye action k undr thek ha wo sary function ap is may define kardyty ha or is function ko connect may dydy ty ha 
// // tou ye kya kary ga jo bhi function ap is ko batye gy ye us function ko redux k sth connect kardyga 
// const mapDispatchToProps = (dispatch) => ({
//     setData: (data) => dispatch(set_data(data))
// })
// export default connect(mapStateToProps,mapDispatchToProps)(Home);




// command 
//  >folder set HTTPS=true
// npm start
// facebook login

import firebase from "../../config/firebase";
import { Facebook_login } from "../../store/actions";
class Home extends React.Component {
  render() {
    console.log('Home props==>',this.props.history)
    return (
      <div>
        <h1>Home</h1> 
        {/* this.props.history kar k history ko get kar sakty ha tou ma ny kya kara Home k Component may history ko get kara as a argument Facebooklogin waly function ko bhej diya or main ny action k undr perameter recive kara history phir ma ny nechy a k boldiya history.push('/chat)   */}
        <button onClick={()=>this.props.Facebooklogin(this.props.history)}>Facebook Login</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
    user: state.users 
})
const mapDispatchToProps = (dispatch) => ({
    Facebooklogin: (history) => dispatch(Facebook_login(history))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);