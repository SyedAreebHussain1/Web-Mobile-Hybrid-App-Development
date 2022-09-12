import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, ScrollView, FlatList, ImageBackground, ActivityIndicator } from 'react-native';
// import { ImageBackground } from 'react-native';

import CameraApp from '../screens/Camera';
import ImagePickerExample from '../screens/Gallery';
import Map from '../screens/Map';

const Stack = createNativeStackNavigator();
function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ title: "My Home screen", headerStyle: { backgroundColor: '#fff' }, headerTitle: props => <Image style={{ height: 120, width: 70, resizeMode: 'contain' }} source={{ uri: 'https://w7.pngwing.com/pngs/426/895/png-transparent-google-logo-google-doodle-google-search-design-tshirt-company-text-trademark-thumbnail.png' }} /> }} name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Contact" component={Contact} />
                <Stack.Screen name="Camera" component={CameraApp} />
                <Stack.Screen name="ImagePickerExample" component={ImagePickerExample} />
                <Stack.Screen name="Map" component={Map} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation


// function Navigation() {
    //     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen options={{ title: "My Home screen", headerStyle: { backgroundColor: '#fff' }, headerTitle: props => <Image style={{ height: 120, width: 70, resizeMode: 'contain' }} source={{ uri: 'https://w7.pngwing.com/pngs/426/895/png-transparent-google-logo-google-doodle-google-search-design-tshirt-company-text-trademark-thumbnail.png' }} /> }} name="Home" component={Home} />
//                 <Stack.Screen name="About" component={About} />
//                 <Stack.Screen name="Contact" component={Contact} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }