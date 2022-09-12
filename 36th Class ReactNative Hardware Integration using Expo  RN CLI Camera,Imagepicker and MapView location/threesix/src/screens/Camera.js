
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// Gallery may camery se picture save karny k liye hum install "expo install expo-media-library" kary gy
import * as MediaLibrary from 'expo-media-library';

// last class may apko bataya tha mobile may data save karny k liye use kar sakty ha AsyncStorage ma ny use nh kiya abhi tak 
import AsyncStorage from '@react-native-async-storage/async-storage';


function CameraApp() {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    // const {library, requestPermissionsb}= MediaLibrary.requestPermissionsAsync()
    // useRef
    // function component may ref create karny k liye ek Hook use hota ha jiska name ha "useRef" ub ye bunta kis tarha se ha const camera = useRef(null) starting may mainy rakh dyna ha (null) thek ha ub ma ye ref kisi bhi
    //  element ko dy skta ho mtlb react native k components may se kisi bhi component ko dy sakta homai ye <View></View> ko bhi dy sakta ho ma <Camera></Camer> ko bhi dy sakta  ho tou is se hoga kya jis ko ref dunga wo pura 
    // component uth k mery pass ajye ga abhi ma const camera = useRef(null) camera ka jo ref mai dydyta ho kis ko <Camera ref = {camera}></Camera> 
    const camera = useRef(null)



    // ghous ny is t6rha kiya ha 
    // useEffect may permission li gaye ha
    // useEffect(() => {
    //     (async () => {
    //         const { status } = await Camera.requestCameraPermissionsAsync();
    //         // jab ap first time kholy gy tou ye permission mangy ga gallery k liye mery khayal se ye galati kiya ha ma ny
    //         const { library } = await MediaLibrary.requestPermissionsAsync()
    //         requestPermission(status === 'granted')
    //         // requestPermission(library === 'granted')
    //     })();
    // }, [])



    // takePictureAsync()
    // picture click camery se picture click karny ka 
    // take_selfie() ka function call hoga camera mtlb camery se wo picture click kary ga or photo k undr obj la k dydy ga picture ka jis may uski uri hogi size wagera sab cheezy hogi picture ki  
    // take_selfie() k liye ek or <TouchableOpacity></TouchableOpacity> bana lyta ho
    const take_selfie = async () => {
        // jab bhi hum camera useRef karty ha tou us k sth hamy .current lagana hota ha kabhi bhi ap ref banye gy or us ref ko kisi function may use kary gy tou ap ny lagana hoga camera.current mtlnb ref.current or us k bad ap us k mehtods ko or props ko use kar sakty ha 
        let photo = await camera.current.takePictureAsync();
        console.log('Photo=>', photo)

        // gallery may save karwany se pehly apko permission lyni pary ge is tarha
        await MediaLibrary.saveToLibraryAsync(photo.uri);
        // MediaLibrary.requestPermissionsAsync(writeOnly)
    }

    // jab ap first time kholy gy tou ye permission mangy ga
    if (!permission) {
        return <View />
    }
    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title='grant permission' />
            </View>
        )
    }

    // if (!library) {
    //     return <View />
    // }
    // if (!library.granted) {
    //     return (
    //         <View style={styles.container}>
    //             <Text style={{ textAlign: 'center' }}>Allow</Text>
    //             <Button onPress={requestPermissionsb} title='grant permission' />
    //         </View>
    //     )
    // }

    function toggleCameraType() {
        setType((current) => (
            current === CameraType.back ? CameraType.front : CameraType.back
        ));
    }

    return (
        // useRef
        // ref ko use karty howe takePictureAsync() ka ha
        // jis tarha hamary pass hooks hoty ha useState , useEffect tou is tarha se acha refrence hota kya ha jaisy k jab HTML,CSS or javaScript hum phar rahy thy tou hum id diya karty thy kisi bhi element ko or us
        // id k zariye us element ko get karty thy tou react may hum id k zariye get nh karty na react may id use karty ha..react may hum id ki jaga ek ref create karty ha thek ha abhi hum function component use kar rahy ha 
        // function component may ref create karny k liye ek Hook use hota ha jiska name ha "useRef" ub ye bunta kis tarha se ha const camera = useRef(null) starting may mainy rakh dyna ha (null) thek ha ub ma ye ref kisi bhi
        //  element ko dy skta ho mtlb react native k components may se kisi bhi component ko dy sakta homai ye <View></View> ko bhi dy sakta ho ma <Camera></Camer> ko bhi dy sakta  ho tou is se hoga kya jis ko ref dunga wo pura 
        // component uth k mery pass ajye ga abhi ma const camera = useRef(null) camera ka jo ref mai dydyta ho kis ko <Camera ref = {camera}></Camera> 
        <View style={styles.container}>
            <Camera ref={camera} flashMode={FlashMode.on} style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={toggleCameraType}>
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => take_selfie()}
                    >
                        <Text style={styles.text}>Take Picture</Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});


export default CameraApp
















// import { Camera, CameraType } from 'expo-camera';
// import { useState } from 'react';
// import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// export default function CameraApp() {
//   const [type, setType] = useState(CameraType.back);
//   const [permission, requestPermission] = Camera.useCameraPermissions();

//   if (!permission)
//   if (!permission.granted)

//   toggleCameraType = () => {
//     setType((current) => (
//       current === CameraType.back ? CameraType.front : CameraType.back
//     ));
//   }

//   return (
//     <View style={styles.container}>
//       <Camera style={styles.camera} type={type}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={toggleCameraType}>
//             <Text style={styles.text}>Flip Camera</Text>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//     </View>
//   );
// }







// Camera:
// react-native expo may hum dekhy gy k camera kaisy
// use karty ha
// Google search (expo Camera)
// link (Camera - Expo Documentation)
// install (expo install expo-camera)

// Type may hu isko btaty ha k front Camera use kary gy ya back Camera CameraType. hum apko abhi use kar k bata dy gy
// Camera facing. Use one of CameraType. When CameraType.front, use the front-facing camera. When CameraType.back, use the back-facing camera.

// flashMode
// apko flash on rakhna ya apny jab picture lyni ha jab on hojaye
// Camera flash mode. Use one of FlashMode.<value>. When FlashMode.on, the flash on your device will turn on when taking a picture, when FlashMode.off, it won't. Setting to FlashMode.auto will fire flash if required, FlashMode.torch turns on flash during the preview.


// autoFocus
// autoFocus aj kal sab mobile may hota ha aj kal
// State of camera auto focus. Use one of AutoFocus.<value>. When AutoFocus.on, auto focus will be enabled, when AutoFocus.off, it won't and focus will lock as it was in the moment of change, but it can be adjusted on some devices via focusDepth prop.


//  Zoom
// zoom ka ek prop ha mtlb camery ko ap zoom kar sakty ho zoom in or zoom out kar sakty ha zoom name ka ek prop hoga ap wo camery ko dydy gy or us may value jo ap set kar sakty ha 0 se ly k 1 tk
// A value between 0 and 1 being a percentage of device's max zoom. 0 - not zoomed, 1 - maximum zoom.



// onBarCodeScanned
// camery k undr hamy ek module hamy milta ha jis se hum QRcode ya BarCode ko bhi read karwa sakty ha mtlb ek barcode ha kisi product k upr hum usko bhi read karwa sakty ha us BarCode may kya value lekhi we ha  tou ye iska by defult featur ha camery ka jis se hum bar code ko bhi read kar sakty ha
// Callback that is invoked when a bar code has been successfully scanned. The callback is provided with an object of the BarCodeScanningResult shape, where the type refers to the bar code type that was scanned and the data is the information encoded in the bar code (in this case of QR codes, this is often a URL). See BarCodeScanner.Constants.BarCodeType for supported values.



// takePictureAsync(options)
// picture click karny ka mehthad ha ap is camery ko use karty howe picture bhi ly sakty ha picture ki cality kya hoga picture kis format may hogi wo sari cheezy ap is may bata sakty ha
// Documents ja read kar k use kar sakty ha



// reacodeAsync(options)
// reacodeAsync ye kya karta ha ap Camera use karty howe video bhi record karwa sakty ha
// Documents Read and use now



//////////// bhot he asan or samjh ny wali documentation banye ve ha koi bhi isko asani se samujh k use kar sakta ha tou aye hum use karty ha ////////////////////