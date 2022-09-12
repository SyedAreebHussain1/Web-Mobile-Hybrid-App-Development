import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, ScrollView, FlatList, ImageBackground, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';

function About(props) {
    const data = {name:'Ghous Ahmed', email:'ghousahmed@gmail.com'}
    return(
        <View style={styles.container}>
            <Text>About Us</Text>
            {/* <Button title='Contact us' onPress={()=>props.navigation.navigate('Contact',{name:'Basit Khan','basitkhan"gmail.com'})} /> */}
            <Button title='Contact us' onPress={()=>props.navigation.navigate('Contact',{data})} />
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