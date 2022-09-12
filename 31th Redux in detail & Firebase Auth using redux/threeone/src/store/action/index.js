// const set_data = () => {
//      console.log("helloworld")
// }
// export default set_data

// const set_data = () => {
//     return(dispatch) => {
//         console.log("hello")
//     }
// }
// export default set_data



// const set_data = (data) => {
//     // console.log("action-data=>",data)
//     return(dispatch) => {
//        dispatch({ type:"SETDATA",data:data})
//     // console.log("chal raha ha ")
//     }
// }
// export {set_data}





// const set_data = (data) => {
//     console.log("data",data)
//     return(dispatch) => {
//         dispatch({type:'SETDATA',name:"ahmed"})
//     }
// }
// export {set_data}



// const set_data = (data) => {
//     console.log("data",data)
//     return(dispatch) => {
//         dispatch({type:'SETDATA',data:data})
//     }
// }
// export {set_data}




// agr ziada action ha multiple action ki seprate file banana chary ha tou ap alag alag file bhi bana sakty ha 

// set_data ka ek function bana lyty ha or is k undr ek perametr recive kar raha ho (data) acha is function may hamy return karwana hota ha ek or function jis k perameter may hamy mil raha hota ha (dispatch) or is dispatch zariye hum apni redux ko data pass karty ha  
// set_data ka perameter may (data) revice kar raha ho or is (data) ko ma save karwao ga redux may  
// const set_data = (data) => {
//     // console.log("action-data=>",data)
//     return(dispatch) => {
//         // jab bhi dispatch call hoga tou reducer k undr jo function ha wo run hojaye ga
//         //dispatch k undr ek property bana k data ko bhej diya main apko bataya ha jab dispatch call hoga reducer k undr jo function ha wo run hojaye ga 
//         // jab bhi dispatch call karunga reducer wala function khud call hojaye ga 
//         dispatch({ type:"SETDATA",data:data})
//     }
// }
// export {set_data}




//set_data ka ek function bana lyty ha or is k undr ek perametr recive kar raha ho (data) acha is function may hamy return karwana hota ha ek or function jis k perameter may hamy mil raha hota ha (dispatch) or is dispatch zariye hum apni redux ko data pass karty ha  
// set_data ka perameter may (data) revice kar raha ho or is (data) ko ma save karwao ga redux may  
// const set_data = (data) => {
//     // console.log("action-data=>",data)
//     return(dispatch) => {
//         // jab bhi dispatch call hoga tou reducer k undr jo function ha wo run hojaye ga
//         //dispatch k undr ek property bana k data ko bhej diya main apko bataya ha jab dispatch call hoga reducer k undr jo function ha wo run hojaye ga 
//         // jab bhi dispatch call karunga reducer wala function khud call hojaye ga 
//         dispatch({ type:"SETDATA",users:{name:'umair',email:'umair@gmail.com'}})
//         // multiple dispatch ap bhej sakty ha is tarha ek k bad ek bus type change ho  
//         dispatch({type:"SETCHAT",data:data})
//     }
// }



// // firebase facebook ligin
import firebase from "../../config/firebase"
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
// import { FacebookAuthProvider } from "firebase/auth";
const set_data = () => {
    // console.log("action-data=>",data)
    return(dispatch) => {
        // dispatch({ type:"SETDATA",users:{name:'umair',email:'umair@gmail.com'}})
    }
}
const facebook_login = () => {
    return (dispatch) => {
        // console.log('facebook login',firebase)

        const provider = new FacebookAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log('user==>',user)
            // // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            // const credential = FacebookAuthProvider.credentialFromResult(result);
            // const accessToken = credential.accessToken;
            // ...
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error=>",errorMessage)
            // // The email of the user's account used.
            // const email = error.customData.email;
            // // The AuthCredential type that was used.
            // const credential = FacebookAuthProvider.credentialFromError(error);
            // // ...
          });
    }
}

export {set_data , facebook_login}
