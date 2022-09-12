import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, ScrollView, FlatList, ImageBackground, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import Firebase from '../threesix/src/config/firebase'

import Navigation from './src/config/Navigation';

function App() {
  return(
      <Navigation/>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    backgroundColor: 'red'
  },
});

// Emulator pe reload karny k liye Ctrl + m click karna hota ha 
export default App
















// function App() {
//   const [todos, setTodo] = useState(['todos', 'areeb'])
//   const [value1, setvalue] = useState('')

//   const add_todo = (val) => {
//     setTodo([...todos, val]),
//       setvalue('')
//   }

//   const delete_all = () => {
//       setTodo([])
//   }

//   const delete_todo = (index) => {
//     todos.splice(index, 1)
//     console.log(todos);
//     setTodo([...todos])
//   }

//   const edit_todo = (index) => {
//     // alert('bol')
//     console.log(index)
//     const update_todo = prompt("Edit todo")
//     todos[index] = update_todo
//     setTodo([...todos])
//   }

//   return (
//     <ScrollView>
//       <View style={styles.container}>

//         <View style={styles.main1}>

//           <TextInput value={value1} onChangeText={(e) => setvalue(e)}
//             style={styles.TextInputTodo} placeholder='Todos'
//           />
//           <Button title='Add todo' onPress={() => add_todo(value1)} />
//           <Button title='DELETE All' onPress={() => delete_all()} />

//         </View>
//         {
//           todos.map((v, i) => {
//             return (<Text key={i} style={styles.lists}>
//               {v}
//               <Button title='Delete' onPress={() => delete_todo(i)} />
//               <Button title='Edit' onPress={() => edit_todo(i)} />
//             </Text>
//             )
//           })
//         }
//         <StatusBar style="auto" />


//       </View>
//     </ScrollView>
//   );
// }




////////////////////TodoApp Start////////////////////

// function App() {
//   const [todos, setTodo] = useState([])
//   const [value1, setvalue] = useState('')



//   const getDataFirebase = () => {
//     let todo = [];
//     firebase.database().ref(`todos`).on('child_added', (data) => {
//       // todo.push(data.val())
//       todo.push({ title: data.val().title, edit: false, key: data.val().key })
//       setTodo([...todo])

//       // console.log(todos);
//     })
//     // console.log(todo)
//   }
//   var key = firebase.database().ref('todos').push().key
//   const add_todo = () => {
//     let obj = { title: value1, key: key }
//     setTodo([...todos, obj]),
//       firebase.database().ref(`todos`).child(key).set(obj)
//     setvalue('')
//   }
//   useEffect(() => {
//     getDataFirebase()
//   }, [])
//   const edit_todo = (index) => {
//     todos[index].edit = true;
//     setTodo([...todos])
//     // firebase.database().ref(`todos`).child().set().then(() => getDataFirebase())
//     // firebase.database().ref(`todos`).set()

//   }
//   const update_todo = (index, title, key) => {
//     todos[index].title = title;

//     todos[index].edit = false;
//     setTodo(todos)
//     firebase.database().ref('todos').child(key).set({ title: todos[index].title, key: todos[index].key }).then(() => getDataFirebase())
//   }
//   const handleChange = (e, index) => {
//     // console.log(e)
//     todos[index].title = e;
//     setTodo([...todos])
//   }
//   const delete_todo = (k) => {
//     firebase.database().ref(`todos`).child(k).remove()
//       .then(() => getDataFirebase())
//   }
//   const delete_all = () => {
//     firebase.database().ref("todos").remove()
//     setTodo([])
//   }

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View>
//           <Text style={{ fontSize: 33, color: 'black', fontWeight: 'bold', borderColor: 'grey', borderWidth: 1 }}> <Image style={{ width: 20, height: 29, }} source={{ uri: 'https://www.gstatic.com/devrel-devsite/prod/v3f8eafc9e9ec34d001886958ac58f6b3d255ba70e9584b93488d1cf3a23653aa/firebase/images/touchicon-180.png' }} />Firebase TodoApp</Text>
//           <Text style={{fontSize:''}}>Web and Mobile Hybrid App Development</Text>
//         </View>
//         <View style={styles.main1}>

//           <View style={{
//             width: '80%',
//             // height: 50,
//             marginTop: 10,
//             flex: 1,
//             backgroundColor: '#fff',
//             alignItems: 'center',
//             justifyContent: 'center',
//             paddingTop: 20,
//           }}>
//             <TextInput value={value1} onChangeText={(e) => setvalue(e)}
//               style={styles.TextInputTodo} placeholder='Todos'
//             />
//           </View>

//           <Button title='Add todo' onPress={() => add_todo()} />
//           <Button title='DELETE All' onPress={() => delete_all()} />

//         </View>
//         {
//           todos.map((v, i) => {
//             return (
//               <Text key={i} style={styles.lists}>
//                 {v.edit ? (
//                   <View>
//                     <TextInput value={v.title} onChangeText={(e) => handleChange(e, i)} style={{ width: "100%", height: 20, color: 'black', borderColor: 'black' }} placeholder='update Todo' />
//                   </View>
//                 ) : (
//                   v.title
//                 )}
//                 {v.edit ? (
//                   <Button title='Update' onPress={() => update_todo(i, v.title, v.key)} />
//                 ) : (
//                   <Button title='Edit Todo' onPress={() => edit_todo(i)} />
//                 )}
//                 <Button title='Delete' onPress={() => delete_todo(v.key)} />
//               </Text>
//             )
//           })
//         }
//         <StatusBar style="auto" />
//       </View>
//     </ScrollView>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 100,
//     backgroundColor: 'red'
//   },
//   TextInputTodo: {
//     width: '100%',
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: 'black',
//     borderColor: 'grey',
//     borderWidth: 1
//   },
//   main1: {
//     width: 400,
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 20,
//     backgroundColor: 'blue'
//   },
//   lists: {
//     marginTop: 30,
//     fontSize: 20,
//   }
// });
///////////////////////////////////////////////// TodoApp END //////////////////////////////////






