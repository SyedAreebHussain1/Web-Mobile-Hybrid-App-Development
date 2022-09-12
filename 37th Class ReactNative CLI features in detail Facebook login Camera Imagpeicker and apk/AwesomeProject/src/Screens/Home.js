import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
function Home({ navigation }) {
    const data = { HomeS: 'Home Screen', AboutUs: 'About Us', contactUs: 'Contact Us', CameraScreen: 'Camera Screen', CameraS: 'Open Camera' }
    const users = { name: 'Syed Areeb Hussain', email: 'sareeb65@gmail.com' }
    // console.log("user=>",users)
    return (
        <View style={styles.Home}>
            <Text style={styles.HomeTxt}>{data.HomeS}</Text>
            <Button title={data.AboutUs} onPress={() => navigation.navigate('About', { data, users })} />
            <Button title='Camera' onPress={() => navigation.navigate('Camera')} />
            <Button title='Image Picker' onPress={() => navigation.navigate('Picker')} />
            <Button title="Firbase Database" onPress={() => navigation.navigate('Database')} />
        </View>
    )
}

// FacebookLogin
// import { LoginManager } from "react-native-fbsdk";
// import auth from '@react-native-firebase/auth';
// function Home() {
//     const facebook_login = async () => {
//         const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

//         if (result.isCancelled) {
//             throw 'User cancelled the login process';
//         }

//         // Once signed in, get the users AccesToken
//         const data = await AccessToken.getCurrentAccessToken();

//         if (!data) {
//             throw 'Something went wrong obtaining access token';
//         }

//         // Create a Firebase credential with the AccessToken
//         const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

//         // Sign-in the user with the credential
//         auth().signInWithCredential(facebookCredential)
//   .then((user)=>{
//     console.log("user=>",user)
//   })
//   .catch((err)=>{
//     console.log("error=>",err)
//   })
// }
// FacebookLogin //
// return (
//     <View style={styles.Home}>
//         <Button title="Login with Facebook" onPress={facebook_login} />
//     </View>
// )
// }
const styles = StyleSheet.create({
    Home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    HomeTxt: {
        fontSize: 30,
        color: 'black'
    }
});
export default Home