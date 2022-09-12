import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import About from '../Screens/About';
import Contact from '../Screens/Contact';
import Picker from '../Screens/Imagepicker';
import Camera from '../Screens/Camera';
import Fdatabase from '../Screens/Firebasedatabase';


const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Contact" component={Contact} />
                <Stack.Screen name="Camera" component={Camera} />
                <Stack.Screen name="Picker" component={Picker} />
                <Stack.Screen name="Database" component={Fdatabase} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;