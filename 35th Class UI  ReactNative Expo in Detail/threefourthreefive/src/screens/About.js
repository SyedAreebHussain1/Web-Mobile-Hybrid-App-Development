import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, ScrollView, FlatList,ImageBackground,ActivityIndicator } from 'react-native';


// function About(props) {
//     return(
//         <View style={styles.container}>
//             <Text style={{fontSize:32}}>About Us</Text>
//             <Button title='Go to Contact Us' onPress={()=>props.navigation.navigate('Contact')} />
//             <Button title='Go to Home' onPress={()=>props.navigation.navigate('Home')} />
//         </View>
//     )
// }



// passing perameters to routes
function About({route}) {
    const { name,email } = route.params;
    return(
        <View style={styles.container}>
            <Text style={{fontSize:32}}>About Us</Text>
            <Text style={{fontSize:25}}>{name}</Text>
            <Text style={{fontSize:25}}>{email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default About