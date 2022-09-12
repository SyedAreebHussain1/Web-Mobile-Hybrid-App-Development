/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import AppNavigation from './src/config/navigation';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {

  // var HelloWorld = 'Hello World!'
  // var names = ['Muhammad Ali','Ghous Ahmed','Basit Khan']
  // names.push('Areeb Hussain')
  // console.log(names)
  return (
      <AppNavigation />
      // <View>
      //   <Text style={{color:'red',fontSize:44}}>Hello</Text>
      // </View>
  
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
