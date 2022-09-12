// const set_data = (data) => {
//     return (dispatch) => {
//         dispatch({
//             // standard dekha jaye tou type:"", payload:date propty ka nam hum rakhty ha payload: or is property k undr ap apna data rakhty ha {obj} may payload standard ha ap apni marzi ka bhi nam rakh sakty ha
//             type:'SETDATA', payload:data,
//             // type:'SETDATA', name:'ghous',email:'ghous@gmail.com'
//         })
//     }
// }
// export {
//     set_data
// }




// facebook login
// facebook se hamy kya kya data mily ga email:,name:,profile: tou ye basic chezy hogi jo hum uski get kary gy or uid: usko hum bhej dygy firebase database may
// firebase may hum ek note bana lygy users k nam se or users k undr ek or note bany ge jo uski uid hogi
// import firebase from "../../config/firebase"
// const facebook_login = () => {
//     return (dispatch) => {
//         // console.log("firebase=>", firebase)
//         var provider = new firebase.auth.FacebookAuthProvider();
//         // firabase pe data bhej ny ka tareeka 
//         // acha hum firebase ka old version use kar rahy ha package.json may dekh ap "firebase": "^8.2.1"
//         firebase.auth().signInWithPopup(provider)
//             .then((result) => {
//                 const user = result.user;
//                 console.log('user=>', user)
//                 let create_user = {
//                     name: user.displayName,
//                     email: user.email,
//                     profile: user.photoURL,
//                     uid: user.uid
//                 }
//                 console.log('user_data=>', create_user)
//                 firebase.database().ref('/').child(`users_noted/${user.uid}`).set(create_user)
//                     .then(() => {
//                         alert(`${user.displayName} login successful!`)
//                     }).catch((error)=>{
//                         console.log(error);
//                     }) 
//             })
//             .catch((error) => {
//                 // Handle Errors here.
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.log("Error msg=>", errorMessage)
//             });
//     }
// }
// export {
//     facebook_login
// }




// ub hamy kya karna ha jab ye login hojaye firebase may data bhej dy Home screen se change ho k Chat screen pe
import firebase from "../../config/firebase";
import Chat from "../../containers/Chat";
const Facebook_login = (history) => {
    // let navigate = useNavigate();
    return (dispatch) => {
        // console.log("firebase=>", firebase)
        var provider = new firebase.auth.FacebookAuthProvider();
        // firabase pe data bhej ny ka tareeka 
        // acha hum firebase ka old version use kar rahy ha package.json may dekh ap "firebase": "^8.2.1"
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log('user=>', user)
                let create_user = {
                    name: user.displayName,
                    email: user.email,
                    profile: user.photoURL,
                    uid: user.uid
                }
                console.log('user_data=>', create_user)
                firebase.database().ref('/').child(`users_noted/${user.uid}`).set(create_user)
                    .then(() => {
                        // ub kya hoga dispatch jaise he hoga type k undr type:'SETUSER' rakh diya payload: k undr jo data may firebase may bhej raha ho wo he main ny redux k undr bhi bhej diya
                        dispatch({
                            type:'SETUSER',payload:create_user
                        })
                        alert(`${user.displayName} login successful!`)
                        // window.location.href("https://localhost:3000/chat")
                        // window.location.replace("https://localhost:3000/chat")
                        // history push karwany k bhot sary tareeky aty ha ap un ko use karliya ga apko jo asan lagy use karliye ga 
                        // main ny action k undr perameter recive kara history phir ma ny nechy a k boldiya history.push('/chat) tou ye push hogaya
                        history.push('/chat')
                    }).catch((error)=>{
                        console.log(error);
                    }) 
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error msg=>", errorMessage)
            });
    }
}
 
{/* ub ham kya kary gy jab bhi Chat wala component aye firebase pe ek call jaye waha users ki jo list ha wo uth k hamary pass ajye humko ek function bana hoga action k undr */}
// GetUserslist function may kya hoga firebase may jaye ga firebase.database().ref('/').child('users_noted).on('child_added',(data)=>{}) is he tarha se get karty thy firebase se data ap sab ko yaad hoga 
const GetUserslist = () => {
    return(dispatch) =>{
        // firebase.database().ref('/').child('users_noted').on('child_added',(data)=>{
        //     // console.log('firebase_data=>',data.val()) 
        //     //hamary pass jo users get ho k aye ha in ko bhej dyna ha redux k undr dispatch ({type:'SETFIREBASEUSERS',payload:data.val()}) is se hamary pass firebase may jo jo users login howe ho gy wo ajye gy or hum isko redux may set kardygy
        //     dispatch({type:'SETFIREBASEUSERS', payload:data.val()})
        // multiple time print hogaya ha tou hum isko control karny k liye kya kary gy let users = [] ki users ki empty array banye gy or firebase se data wag waye gy or users pay push karwa dygy users.push(data.val()) pehly hum conole.log karwa k check kary gy users ki array may kitny users la k push kar raha ha ub hum kya kary gy action.payload k under users wali array bhejy gy taky users duplicate na ho 
        let users = [];
        firebase.database().ref('/').child('users_noted').on('child_added',(data)=>{
            users.push(data.val())  
        })
        // console.log(users) //two users is ny push kardiye 
        dispatch({type:'SETFIREBASEUSERS', payload:users})
    }
}




export {
    Facebook_login,
    GetUserslist
}