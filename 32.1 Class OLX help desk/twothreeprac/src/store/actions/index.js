
// const set_data = (data) => {
//     console.log("hello bhai")
//     return (dispatch) => {
//         dispatch({ type: 'SETDATA', payload: data })
//     }
// }
// export { set_data }


// CHAT APP 
import firebase from "../../config/firebase";

const FacebookLogin = (history) => {
  // console.log("hello bhai")
  return (dispatch) => {
    // dispatch({ type: 'SETDATA', payload: data })
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        console.log('user=>', user)
        let create_user = {
          name: user.displayName,
          email: user.email,
          profile: user.photoURL,
          uid: user.uid
        }
        // console.log('create_user', create_user)
        // console.log("create_user", create_user)
        firebase.database().ref('/').child(`users_login/${user.uid}`).set(create_user)
          .then(() => {
            dispatch({ type: 'SETUSER', payload: create_user })
            alert(`${user.displayName} Login successful!`)
            history.push('/chat')
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log('Error==>', errorMessage)
      });
  }
}

const GetUsersList = () => {
  return(dispatch) => {
    let users = [];
    firebase.database().ref('/').child('users_login').on('child_added',(data)=> {
      users.push(data.val())
      // console.log('Firebase Data=>',data.val())
    })
    console.log(users)
    dispatch({type:'SETFIREBASEDATA',payload:users})
  }
}

export { FacebookLogin, GetUsersList }




// 31.1th Class OLX help desk 

