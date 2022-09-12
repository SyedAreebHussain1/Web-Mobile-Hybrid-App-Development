const INITIAL_STATE = {
    username:"Ghousahmed",
    email:"ghous@gmail.com",
}
export default (state = INITIAL_STATE, action) => {
    console.log("auth_reducer_action=>",action)
    return state;  
}