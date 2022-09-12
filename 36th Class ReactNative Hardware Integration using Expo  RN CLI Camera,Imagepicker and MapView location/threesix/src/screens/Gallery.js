
import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';



// Gallery
// ub hum kya kary gy picture ko gallery se expo app k  undr get kary gy mtlb Gallery open karna app k undr koi picture get karna.
// Gallery k liye expo may jo hum modeule use karty ha uska name ha (expo image picker)

// img share karny ka bhi ek module ha wo bhi ap instaal kar sakty ha har cheez hum nh bataye gy
// multiples img bhi ap khud kiye ga 

// Google search (expo image picker)  
// Link ImagePicker-Expo Documention
// install (expo install expo-image-picker)



export default function ImagePickerExample() {
    const [image, setImage] = useState(null);


    // useEffect may permission li gaye ha 
    useEffect(() => {
        (async () => {
            if (Platform.OS != 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permision to make this work!')
                }
            }
        })();
    }, [])
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    );
}