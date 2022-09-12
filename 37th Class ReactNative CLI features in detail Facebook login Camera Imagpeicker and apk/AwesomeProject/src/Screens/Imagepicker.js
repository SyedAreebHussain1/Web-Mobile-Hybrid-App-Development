import { source } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import ImagePicker from "react-native-image-picker";
import { useState, useEffect } from "react";


const options = {
    title: 'Select Avator',
    // customButton: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    StorageOptions: {
        skipBackup: true,
        path: 'images'
    }
}
function Picker() {
    const [image, setImage] = useState(null)
    const open_picker = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response => ', response);
            if (response.didCancel) {
                console.log('User canceled image picker')
            } else if (response.error) {
                console.log('ImagePicker Error', response.error);
            } else if (response.customButton) {
                console.log("User tapped custom button:", response.customButton);
            } else {
                const source = response.uri
                setImage(source)
                console.log(source)
            }
        })
    }
    return (
        <View Style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 23 }} >
            {/* <Text style={{fontSize:23,color:'black'}}>Image</Text> */}
            <Button onPress={open_picker} title="Open Image Picker" />
            {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
        </View>
    )
}
export default Picker