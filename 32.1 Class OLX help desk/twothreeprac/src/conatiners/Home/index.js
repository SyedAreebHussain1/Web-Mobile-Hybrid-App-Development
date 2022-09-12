import React from "react";
// import './style.css';
import { connect } from 'react-redux';
// import { set_data } from "../../store/actions/index";


// class Home extends React.Component {
//     render() {
//         // console.log('user-props',this.props.user[0].name)
//         console.log('user-props', this.props)
//         const userData = { name: 'Azeem', email: 'azeem@gmail.com' }
//         return (
//             <div>
//                 <h1> hello ho </h1>
//                 <button onClick={() => this.props.set_data(userData) }>Set Data</button>
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => ({
//     user: state.user
// })
// const mapDispatchToProps = (dispatch) => ({
//     set_data: (data) => dispatch(set_data(data))
// })
// export default connect(mapStateToProps, mapDispatchToProps) (Home)


// import { FacebookLogin } from "../../store/actions/index";


// class Home extends React.Component {
//     render() {
//         // console.log('user-props',this.props.user[0].name)
//         console.log('user-props', this.props.history)
//         return (
//             <div>
//                 <h1>LOGIN IN PLEASE</h1>
//                 <button onClick={() => this.props.FacebookLogin(this.props.history)}>Facebook Login</button>
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => ({
//     user: state.user
// })
// const mapDispatchToProps = (dispatch) => ({
//     FacebookLogin: (history) => dispatch(FacebookLogin(history))
// })
// export default connect(mapStateToProps, mapDispatchToProps) (Home)


// 31.1th Class OLX Help desk
 
// firebase IMAGE upload
// acha ek kam ki baat is ref() ka mtlb ha folders bnanana 
// var storageRef = firebase.storage().ref()
// 'file' comes from the Blob or File API
// ref.put(file).then((snapshot) => {
//     console.log('Uploaded a blob or file!');
//   });


import firebase from "firebase";
class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            file: null
        }
    }
    upload_file = () => {
        // ye ha firebase pe img upload karny ga tareeka jo k bilkul easy ha 
        // ap ny reference banaya = firebase.storage().ref().child(`images/image ka nam diya`)or . put ka mehtood call kardiya or put(k undr ap ny apni file rakh dee) ye tha img upload karny ka tareeka   
                                                //child(images/ k undr this.state.file.name ka folder bany)      
        var ref =  firebase.storage().ref().child(`images/${this.state.file.name}`).put(this.state.file)
        // console.log('upload_file=>',this.state.file)
        ref.on('state_changed', 
  (snapshot) => {

  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    ref.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);
    }
    render(){
        return(
            <div>
                <h4>Upload file</h4>
                <input type='file' onChange={(e)=>this.setState({file:e.target.files[0]})} />
                <button onClick={this.upload_file}>Upload</button>
            </div>
        )
    }
}
export default Home

// firebase user khuid se log out nh hota firebase automatic jab hum login karty ha tou wo user ko hamary broswer may login kardyta ha or wo jab tak wo login rehta ha jab tak hum khud se log out na kardy
// acha ye bhi ho skata ha k jab hum react ka project chalaty ha or firebase login karty ha or project ko hum close kardyty ha mtlb cmd jis may hamara react ka sarwar chal raha h usko hum bund kardyty ha us k bad dubara se project chalaty ha tou shayad firebase logout hojaye wrna firebase logout nh hota 

// react pe firebase hosting kis tarha se hoti ha folder> npm run build ki commend kya karti ha apny jitni bhi react apliction banaye ha uska ek bundle may kardyti ha or usko static file may convert kardyti ha static file se mtlb apki HTML CSS JAVASCRIPT ki files hoti ha jab ub JAVASCRIPT jab ap javaSCRIPT k time pe bana rahy thy is tarha ki static files may apki react application ko convert kardyti ha tou 
// wo jo files bunti ha jo build ka folder bunta ha ap us folder ko firebase pe deploye kardyty ha kis tarha karty ha apko yaad hoga jaisy k ap javaScript k time pe kardt thy HTML CSS ki jo humny website banaye thi jis tarha usko humk firebase deploy karty thy same ussey tarha build ka folder firebase pe deploye kardygy 

// Ghulam qadir apka sawal ye ha k sir new Gmail k firebase project kaisy cmd may aye gy waha tou sirf ek he account ha ghulam qadir ap cmd may firebase logout ki command use kary gy is se jo ha apka purana wala account logout hojaye ga 
    //  or ap duabara se lekhy gy firebase login is ap kya kary gy new wala jo account ha wo login karly gy is se new waly account k jo projects ha cmd may ajye gy
    
    // search  bar
    // Search bar ap kaisy banye gy ap aram se bana sakty ha filter karwa ly array may se jo bhi data ap search karway


    // history k undr bhi apko URL mil sakta history.loaction.pathName jab ap lekhy gy tou ap ko URL mil jaye ga 

    // dispatch ka mehthod dubara se bataraha ho dispatch is liye hota ha k jab bhi hum dispatch ko apny kisi function may call karty ha tou uska kam kya hota ha jo bhi dispatch k undr hum data pass karty ha wo reducer ko ja k dydy ta ha reducer may hum jo ek function banaya howa hota ha us k undr ek perameter recive karty ha action us action k undr wo data recive ho jata ha        

    // react k undar 1000 se bhi ziada labraries ha 
    // ek labrary ye bhi ha react icons k nam se ap isko install karly apni react app may is may 1)Ant Design Icons 2)Bootstrap Icons 3)Font Awesome ha kaffi sary is may icons ha jo hum apni application may use karskaty ha react icon ye bhot achi labrary ha

    // search k liye ma apko ek labrary bata raha ho jis ka name ha react-search-input
    // is se ap sirf front-end data search karwa sakty ha backend-end pe search jo hota ha database k thero hota ha front-end pe apko searching karwani ha ap is k thero karwa sakty ha 
    // npm install react-search-input acha agr ap input bhi inhe ka use karna cha rahy ha tou SearchInput inhe ka use kar sakty ha import SearchInput, {createFilter} from 'react-search-input' wrna ap input apna use kar sakty ha  import {createFilter} from 'react-search-input' ap isko key bata dygy jis ko apny filter karwana ha const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name'] demo bhi ap dekh sakty ha in k website pe ja k


    // ubaid nadeem user login karny k bad login button ki jaga dropdown kaisy show karwaye ap ye kary gy k jab user login hojaye tou user ka jo obj ha jo k apki state may hoga wo obj update hojaye us k undr user ka data mil jaye or user logout hoajye tou wo ubj empty hojaye tou ap button pe ternari operator lagye matlb ek condiditon laga dygy k agr obj k undr user ka data ho tou dropdown nazar aye or agr obj k undr user ka data na ho tou button nazar aye tou ap is tarha se ye cheez dekha sakty ha 
    
    // Navigation bar change kasiy hoga login hony k bad ap ek condition laga ly gy user ka ek obj hoga agr us obj may user ka data ha tou ap login wala navigation dekhaye wrna ap logout wala dekhaye 

    // ghulam qadir main ny abhi bataya tha imgs show kaisy hogi upload karny k bad apko URL mil jata ha us URL ko ap database may save karwa dygy or us URL k zariye img ap k pass show hojaye ge

    // firebase se pehly ap data recive kary usko ek array may save karwaye or us array pe map() chala dy or map k udr ap cards bana dy jis may data ajye ga  