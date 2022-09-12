// const INITIAL_STATE = {
//     app_name:"Chat App",
// }
// export default (state = INITIAL_STATE,action) => {
//     console.log("app_reducer_action=>",action)
//     return state;  
// }



const INITIAL_STATE = {
    app_name:"Chat App",
}
export default (state = INITIAL_STATE,action) => {
    console.log("app_reducer_action=>",action)
    switch (action.type){
        case "SETDATA" : 
        return({
            ...state,app_name:action.data
        })
    }
    return state;  
}