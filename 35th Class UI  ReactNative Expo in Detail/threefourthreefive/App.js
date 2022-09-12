import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, ScrollView, FlatList,ImageBackground,ActivityIndicator } from 'react-native';

// const DATA = [
//   {
//     id: '',
//     title: 'First Item'
//   },
//   {
//     id: '',
//     title: 'Second Item'
//   },
//   {
//     id: '',
//     title: 'Third Item'
//   },
//   {
//     id: '',
//     title: 'Four Item'
//   },
//   {
//     id: '',
//     title: 'Five Item'
//   }
// ]

// function App() {
//   // const [name, setName] = useState('Areeb Hussain')
//   // const [email, setEmail] = useState('sareeb@gmail.com')
//   // const handlechange = () => {
//   //   setName('ghous')
//   //   setEmail('ghous@gmail.com')
//   // }
//   return (

//     // <View style={styles.container}>
//       {/* <Text>{name}</Text>
//       <Text>{email}</Text> */}
//       {/* <Button title='update Name' onPress={()=> setName('Ali Mughal')} />
//       <Button title='update Email' onPress={()=> setEmail('AliMughal@gmail.com')} /> */}
//       {/* <Button title='update' onPress={() => handlechange()} /> */}
//       {/* <Text style={{fontSize:32, color:'red'}}>Hello world</Text> */}
//       {/* <Text style={styles.Texts}>Hello world</Text> */}

//       {/* url se Image laga ny ka ye tareka ha uri: "url" */}
//       {/* ap ko url se Image laga ni tou ap source k undr ap ek obj banye gy us k undr uri nam ki ek property dygy or us uri:'ulr' dygy  */}
//       {/* <Image style={styles.Imageuri} source={{ uri: "https://i.dawn.com/primary/2022/05/6293d74452150.jpg" }} /> */}

//       {/*local Image lagany k liye ap require k undr Image ka path dydy gy is tarha se ap local Image download kar k laga sakty ha */}
//       {/* <Image style={styles.Imageuri} source={require('./assets/Images/car.jpg')} /> */}

//       {/* TextInput */}
//       {/* <TextInput 
//       // value='ghous'
//       onChangeText={(text)=> console.log(text)}
//       // // keyboardType='number-pad'
//       // secureTextEntry={true}
//        style={{ width: '80%', height: 40, backgroundColor: 'black',color:'#fff' ,borderColor: 'gray', borderWidth: 1 }} placeholder='Enter Value' /> */}

//       {/* <Button /> ye wala button banaty waqt styleing may bhot issues aty ha */}
//       {/* <Button style={styles.btn} title={'Click me'}
//         onPress={()=>alert("Hello World")}
//        /> */}


//       {/* TouchableOpacity */}
//       {/*button ki jaga ek or kya tareeka ha jo zidatar use hota ha us k liye component hum use karty ha jiska name ha TouchableOpacity..TouchableOpacity hum use karty ha as a button    */}

//       {/* <TouchableOpacity activeOpacity={0.5} onPress={()=>alert("Hello world")} style={styles.TouchableOpacity}>
//           <Text style={styles.btnText}>Click me</Text>
//          </TouchableOpacity> */}


//       {/* acha ub hum is ko responsve kaisy banaya jaye responsve banany k liye hum ziadatar is may flex use karty ha jo k apko achi tarha use karna ata ha   */}

//       {/* <View style={styles.main1}>
//         <Text style={styles.texts}>Header</Text>
//       </View>
//       <View style={styles.main2}>
//         <View style={styles.boxes}>
//           <View style={styles.item}>
//             <Text>Item</Text>
//           </View>
//           <View style={styles.item}>
//             <Text>Item</Text>
//           </View>
//           <View style={styles.item}>
//             <Text>Item</Text>
//           </View>
//           <View style={styles.item}>
//             <Text>Item</Text>
//           </View>
//           <View style={styles.item}>
//             <Text>Item</Text>
//           </View>
//           <View style={styles.item}>
//             <Text>Item</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.main3}>
//         <Text style={styles.texts}>Footer</Text>
//       </View> */}


//       {/* ScrollView + map */}
//       {/* hum apko card wagera bana sekha dyty ha ek aisy website ha react native elevation  */}
//       {/* <View style={styles.card}>
//         <Text style={{ fontSize: 32 }}>Ghous Ahmed</Text>
//       </View> */}
//         {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v, i) => {
//           return (
//             <View style={styles.card}>
//               <Text style={{ fontSize: 32 }}>Ghous Ahmed</Text>
//             </View>
//           )
//         })
//         } */}

//         {/* ScrollView + FlatList */}
//         {/* <FlatList 
//         data={DATA}
//         renderItem={(data)=>{
//           return(
//             <View style={styles.card}>
//             <Text style={{ fontSize: 32 }}>{data.item.title}</Text>
//           </View>
//           )
//         }}
//         keyExtractor={item => item.id}
//         /> */}


//            {/* ImageBackground */}
//            {/* ImageBackground hum use karty backgroundimage lagany k liye */}
//            {/* <ImageBackground style={{width:'100%',height:'100%'}} source={{uri:'https://i.pinimg.com/originals/e9/79/27/e9792750cbbe7787015d1f759f7c743c.jpg'}} >
//             <Text style={{color:'#fff',fontSize:44,marginTop:100}}>Hello World</Text>
//            </ImageBackground> */}



//            {/* ActivityIndicator loding */}
//             {/* <ImageBackground style={{width:'100%',height:'100%'}} source={{uri:'https://i.pinimg.com/originals/e9/79/27/e9792750cbbe7787015d1f759f7c743c.jpg'}} >
//             <Text style={{color:'#fff',fontSize:44,marginTop:100}}>Hello World</Text>
//            <ActivityIndicator size='large' color='#fff' />
//            </ImageBackground> */}



//       {/* <StatusBar style="auto" /> */}
//     {/* </View> */}

//   );
// }


      {/* reactjs may hum ek page se dusri page pe jany k liye hum react-router-dom use kar rahy thy react native k undr React Navigation use karty ha ek page se dusry page pe jany k liye  */}
//            {/* npm install @react-navigation/native */}
// import Home from './src/screens/Home';
// import Contact from './src/screens/Contact';
// import About from './src/screens/About';
import Navigation from './src/config/Navigation';


// function App(){
// <Home/>
// <Contact/>
// <About/>
// }

function App(){
  return(
  <Navigation/>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    backgroundColor: '#fff',
    alignItems: 'center',
    // paddingTop: 70
  },
  Texts: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 32
  },
  Imageuri: {
    width: 400,
    height: 400,
    // Image jab apki cut rahi ho tou resizeMode:'contain' use karly Image full show hojaye ge 
    resizeMode: 'contain'
  },
  btn: {
    // borderColor:'red',
    color: 'green',
    backgroundColor: 'red'
  },
  TouchableOpacity: {
    backgroundColor: 'purple',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#fff',
    fontSize: 20
  },
  main1: {
    backgroundColor: 'blue',
    width: '100%',
    flex: 1,
    // marginTop:10
  },
  main2: {
    backgroundColor: 'green',
    width: '100%',
    // flex:1
    flex: 8,
    // flex:3,
  },
  main3: {
    backgroundColor: 'orange',
    width: '100%',
    // flex:1,
    flex: 1,
  },
  texts: {
    fontSize: 30,
    color: '#fff'
  },
  boxes: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignContent: 'center'
  },
  item: {
    backgroundColor: '#fff',
    width: 110,
    height: 110,
    marginBottom: 10
  },
  card: {
    backgroundColor: '#fff',
    width: '80%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  }
});
export default App