import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, ScrollView, FlatList, ImageBackground, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';

function Contact({route}) {
    // const { name,email } = route.params
    const { data } = route.params
    return(
        <View style={styles.container}>
            <Text>Contact Us</Text>
             <Text>Name: {data.name}</Text>
             <Text>Email: {data.email}</Text>
            
            {/* <Text>Name: {name}</Text>
            <Text>Email: {email}</Text> */}
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