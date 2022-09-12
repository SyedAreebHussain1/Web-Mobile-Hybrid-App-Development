import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

// function App() {
//   // useState
//   // pehly waly index k undr hum rakh dy gy property ka nam or dusry index pe hum dyty ha function acha ye function Q dydy ha name ko update karwany k liye jio start may ap value lekhty ha wo ap useState('Ghous') k undr lekhty ha 
//   // pehly waly index may jo dy raha ho wo property or dusry waly index may jo dy raha ho wo ha function jis se hum state ko update kary gy 
//   // const [name , setName] = useState('Ghous')

//   // acha agr apko multiples property use karni ha
//   // property ka nam bhi ma apni marzi se dy sakta ho or function jo jo ha jis se meri property udate hogi uska naam bhi apni marzi se dy sakta ho
//   // const [name, setName] = useState('Ghous')
//   // const [email, setEmail] = useState('ahous@gamuil.com')


//   // function compopnent may ap k jitny bhi function bany gy wo bany gy return k upr is tarha function ap jitny bhi banaye gy wo ap banye gy return k uper banaye gy or ap arrow function hee use kariye ga  
//   // const [name, setName] = useState('Ghous')
//   // const [email, setEmail] = useState('ahous@gamuil.com')
//   // const handleClick = () => {
//   //   setName('Ahmed')
//   //   setEmail('ahmed@gmail.com')
//   // }


//   // acha hamary pass array ha or hamy array may koi change karwana ha 
//   // const [arr, setArr] = useState(['car'])
//   // const handlearray = () => {
//   //   // acha is ka acha tareeka ye ha k ap old wali array magwa ly gy old_array = arr is k undr ma rakh dunga arr jo k state se arrahi ha 
//   //   setArr([...arr, 'bike', 'truck'])
//   // }


//   // acha hum useState may hum obj bhi bana sakty ha 
//   // const [ obj, setObj ] = useState({
//   //   name: 'ghous',
//   //   email: 'ghous@gmail.com'
//   // })
//   // const handlearray = () => {
//   //   setObj({
//   //     name:'Ahmed',
//   //     email:'ahmed@gmail.com'
//   //   })
//   // }

//   // const [obj, setObj] = useState({
//   //   name: 'ghous',
//   //   email: 'ghous@gmail.com'
//   // })
//   // const handlearray = () => {
//     // is trha se obj ko update bhi karwa sakty ha. obj k undr property add bhi karwa sakty ha koi property delete bhi karna chahy tou delete bhi kar sakty ha 
//   //   setObj({
//   //     ...obj,
//   //     school: 'SAYLANI'
//   //   })
//   //   console.log(obj)
//   // }
//   return (
//     <div className="App">
//       <h1>React Hooks</h1>
//       {/* useState */}
//       {/* ub react may new feture agye ha agr hum react ko import bhi nh kary gy tou bhi react chaaly gee par shart ye ha k function component ho agr mera function component ha tou ma react ko import kary bina bhi lekh sakta ho */}
//       {/* acha bhi mujhy useState karna ha tou import React,{useState} from 'react' lekhoga  */}

//       {/* <h2>{name}</h2>
//       <button onClick={()=>setName('Ahmed')}>Update Name</button> */}
//       {/* // this.setState({name:''}) ka mehtod hum use karty thy class ko update karwany k liye jo bhi name lekhta wo upatde hojata tou hum Hooks k undr function k undr kis tarha se update karwaye ye hum dekh lyty ha setName('') ka jo function ha us k undr value dy dunga or button k upr onclick karwa dunga <button onClick={()=>setName('Ahmed')}>Update Name</button> */}


//       {/* multiple property */}
//       {/* <h2>{name}</h2>
//       <h2>{email}</h2>
//       <button onClick={() => setName('Ahmed')}>Update Name</button>
//       <button onClick={() => setEmail('ahmed@gmail.com')}>Update Email</button>*/}


//       {/* 
//       <h2>{name}</h2>
//       <h2>{email}</h2>
//       <button onClick={handleClick}>Update Name</button> */}


//       {/* <ul>
//         {arr.map((v, i) => {
//           return (
//             <li key={i}>
//               {v}
//             </li>
//           )
//         })}
//       </ul>
//       <button onClick={handlearray}>Update Array</button> */}

//       {/* obj ko get kaisy kary gy */}
//       {/* <h2>{obj.name}</h2>
//       <h2>{obj.email}</h2>
//       <h2>{obj.school}</h2>
//       <button onClick={handlearray}>Update obj</button> */}

//     </div>
//   );
// }

// props
// function App() k pera meter k may props hamy recive hungy 
// import Home from './Home';
// function App(props){
//   // console.log(props)
//   return(
//     <div className="App">
//       <h1>React Hooks</h1>
//       <Home name='Ghous Ahmed' email="ghousahmed@gmail.com" />
//     </div>
//   )
// }


// lifeCycle use karny k liye hum useEffect use kary gy
// hum ye dekh rahy ha lifeCycle k mehtods function component may kaisy use kary gy
function App() {
  // const [name,setName] = useState("ghous")

  // ye wala kab chaly every render pe chaly ga 
  useEffect(() => {
    // ye kab chaly ga jab jab render ka mehtod dubara chaly ga tou chal jaye ga ye
    // jab jab render chaly ga tou ye wala useEffect chal jaye ga 
    console.log('I will run on every render')
  })


  // componentDidmount() ki tarha work kary ga 
  // componentDidmount() kab chalta ha jab component render ho jata ha tou ye bhi us he tarha se work kary ga 
  // ye kab chaly ga I will run only on first render jab first render chaly ga jab ap page reload kary gy first time render chaly ga tou ye run hojaye ga
  // ye kab chaly ga sirf first render pe
  // ye wala kab chaly ga only on first render pe pr
  useEffect(() => {
    // componentDidmount
    // agr mujhy API call karni hogi tou ma ye wala useEffect use karogaa
    console.log('I will run only on first render')
  }, [])


  // is k undr state ki ya phir props ki jo bhi property hum pass kary gy tou ye jab chaly ga jab wo property update hogi 
  // ye kab chaly ga jab jab name may change aye ga ye chaly ga 
  // acha ye wala kab chaly ga jab bhi name ki property update hogi jis tarha se hum static getDerivedStateFromProps (){} use karty thy wo kab chalta tha jab jab props ya state update ho rahy ha tou wo dubara se chalta tha
  // acha ub hum is may ek specific property bhi bata sakty ha k jab ye property update ho tub ye chal jaye is may multiples propertys bhi hum dy sakty ha 
  // acha ye wala first render pe chaly ga or jab jab name ya email update hoga jab chaly ga 
  // ekbar first render pe chal jaye ga or second time jab name,email update hogyjab chaly gy
  const [name, setName] = useState("ghous")
  const [email, setEmail] = useState("ghous@gmail.com")
  useEffect(() => {
    // getDerivedStateFromProps
    console.log("I will run everytime when name update")
  }, [name, email])


  // component unmount
  // ye kab chaly ga jab component unmount hojaye ga
  useEffect(() => {
    return () => {
      console.log('Unmount')
    }
  })
  return (
    //       {/* ub hum agy barty ha react k undr hum claas component may hum componentDidmount() use karty thy componentDidmount() ki jaga hum kya use kar sakty ha wo dekh lyty ha Hooks hamy useEffects ka mehtod dy raha  Hooks hamy useEffect ka mehtod dy raha ha hum use kar k dekh lyty ha */}
    <div className="App">
      <h1>React Hooks</h1>
      <h2>{name}</h2>
      <h2>{email}</h2>
      <button onClick={() => setName('ahmed')}>Update</button>
    </div>
  )
}

export default App;
