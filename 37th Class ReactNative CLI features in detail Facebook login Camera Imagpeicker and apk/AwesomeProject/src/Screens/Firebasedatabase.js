import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
// import database from '@react-native-firebase/database'


function Fdatabase(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const send_data = () => {
        // const reference = database().ref('users')
        let user = { email, password }
        // console.log("data=>", user)

    //  console.log("data=>",database().ref('/').child('Users').push(user))

    //  database().ref("/users").child("Users Name").push(user)

        setEmail('')
        setPassword('')
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.firebase}>Firebase</Text>
                <Text style={styles.firebase}>{email},{password}</Text>
            </View>
            <View style={styles.TextInput}>
                <TextInput value={email} onChangeText={(text) => setEmail(text)} placeholder="Email Address" />
            </View>
            <View style={styles.TextInput}>
                <TextInput value={password} onChangeText={(text) => setPassword(text)} placeholder="Password" secureTextEntry />
            </View>
            <Button onPress={send_data} title="Send Data" />
        </View>
    )
}
const styles = StyleSheet.create({
    firebase: {
        fontSize: 33,
        color: '#FFCD33',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextInput: {
        color: '#000',
        borderWidth: 2,
        borderColor: 'gray',
        width: '80%',
        padding: 10
    }
})
export default Fdatabase