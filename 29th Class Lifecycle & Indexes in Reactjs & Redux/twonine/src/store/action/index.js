// const set_data = () =>{
//     console.log("hello")
// }
//  export {
//     set_data
//  }


const set_data = (data) =>{
    return(dispatch) => {
        dispatch({type:"SETDATA",data:data})
    }
}
 export {
    set_data
 }


