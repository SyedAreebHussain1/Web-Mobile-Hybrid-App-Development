import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useState, useRef, useEffect } from 'react';



function Camera() {
    // const { data } = route.params
    const [type, setType] = useState(RNCamera.Constants.Type.back);
    const camera = useRef(null)

    const take_selfie = async () => {
        let photo = await camera.current.takePictureAsync();
        console.log("photo=>", photo);

    };

    function toggleCameraType() {
        setType((current) => (
            current === RNCamera.Constants.Type.back ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back
        ));
    }


    return (
        <View style={styles.container}>
            <RNCamera style={styles.preview} type={type}

            />
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={toggleCameraType}>
                    <Text style={styles.text}>Flip Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => take_selfie()} style={styles.capture}>
                    <Text style={{ fontSize: 24 }}> SNAP </Text>
                </TouchableOpacity>
            </View >
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    Camera: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    CameraTxt: {
        fontSize: 30,
        color: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
        // color:'black'
    },
});
export default Camera


// import React from 'react';
// import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import { useCamera } from 'react-native-camera-hooks';

// const Camera = ({ initialProps }) => {
//     const [
//         { cameraRef, type, ratio, autoFocus, autoFocusPoint, isRecording },
//         {
//             toggleFacing,
//             touchToFocus,
//             textRecognized,
//             facesDetected,
//             recordVideo,
//             setIsRecording,
//         },
//     ] = useCamera(initialProps);

//     return (
//         <View style={{ flex: 1 }}>
//             <RNCamera
//                 ref={cameraRef}
//                 autoFocusPointOfInterest={autoFocusPoint.normalized}
//                 type={type}

//                 ratio={ratio}
//                 style={{ flex: 1 }}
//                 autoFocus={autoFocus}
//                 onTextRecognized={textRecognized}
//                 onFacesDetected={facesDetected}
//             />

//             <TouchableWithoutFeedback
//                 style={{
//                     flex: 1,
//                 }}
//                 onPress={touchToFocus}
//             />

//             <TouchableOpacity
//                 testID="button"
//                 onPress={toggleFacing}
//                 style={{ width: '100%', height: 45 }}>
//                 {type}
//             </TouchableOpacity>

//             {!isRecording && (
//                 <TouchableOpacity
//                     onPress={async () => {
//                         try {
//                             setIsRecording(true);
//                             const data = await recordVideo();
//                             console.warn(data);
//                         } catch (error) {
//                             console.warn(error);
//                         } finally {
//                             setIsRecording(false);
//                         }
//                     }}
//                     style={{ width: '100%', height: 45 }}
//                 />
//             )}
//         </View>
//     );
// };
// export default Camera