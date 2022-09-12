import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
// function Home({ navigation }) {
    //     const data = { HomeS: 'Home Screen', AboutUs: 'About Us', contactUs: 'Contact Us', CameraScreen: 'Camera Screen', CameraS: 'Open Camera' }
    //     const users = { name: 'Syed Areeb Hussain', email: 'sareeb65@gmail.com' }
    //     // console.log("user=>",users)
//     return (
//         <View style={styles.Home}>
//             <Text style={styles.HomeTxt}>{data.HomeS}</Text>
//             <Button title={data.AboutUs} onPress={() => navigation.navigate('About', { data, users })} />
//             <Button title='Camera' onPress={() => navigation.navigate('Camera')} />
//             <Button title='Image Picker' onPress={() => navigation.navigate('Picker')} />
//             <Button title="Firbase Database" onPress={() => navigation.navigate('Database')} />
//         </View>
//     )
// } 
// import { LoginManager } from "react-native-fbsdk-next";

function Home() {
    // const facebook_login =() => {
    //     LoginManager.logInWithPermissions(["public_profile"]).then(
    //         function(result) {
    //           if (result.isCancelled) {
    //             console.log("Login cancelled");
    //           } else {
    //             console.log(
    //               "Login success with permissions: " +
    //                 result.grantedPermissions.toString()
    //             );
    //           }
    //         },
    //         function(error) {
    //           console.log("Login fail with error: " + error);
    //         }
    //       );
    // }
    return (
        <View style={styles.Home}>
            {/* <Button title="Login with Facebook" onPress={facebook_login}  /> */}
        </View>
    )
} 
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