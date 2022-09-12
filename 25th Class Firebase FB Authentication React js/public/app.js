// console.log(firebase)



let facebookLogin = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            window.location = "home.html"
            var user = result.user;
            console.log(user)
        })
        .catch((error) => {
            // Handle Errors here.
            console.log(error.message)
        });
}


let signOut = () => {
    firebase.auth().signOut()
        .then((result) => {
            window.location = "Login.html"
            console.log("result==>", result)
        })
        .catch((error) => {
            console.log(error.message)
        })
}






















