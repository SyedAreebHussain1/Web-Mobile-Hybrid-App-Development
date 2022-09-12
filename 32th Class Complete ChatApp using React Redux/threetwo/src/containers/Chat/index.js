import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetUserslist } from '../../store/actions'
import firebase from "../../config/firebase";
import { uid } from 'uid';

// class Chat extends Component {
//     //  {/* ub hamy karna ye ha k jab ma Chat button pe click karo chat k agy jis user pe click kara ha uska nam ajye or usko k sth meri chat start hojaye mai ek constructor bana lunga  */}
//     constructor() {
//         super()
//         // console.log("chat_usr",this.chats)
//         this.state = {
//             // jis user se chat ho rahi ha wo user mai ny chat_user: may rakh diya
//             // chat_user may kya aye ga jis users se mujhy chat karni   
//             chat_user: {},
//             // jo bhi chats msg ho gy wo chats:[] may ajye gy
//             chats: [],
//             message: ""
//         }
//     }
//     // chat_user k undr mai ny set karwa diya user data ub ye kya hoga jaisy he ma chat pe click karunga chat_user k under ja k user set karwa dyga  
//     chat = (user) => {
//         // console.log('v func',user)
//         this.setState({
//             chat_user: user
//         })
//         let current_user = this.props.current_user;
//         let merge_uid = this.uid_merge(current_user.uid,user.uid)
//         console.log('current_user',current_user)
//         console.log('merge_uid',merge_uid)
//         this.get_messages(merge_uid)
//     }
//     // get_messages ka function kab chaly ga k jab ma chat pe click karunga jab ma chat button pe click karunga tou get_messages ka function chal jana chye
//     get_messages = (uid) => {
//         firebase.database().ref('/').child(`chats/${uid}`).on('child_added',(messages)=>{
//             // console.log('messages=>',messages.val())
//             this.state.chats.push(messages.val())
//             this.setState({
//                 chats:this.state.chats
//             })
//         })
//     }
//     componentDidMount() {
//         console.log("compo")
//         this.props.GetUserslist()
//     }
//     send_message = () => {
//         let user = this.props.current_user; //yaha se isko mil jaye ga current_user
//         let chat_user = this.state.chat_user; // or yaha pe chat_user jo k state se mil raha h 
//         // console.log(this.uid_merge(user.uid,chat_user.uid)) //dono ko merge kar single uid humny banali..Areeb k concole may bhi yehe bany ge or Aqib k conole may bhi ye hee bany gee ge uid dono jaga same hogi uid //OIAlfLnKuNbydoh4RfEUP6URhgA2YZUh5MtIW7QCVHpxyrOJ2NJKuYw1 
//         // ub kya hoga is uid k nam se firebase may noted bany ge us may sary messages jaye gy
//         let merge_uid = this.uid_merge(user.uid,chat_user.uid)
//         firebase.database().ref('/').child(`chats/${merge_uid}`).push({
//             // message main kya kya dunga jo k uper se araha ha message this.state.message thk ha or rk hojaye ga name: jis ny message bheja ha send mera jo user ha uska name ayga name: user.name or uid ajye gee jo message bhej raha ha uid:user.uid tou ye jo message ha wo chala jaye ga firebase may firebase k sth sth hamari state may bhi chala jaye ga ap chahy tou profile wagera laga sakhty ha  
//             // state may nh bhejy sirf firebase pe bhej dy or phir firebase se hum realtimetime get kar k state may show karwa dygy  
//             // main ny msg kara hi tou chats ki ek noted bun jaye ge is k undr uid bun gaye merge ho kar us k undr mera msg agaya 'Hi' or lekha wa ha name:'Syed Areeb' or uid:'uid' jo bhi ma ny message kara wo chala gaya firebase may   
//             message:this.state.message,
//             name: user.name,
//             uid:user.uid
//         })
//         // msg send hony k bad khali hoajye <input/>
//         this.setState({
//             message:''
//         })

//         // dono ki uid alag alag ha  
//         // console.log('user',user) // (Areeb) is may mera apna data araha ha 
//         // console.log('chat_user',chat_user) //(Aqib) is may wo data arha ha jis user k sth ma chat karna cha raha ho
//         // console karwa k check kary ge msg ja raha ha ya nh 
//         // console.log('message=>',this.state.message)
//         // ub mujhy kya karna ha message ko push karwa dyna ha chats ki array may this.state.chats.push({ message: this.state.message }) ma ny 
//         // push karwa diya acha push may ek obj bana k bhejy gy Q k multiple msg hoga single nh hoga obj may mai ny kaha message:this.state.message tou msg us k undr chala jaye ga hum check kary gy ye work kar raha ha  ub this.setState({chats:this.state.chats,message:''}) karwadyta ho taky render dubara chal jaye 
//         // this.state.chats.push({
//         //     message: this.state.message
//         // })
//         // this.setState({
//         //     chats:this.state.chats,
//         //     message:""
//         // })
//     }
//     //  acha hamy ek baat yaad rakhni ha lower wali uid pehly ay ge or higiher wali bad may console may lekh k chexk kar sakty ha ap higherAreeb < lowerAqib = false higherAreeb > lowerAqib = true
//     // main ek function bana lunga jo uid1 + uid2 ko merge kar raha hoga
//     // if condidition if(agr uid1 chota ho < uid2 se ){return kardou uid1+uid2 } or else {return kardou uid2 + uid1}
//     // ye function khud se dekh lyga k kon se uid choti ha usko pehly rakh dyga agr uid1 choti hoi tou ye return kardyga uid1 + uid2 or agr uid2 choti hoi tou ye else may kya kardyga reture uid2 + uid1
//     uid_merge (uid1,uid2) {
//         if(uid1 < uid2){
//             return uid1 + uid2
//         }else {
//             return uid2 + uid1
//         }
//     }
//     render() {
//         // console.log("chat_user",this.chat_user);
//         // console.log("Chat=>",this.props.chats)
//         let user = this.props.current_user //create_user = {name:user.name,email:user.email,profile:img URL,uid:ugdh8d78df97s9}
//         console.log('SETFIREBASEUSERS firebase_users=>', this.props.users)
//         // console.log('messages firebase_users=>', this.props.chats)
//         return (
//             <div>
//                 <h4>Welcome! {user.name}</h4>
//                 <img src={user.profile} alt="" />
//                 <h6>Emial: {user.email}</h6>
//                 <div style={{ display: 'flex' }}>
//                     {/* ub mujhy email k nechy wo users show karwany ha jo is chat Application may mojood ha */}
//                     {/* ub ham kya kary gy jab bhi Chat wala component aye firebase pe ek call jaye waha users ki jo list ha wo uth k hamary pass ajye humko ek function bana hoga action k undr */}
//                     <div style={{ backgroundColor: 'grey' }}>
//                         <h4>Chat Users:</h4>
//                         <ul>
//                             {/* users kon login hogaya ha wo map() chala k show karwa dunga */}
//                             {this.props.users.map((v, i) => {
//                                 // console.log('v', v.name)
//                                 return (
//                                     // is k liye hum kya kary k Chat users k undr meri khud ki profile na aye hum if ki condidiion bhi use kar sakty ha..agr v.uid agr match na kary !== user.uid tou ye na && wrna ye aye v.uid !== user.uid ternari opertor ma ny use kary ap sab sekhaye thy javaScript may yaad kary 
//                                     // is may mai ny kaha map jo user.uid arahi wo match na kary mera jo current_user us ki uid se tou he ye render ho warna na ho ye condition may ny laga de sirf Syed Aqib mujhy dekha diya v.uid !== user.uid && 
//                                     // agr ma Aqib se login howa tou Areeb Chat User aye ga or agr mai Areeb se login howa tou Aqib Chat User aye ga 
//                                     // img show hogi or name or main ek button bhi bana dyta ho Chat name jab button pe click karo tou meri chat user k sth khol jaye right side pe
//                                     v.uid !== user.uid && <li key={i}>
//                                         <img src={v.profile} alt='' width='40' />
//                                         {v.name} <button onClick={() => this.chat(v)}>CHAT</button>
//                                     </li>
//                                 )
//                             })}
//                         </ul>
//                     </div>
//                     {/* ub hamy karna ye ha k jab ma Chat button pe click karo chat k agy jis user pe click kara ha uska nam ajye or usko k sth meri chat start hojaye ek <input/> bana lunga or send msg ka button */}
//                     <div style={{ backgroundColor: 'yellow', width: 400 }}>
//                         <h4>Chat</h4>
//                         {/* yaha pe ek condition laga dyta ho acha Obj k liye hum is tarha bhi condition laga sakty ha k Object.keys(this.state.chat_user).length ? ho tou isko msg dekhaye : wrna isko dekhaye No Chat
//                         // jab chat_user k undr user ajye tou is may kya kary kis se chat ho rahi ha wo dekha dy   */}
//                         {Object.keys(this.state.chat_user).length ?
//                             <div>
//                                 <h4><img src={this.state.chat_user.profile} alt='' width='40' /> {this.state.chat_user.name}</h4>
//                                 {/* ub hum msgs ki array dekha dyty ha jo main ny uppr dekhaye ha chats k name se */}
//                                 <ul>
//                                     {this.state.chats.map((v, i) => {
//                                         // mera wala chat ka jo color 'red' hojaye or samny waly ki chat ka color 'green' hojaye. li pe main ny condition laga de ha color: v.uid agr match kary kis se mery user.uid se ? tou color kardou "red" : wrna 'green' jo msg mery pass araha green se araha h jo msg bhej raha ho red se jara ha
//                                         return <li style={{color:v.uid === user.uid ? 'red': 'green'}} key={i}>
//                                         {/* return <li style={{float:v.uid === user.uid ? 'right': 'left', list}} key={i}> */}
//                                             {v.message}
//                                         </li>
//                                     })}
//                                 </ul>
//                                 {/* ub mujhy ye karna hoga jo bhi ma msg type karo or Send ka button dabao tou jo mg hoga wo chats:[] ki array may ja k push hojaye ga tou dekhty ha ye kam kaisy hoga Send_msg ka ma ek function bana lunga upr  */}
//                                 {/* value k undr ma rakh dunga message:'' is tarha value={this.state.message} or jab <input/> change ho ma msg ko set karwa dunga is tarha onChange={(e)=>this.setState({message:e.target.value}) } ub jab bhi user <input/> may msg type kary ga message wali state may ja k msg save hojaye ga   */}
//                                 <input onChange={(e) => this.setState({ message: e.target.value })} value={this.state.message} type='text' placeholder='Text Message' />
//                                 <button onClick={() => this.send_message()}>Send</button>
//                             </div>
//                             :
//                             <h4>No Chat</h4>
//                         }
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => ({
//     current_user: state.current_user,
//     users: state.users
// })
// const mapDispatchToProps = (dispatch) => ({
//     GetUserslist: () => dispatch(GetUserslist()),
// })
// export default connect(mapStateToProps, mapDispatchToProps)(Chat)








class Chat extends Component {
    constructor() {
        super()
        // console.log("chat_usr",this.chats)
        this.state = {
            chat_user: {},
            // jo bhi chats msg ho gy wo chats:[] may ajye gy
            chats: [],
            message: ""
        }
    }
    // chat_user k undr mai ny set karwa diya user data ub ye kya hoga jaisy he ma chat pe click karunga chat_user k under ja k user set karwa dyga  
    chat = (user) => {
        // console.log('v func',user)
        this.setState({
            chat_user: user
        })
        let current_user = this.props.current_user;
        let merge_uid = this.uid_merge(current_user.uid,user.uid)
        console.log('current_user',current_user)
        console.log('merge_uid',merge_uid)
        this.get_messages(merge_uid)
    }
    // get_messages ka function kab chaly ga k jab ma chat pe click karunga jab ma chat button pe click karunga tou get_messages ka function chal jana chye
    get_messages = (uid) => {
        firebase.database().ref('/').child(`chats/${uid}`).on('child_added',(messages)=>{
            // console.log('messages=>',messages.val())
            this.state.chats.push(messages.val())
            this.setState({
                chats:this.state.chats
            })
        })
    }
    componentDidMount() {
        console.log("compo")
        this.props.GetUserslist()
    }
    send_message = () => {
        let user = this.props.current_user; //yaha se isko mil jaye ga current_user
        let chat_user = this.state.chat_user; // or yaha pe chat_user jo k state se mil raha h 
        let merge_uid = this.uid_merge(user.uid,chat_user.uid)
        firebase.database().ref('/').child(`chats/${merge_uid}`).push({
            message:this.state.message,
            name: user.name,
            uid:user.uid
        })
        // msg send hony k bad khali hoajye <input/>
        this.setState({
            message:''
        })
    }
    uid_merge (uid1,uid2) {
        if(uid1 < uid2){
            return uid1 + uid2
        }else {
            return uid2 + uid1
        }
    }
    render() {
        // console.log("chat_user",this.chat_user);
        // console.log("Chat=>",this.props.chats)
        let user = this.props.current_user //create_user = {name:user.name,email:user.email,profile:img URL,uid:ugdh8d78df97s9}
        console.log('SETFIREBASEUSERS firebase_users=>', this.props.users)
        // console.log('messages firebase_users=>', this.props.chats)
        return (
            <div>
                <h4>Welcome! {user.name}</h4>
                <img src={user.profile} alt="" />
                <h6>Emial: {user.email}</h6>
                <div style={{ display: 'flex' }}>
                    <div style={{ backgroundColor: 'grey' }}>
                        <h4>Chat Users:</h4>
                        <ul>
                            {this.props.users.map((v, i) => {
                                // console.log('v', v.name)
                                return (
                                    v.uid !== user.uid && <li key={i}>
                                        <img src={v.profile} alt='' width='40' />
                                        {v.name} <button onClick={() => this.chat(v)}>CHAT</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    {/* ub hamy karna ye ha k jab ma Chat button pe click karo chat k agy jis user pe click kara ha uska nam ajye or usko k sth meri chat start hojaye ek <input/> bana lunga or send msg ka button */}
                    <div style={{ backgroundColor: 'yellow', width: 400 }}>
                        <h4>Chat</h4>
                        {Object.keys(this.state.chat_user).length ?
                            <div>
                                <h4><img src={this.state.chat_user.profile} alt='' width='40' /> {this.state.chat_user.name}</h4>
                                <ul>
                                    {this.state.chats.map((v, i) => {
                                        return <li style={{color:v.uid === user.uid ? 'red': 'green'}} key={i}>
                                            {v.message}
                                        </li>
                                    })}
                                </ul>
                                <input onChange={(e) => this.setState({ message: e.target.value })} value={this.state.message} type='text' placeholder='Text Message' />
                                <button onClick={() => this.send_message()}>Send</button>
                            </div>
                            :
                            <h4>No Chat</h4>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    current_user: state.current_user,
    users: state.users
})
const mapDispatchToProps = (dispatch) => ({
    GetUserslist: () => dispatch(GetUserslist()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Chat)