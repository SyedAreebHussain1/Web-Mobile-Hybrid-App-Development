// import React,{useEffect} from "react"
// function Home(props) {
//     return(
//         <div>
//             <h1>Home</h1>
//             <h2>{props.name}</h2>
//             <h2>{props.email}</h2>
//         </div>
//     )
// }
// export default Home

//  props ka ek or tareeka ha agr ap chaty ha ap k pass props kum ha 2/3 props ap k pass ha  tou ap isko is tarha bhi kar sakty ha ap perametr k undr banye gy ek obj or obj k undr props lekhny k bajye directly ap property ka name lekh dy gy 
// destructing wali chez yaha pe ho rahi ha  
// is tarha se bhi ap props kar sakty ha obj may 
function Home({name,email}) {
    return(
        <div>
            <h1>Home</h1>
            <h2>{name}</h2>
            <h2>{email}</h2>
        </div>
    )
}
export default Home