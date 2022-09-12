import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, ScrollView, FlatList, ImageBackground, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';

function Home(props) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:30}}>Home</Text>
            <Button onPress={() => props.navigation.navigate('Camera')} title='Open Camera' />
            <Button onPress={() => props.navigation.navigate('ImagePickerExample')} title='Open Gallery Image Picker' />
            <Button onPress={() => props.navigation.navigate('Map')} title='Open MAP and Location' />
            <Button onPress={() => props.navigation.navigate('About')} title='About' />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Home