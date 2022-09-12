import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

function About({ navigation, route }) {
    const { data ,users} = route.params
    // console.log("About=>",users)
    return (
        <View style={styles.About}>
            <Text style={styles.AboutTxt}>{data.AboutUs}</Text>
            <Button title={data.contactUs} onPress={() => navigation.navigate('Contact', { data ,users})} />
        </View>
    )
}
const styles = StyleSheet.create({
    About: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    AboutTxt: {
        color: 'black',
        fontSize: 30
    }
});
export default About