import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, ScrollView, FlatList,ImageBackground,ActivityIndicator } from 'react-native';

// stack navigation
// function Home() {
//     return(
//         <View style={styles.container}>
//             <Text style={{fontSize:32}}>Home</Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'#fff',
//         alignItems:'center',
//         justifyContent:'center'
//     }
// })


// moving between screens
// function Home(props) {
//     return(
//         <View style={styles.container}>
//             <Text style={{fontSize:32}}>Home</Text>
//             {/* push ki jaga ajaye ga navigate('is k undr hum lekh dy gy screen ka name') */}
//             <Button title='Go to About' onPress={()=>props.navigation.navigate('About')} />
//             <Button title='Go to Contact Us' onPress={()=>props.navigation.navigate('Contact')} />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'#fff',
//         alignItems:'center',
//         justifyContent:'center'
//     }
// })



// passing perameters to routes
function Home(props) {
    return(
        <View style={styles.container}>
            <Text style={{fontSize:32}}>Home</Text>
            {/* jab ap navigate('screen ka name lekha',{or obj bana k }) or,laga dusry perameter may apny ek obj pass kardiya or is obj ko ap next screen pr recive kar sakty ha*/}
            {/* mujhy home se about pe kuch data pass karna ha ma is tarha karunga.. or mujhy ye cheez bhot kaam aye gi  */}
            <Button title='Go to About' onPress={()=>props.navigation.navigate('About', {name:'Ghous Ahmed', email:'ghous@gmail.com'})} />
            <Button title='Go to Contact' onPress={()=>props.navigation.navigate('Contact',{name:'Basit Khan'})} />
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

export default Home