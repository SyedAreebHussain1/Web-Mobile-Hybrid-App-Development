
// const INITIAL_STATE = {
//     users: [
//         {
//             name: 'Ali', email: 'aliguhal@gmail.com'
//         }
//     ]
// }

// export default (state = INITIAL_STATE,action) => {
//     console.log('action=>',action)
//     switch (action.type) {
//         case 'SETDATA':
//             return({
//                 ...state,users:[...state.users,action.payload]
//             })
//     }
//     return state
// }



const INITIAL_STATE = {
    users: [],
    current_user:{}
}

// ub jo bhi main action.payload k undr rakh k bhejo ga ye current_user may ja k save hojaye ga tou ma action.payload may kya rakh k bhej dunga jo data ma firebase may bhej raha ho
//  wo he data ma yaha current_user may bhej dunga 
 // jaisy hee dispatch call hoga reducer may aye ga ye wala function chaly ga perameter may action recive hoga action recive hony k bad switch case chaly ga us ki type dekhy ga jo k 'SETUSER' hogi or reture kardyga current_user or jo bhi hum action.payload may rakhy gy yaha pe set hojaye ga  
export default (state = INITIAL_STATE,action) => {
    // console.log('action=>',action)
    switch (action.type) {
        case 'SETUSER':
            return({
                ...state,
                current_user:action.payload
            })
    }
    // switch (action.type) {
    //     case 'SETFIREBASEUSERS':
    //         return({
    //             // main ny case keh diya case 'SETFIREBASEUSERS' or hamy kya karna ha users: ki array k undr set kardyna jo all users hamary pary we ho users:[...state.users] or is k sth sth hamy set kardyna action.payload users:[...state.users,action.payload] tou ub ye kya kary ga firebase se data get kar k laye ga or redux may bhej k usko users ki array may set karwa dyga
    //             ...state,users:[...state.users,action.payload]
    //         })
    // }
    switch (action.type) {
        case 'SETFIREBASEUSERS':
            return({
                     // action.payload direct hum ny Q lekh diya Q k ub hum directly action se puri array bhej rahy ha pehly hum obj bhej rahy thy ub hum directly puri array bhej rahy ha 
                ...state,users:action.payload
            })
    }
    return state
}