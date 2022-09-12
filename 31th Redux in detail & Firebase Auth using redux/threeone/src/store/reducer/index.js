
// const INITIAL_STATE = {
//     users: [{
//         page: 'Home',
//         name: 'Ghous',
//         email: 'ghous@gmail.com'
//     }]
// }
// export default (state = INITIAL_STATE) => {
//     return state
// }







// const INITIAL_STATE = {
//     users:[
//         {
//             name: 'Ghous', email: 'ghous@gmail.com'
//         },
//         {
//             name: 'Basit', email: 'basit@gmail.com'
//         }
//     ]
// }

// export default (state = INITIAL_STATE,action) => {
//     console.log('reducer-action',action)
//     if(action.type == 'SETDATA'){
//         return ({
//             ...state,users:[...state.users,action.data]
//         })
//     }
//     return state
// }





const INITIAL_STATE = {
    users: [
        {
            name: 'Ghous',
            email: 'ghous@gmail.com'
        },
        {
            name: 'Basit',
            email: 'basit@gmail.com'
        }
    ]
}

// kahi par bhi dispatch call hoga ye wala function run ho hojaye ga 
// jab bhi hum dispatch hum call kary gy ye wala fuction run hojaye ga or dispatch k undr jo bhi data hum bhejy gy wo hamy action k undr a k mil jaye ga or hamy data action.data may mil jaye ga 
//// acha is k sth sth reducer may mujhy ek function banana hota ha jis function may ma apni state ko update karwata ho or return karwata ho directly function ko export default kardiya ha export defult (state = INITIAL_STATE) => {return state} is function may dou perametr hoty ha ek hota ha hamari INITIAL_STATE jis ko main defult perametr may rakh dyta ho (state = INITIAL_STATE) dusra hota ha action (state = INITIAL_STATE,action)
export default (state = INITIAL_STATE,action) => {
    // console.log("action==>",action)
    // console.log("state=>",state)
    // console.log("Redux-action-data==>",action.data)
    // console.log("Redux-action==>",action.type)
            // jab bhi dispatch call hoga tou reducer k undr jo function ha wo run hojaye ga 
            // jo bhi dispatch may data hoga wo action k undr hamy recive hojaye ga
    switch (action.type){
        case "SETDATA":
            // jo bhi cheez waha pe return karunga upr state may ja k set/save hojaye gee
            return ({
                // users ki array k undr se sary users nikal liye , dal k action.data matlb ek or mazeed users yaha pe aadd kardiya add kardiya 
                //    or jo bhi ma dispatch k undr obj bhejo ga wo mujhy action k undr a k mujhy mil jaye gee action se ly k ma apni global state may save karwa dunga 
                ...state,
                       //state.users may pehly se jo users ha undr unko ly ao   
                users:[...state.users,action.data]
                                    //action.data k undr hamy konsa data mil raha ha jo humny dispatch k undr pass kar rahy ha dispatch k undr jo bhi data hum pass kary gy wo action k undr hammy mil jaye ga  
            })
    }
    return state
}





// const INITIAL_STATE = {
//     users: [
//         {
//             name: 'Ghous',
//             email: 'ghous@gmail.com'
//         },
//         {
//             name: 'Basit',
//             email: 'basit@gmail.com'
//         }
//     ]
// }

// // kahi par bhi dispatch call hoga ye wala function run ho hojaye ga 
// // jab bhi hum dispatch hum call kary gy ye wala fuction run hojaye ga or dispatch k undr jo bhi data hum bhejy gy wo hamy action k undr a k mil jaye ga or hamy data action.data may mil jaye ga 
// //// acha is k sth sth reducer may mujhy ek function banana hota ha jis function may ma apni state ko update karwata ho or return karwata ho directly function ko export default kardiya ha export defult (state = INITIAL_STATE) => {return state} is function may dou perametr hoty ha ek hota ha hamari INITIAL_STATE jis ko main defult perametr may rakh dyta ho (state = INITIAL_STATE) dusra hota ha action (state = INITIAL_STATE,action)
// export default (state = INITIAL_STATE,action) => {
//     console.log("action==>",action)
//     // console.log("state=>",state)
//     // console.log("Redux-action-data==>",action.data)
//     // console.log("Redux-action==>",action.type)
//             // jab bhi dispatch call hoga tou reducer k undr jo function ha wo run hojaye ga 
//             // jo bhi dispatch may data hoga wo action k undr hamy recive hojaye ga
//     switch (action.type){
//         case "SETDATA":
//             // jo bhi cheez waha pe return karunga upr state may ja k set/save hojaye gee
//             return ({
//                 // users ki array k undr se sary users nikal liye , dal k action.data matlb ek or mazeed users yaha pe aadd kardiya add kardiya 
//                 //    or jo bhi ma dispatch k undr obj bhejo ga wo mujhy action k undr a k mujhy mil jaye gee action se ly k ma apni global state may save karwa dunga 
//                 ...state,
//                        //state.users may pehly se jo users ha undr unko ly ao   
//                        users:[...state.users,action.users]
//                     //    users: action.users
//                     //    users:[]
//                     //    users:'khali'
//                                     //action.data k undr hamy konsa data mil raha ha jo humny dispatch k undr pass kar rahy ha dispatch k undr jo bhi data hum pass kary gy wo action k undr hammy mil jaye ga  
//             })
//     }
//     return state
// }

