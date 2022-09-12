
const INITIAL_STATE = {
    users: [],
    current_user: {}
}
export default (state = INITIAL_STATE, action) => {
    // console.log('action_data', action)
    // console.log('action_data', action.payload)
    switch (action.type) {
        case "SETUSER":
            return ({
                ...state,
                current_user: action.payload
            })
    }
    switch (action.type) {
        case "SETFIREBASEDATA":
            return ({
                // action.payload hum ny direct Q lekh diya Q k ub hum directly action se puri array bhej rahy ha pehly hum sirf obj bhej rahy thy ub hum directly puri array bhej rahy ha  
                ...state, 
                users: action.payload
                // ...state, users:[ ...state.users,action.payload]    
            })
    }
    return state
}

