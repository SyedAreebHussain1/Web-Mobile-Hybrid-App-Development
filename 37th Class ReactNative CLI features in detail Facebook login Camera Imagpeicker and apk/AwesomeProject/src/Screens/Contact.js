import React from "react";
import { View, Text, StyleSheet } from 'react-native';

function Camera({ navigation, route }) {
    const { data, users } = route.params
    // console.log("contact==>",users)
    return (
        <View style={styles.Contact}>
            <Text style={styles.contactTxt}>{data.contactUs}</Text>
            <Text style={styles.name}>{users.name}</Text>
            <Text style={styles.email}>{users.email}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    Contact: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contactTxt: {
        color: 'black',
        fontSize: 30
    },
    name: {
        color: 'black',
        fontSize: 20
    },
    email: {
        color: 'black',
        fontSize: 20
    }
});
export default Camera