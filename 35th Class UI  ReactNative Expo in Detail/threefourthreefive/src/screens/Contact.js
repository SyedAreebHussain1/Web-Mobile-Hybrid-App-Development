import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, ScrollView, FlatList,ImageBackground,ActivityIndicator } from 'react-native';


// function Contact(props) {
//     return(
//         <View style={styles.container}>
//             <Text style={{fontSize:32}}>Contact Us</Text>
//             <Button title='Home' onPress={()=>props.navigation.navigate('Home')} />
//             <Button title='About' onPress={()=>props.navigation.navigate('About')} />
//         </View>
//     )
// }



function Contact({route}) {
    const {name} = route.params; 
    return(
        <View style={styles.container}>
            <Text style={{fontSize:32}}>Contact Us</Text>
            <Text style={{fontSize:22}}>{name}</Text>
            {/* <Button title='Home' onPress={()=>props.navigation.navigate('Home')} /> */}
            {/* <Button title='About' onPress={()=>props.navigation.navigate('About')} /> */}
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

export default Contact