import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import {Image} from 'react-native'



// const Stack = createNativeStackNavigator();

// function Navigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen  name="About" component={About} />
//         <Stack.Screen  name="Contact" component={Contact} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{title:'My Home Screen',headerTintColor:'blue',
        headerStyle:{backgroundColor:'#fff'}, headerTitle: props => <Image style={{height:100,width:50,resizeMode:'contain'}} source={{uri:'https://w7.pngwing.com/pngs/426/895/png-transparent-google-logo-google-doodle-google-search-design-tshirt-company-text-trademark-thumbnail.png'}}/> } } 
        name="Home" component={Home} />
        <Stack.Screen options={{title:'About Us' ,headerTintColor:'green'}} name="About" component={About} />
        <Stack.Screen options={{title:'ContactUs'}} name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;