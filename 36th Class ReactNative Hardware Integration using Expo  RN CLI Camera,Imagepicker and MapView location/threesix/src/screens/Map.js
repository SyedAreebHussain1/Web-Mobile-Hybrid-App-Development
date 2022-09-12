import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
// current location k liye  import * as Location from 'expo-location'
import * as Location from 'expo-location';


// 3)Google and 4)location
//  MapView k link MapView-Expo Documentation k undr hamy dou link milty ha 1) react-native-maps/react-native-maps. 2)react-native-maps/react-native-maps k undr mujhy github pe MapView mily ga <MapView initialRegion={{latitude: 37.78825,longitude: -122.4324,latitudeDelta: 0.0922,longitudeDelta: 0.0421,}}></MapView> mily gy



// UBER/CAREEM
// Location.watchPositionAsync(options, callback) ye bhi use karsakty ha aksar apny dekha hoga jab hum uber ya careem ki car ko bolaty ha tou wo hamy map may ek car show karwa raha hota ha jo hamary location tak ati ha car chalti we
// thori thori dair may ye hamy postion bata raha hoga mobile ki or hum us hisab se marker ki postion ko change karwa rahy hungy 


// Loction.geocodeAsync(address) kya karta ha k ap is ko adress dy gy or ye apko uski location bata dyga adress ka string ly ga or apko uska string bana dyga 


// Location.reverseGeocodeAsync(location, options) kya karta ha apse location lyga mtlb apse latitude,longitude lyga or uska adress bata dyga k kya ha  jasiy ma isko bhadrabad k lititude,longitude dydou tou ye mujhy address bata dyga k ye bhadrabad ka ha or bhi kafi sary opations ha khud kary plz 

export default function Map() {

    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)


    // permission useEffect
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
            console.log('location=>', location)
        })();
    }, []);



    // initialRegion:
    // initialRegion k undr ye sari chezy bata ty ha 
    // latitude or longitude in dono pe google map depend karta ha har location ka ek longitude or latitude hota ha jasiy hamary ghr ka adrees hota ha google map k liye latitude or longitude ek adrees hota ha har location ka ek unique is k zariye hum loaction tak jaty ha 
    // latitude: pehla wala latitude hota ha 24.9739468,
    // longitude: dusra wala longitude hota ha > second 67.0591687

    // latitudeDelta or longitudeDelta ye map ka zoom level batata ha k kitna zoom ho matlb kitna area apko map k undr dekhna ha is ka kuch ratio hota ha 0. se ly 1 tak ka shayad us hum bataty ha k is ka jo zoom level ha mtlb map ka jo size ha wo is may kya rakhna ha    
    return (
        <View style={styles.container}>
            <MapView initialRegion={{
                // north karachi ki location dali ha
                latitude: 24.9739468,
                longitude: 67.0591687,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }} style={styles.map}>
                {/* location */}
                {/* apko apki current location show karwaye ga jis location pe ap hungy wo location karwaye ga is tarha se Marker bhi mai ny laga diya  */}
                {/* loaction save karny k liye apko state may save kardyna ha  */}
                {/* Ye mujhy ub current location dekhaye ga vip flat ki */}
                {/* current loaction north karachi */}
                {/* <Marker coordinate={{
                    latitude: location ? location.latitude : 24.9739468,
                    longitude: location ? location.longitude : 67.0591687
                }} /> */}
                {/* power house location*/}
                <Marker coordinate={{
                    latitude: location ? location.latitude : 24.9857449,
                    longitude: location ? location.longitude : 67.0634823,
                }} />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});