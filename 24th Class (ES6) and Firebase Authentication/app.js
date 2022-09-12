
// destructuring ES5

// let obj = {
//     name: "ghous",
//     email: "ghous@gamil.com"
// }
// let name = obj.name
// let email = obj.email
// console.log(name)
// console.log(email)



// Topic obj destructuring ES6
// ES6 may jitni bhi obj ki property ha wo hum acess kar rahy h asani se

// let obj = {
//     names: "ghous",
//     email: "ghous@gamil.com"
// }
// let {names,email} = obj;
// console.log(names)
// console.log(email)




//Array destructuring nh uski tarha work karta ha   ES5
// array ko kisi variable k undr store karwana ho ..destructuring nh ha nechy ha wo

// let arr = ["ghous","basit","umair"]
// let nam0 = arr[0]
// let nam1 = arr[1]
// let nam2 = arr[2]
// // console.log(nam0)
// console.log(nam1)
// console.log(nam2)




// Topic Array destructuring ES6
// jis tarha humny obj may kaara tha destructuring bilkul same array may ho raha ha sirf farq kya ha {} hata k humny array k [] laga diye or ismay index se target kar raha ha 
// obj destructuring may property se targert kar raha tha or is may index se target kary ga 
// pehly ap multiple variables banaty thy array ko acess krny k liye array k kisi specific index ko acess karny liye destructuring ki madad se apka kam asan hogaya code apny 
// ek he line may lekha or appny variable ek he declare kara ap asani se sary element ko access kar sakrahy h 

// let arr = ["ghous","basit","umair"]
// let [name1,name2,name3] = arr
// console.log(name2)





// Topic Function Expressions
// ES5 may bhi hum isko use karty ha 

// function foo(){
//     console.log("This is ES5 Function Expressions")
// }
// foo()


// istarha bhi bana sakty ha function  
// ES5 ka he topic ha bus is may humny function ko variable may save karawa ha  or function ka name humny remove kardiya bulky humny function ko ek variable k undr asing kardiya 
// main function ko call karwaoga using variable acha humhy agr function ka agr nam nh dyna bilky hum usy kisi variable k undr declear kar sakty ha 
// this is function Expressions acha sirf code lekhny ka tareeka change howa  ha baki sab wo hi h
// nam ki jaga humny function ko ek variable may declear kardiya 
// let foo = function(){
//     console.log("I'm Function Expressions")
// }
// foo()






// Topic Arrow function.  () =>

// ES5 normal funtion 
// function hello(){
//     console.log("ES5 Normal function")
// }
// hello()


// ES6 arrow function
// is may inho ny function ka jo nam ha wo hata diya uski jaga yaha pe inho ny dy diya arrow =>
// let hello = () => {
//     console.log("I'm arrow function ES6")
// }
// hello()





// ES5 may peramater agr passs karta function may tou is trha karta
// function foo(nam){
//     console.log("Hello " + nam)
// }
// foo("ghous")



// arrow function may perametter pass is tarha hoga agr ek perametter ha tou () lagany ki zarorat nh hogi
// normal function se ziada achi perfumance hoti ha arrow function ki
// let hello = (name) => {
//     console.log(`Hello ${name}`)
// }
// hello("ghous")



// agr hamary pass single peramatter ha tou hamy () laga ny ki zarorat nh ha 
// let hello = name => {
//     console.log(`Hello ${name}`)
// }
// hello("ghous")



// perameters 
// let hello = (name1,name2) => {
//     console.log(`Hello ${name1} and ${name2}`)
// }
// hello("ghous","basit")




// return bhi karwa sakty ha 

// let hello = () => {
//     return "Ghous"
// }
// console.log(hello())



// agr ap koi peramater nh dy rahy ha tou () ki jaga _ bhi laga sakty ha 
// let hello = _ => {
//     return "Ghous"
// }
// console.log(hello())


// hum chaty ha return key word use nh ho  
// agr apko koi cheez return karwani h directly tou ap {} na lagye => "ghous" lekh dy function directly return krdyga nechy i.e
// let hello = () => "ghous"
// console.log(hello())




// arrow function may agr ap this call kary this tou sab ko pata hoga this kya hota ha kisi bhi function k undr kisi bhi HTML ko get kar rahy ha
//  or this call kar rahy this kis ko target karta ha jo bhi uska parent ha ma agr kisi function k undr this ko call karo tou wo function ko target kary ga agr kisi element k undr this ko call karo tou wo us element ko target kary ga        

// ES5 function may this ko target karna may this
// javascript may shayad apko iska farq pata nh chaly jab hum react ya koi or frame work phary gy tou us may kya hota ha noremal function may
//  ap thiss call karygy tou usey function ko get karta ha 
// ES5 function ki agr bat ki jaye tou this call kiya jaye tou wo use function ko target kary ga jis may wo this call kara gaya ha ES5 or ES6 function may ye bhi ek bara farq ha
// normal function function ka this lyta ha 
// function foo(){
//     console.log(this)
// } 
// foo()



// agr ap arrow function k undr this ko call kary gy tou wo function k undr jo uska parent hoga wo usko target kary ga ye faida jb apko pata chaly ga jab ap react pary gy
// Arrow function k undr agr ma this call karunga tou wo kya karyga apna this nh bulky apny parent ka this apko la k dyga arrow function ka ek ye bhi faida ha  
// arrow function apny parent ka thhis lyta ha simple function jo ha wo apna this lyta ha bus apko ye dou cheezy yaad rakhni ha 
// let hello = () => {
//     console.log(this)
// }
// hello()




// Topic call back funtion hairbac function 
// apko yaad hoga humny para tha setInterval or setTimeout ye hum se dou value lyta ha pehli value function or dusri may time 
// setInterval ek function javascript ka jo bydefult ha 
// javascript may koi asia function jo peramater may he function ly raha ho usko call back function bolty ha  
// setInterval(() => { 
//     console.log("Hello") 
// },1000)

// setTimeout(() => { 
//     console.log("Hello") 
// },2000)




// ek function se dusry function may data ly k jana
// ye kehlata ha call back function
// function k undr function bhi pass kar sakty ha
// promise kr k bhi isko use kr sakty or call back function se bhi use kar sakty ha
// jo function apny undr peramater recive kr raha ho usko highorder funct6ion bolty h getData function is highorder

// ES5
// function getData(renderData) {
//     firebase.database().ref("/").on("child_added", function (data) {
//         renderData(data.val())
//     })
// }
// getData(renderData)
// function renderData(data) {
//     console.log(data)
// }



// function getData(renderData) {
//         setTimeout(() => {
//             renderData("Ghous")
//         }, 3000)
// }
// function renderData(names) {
//     console.log(names)
// }
// getData(renderData)




// ES6
// let getData = (render_data) => {
//     setTimeout(() => {
//         render_data("Ghous")
//     }, 3000)
// }
// let render_data = (nam) => {
//     console.log(nam)
// }
// getData(render_data)






//Topic Array functions
// Topic highorder function bhi bolty ha
// filter k under hamy return karwana hota ha true ya false

// ES5
// array k undr ma ny rakhwaye ve ha 2 elements
// let arr = [{ names: "ghous", age: 20 }, { names: "basit", age: 30 }]
// // // filter() name ka function is ko hum highorder function bhi bol sakty ha ub ye humse apny undr lyta ha call back function
// let filter = arr.filter(function (item) {
//     return true
// })
// console.log(filter) //(2)[{..},{..}]



// condition banai ha humny age agr barabar ho 20 k wo wala array utha k lao
// let arr = [{ names: "ghous", age: 20 }, { names: "basit", age: 30 }]
// let filter = arr.filter(function (item) {
//     return item.age === 20
// })
// console.log(filter) //[{names: 'ghous', age: 20}]




// let arr = [{ names: "ghous", age: 20 }, { names: "basit", age: 30 }]
// let filter = arr.filter(function (item) {
//     return item.names === "basit"
// })
// console.log(filter) //[{names: 'basit', age: 30}]




// //  ES6
// let arr = [{ names: "ghous", age: 20 }, { names: "basit", age: 30 }]
// let filter = arr.filter((item) => {
//     return item.age === 20
// })
// console.log(filter)// [{names: 'ghous', age: 20}]

// console k undr kiya tha ye
// var age = 20
// age === 20 true ya false dyga javascript



// 10 saal se bara jo bhi sab ko utha k ly ao condition
// let arr = [{ names: "ghous", age: 20 }, { names: "basit", age: 30 }]
// let filter = arr.filter((item) => {
//     return item.age > 10
// })
// console.log(filter) //(2)[{..},{..}]





// let arr = [{ names: "ghous", age: 20 }, { names: "basit", age: 30 }]
// let filter = arr.filter((item) => {
//     return false
// })
// console.log(filter) //[empty array]



// let arr = [{ names: "ghous", age: 20 }, { names: "basit", age: 30 }]
// let filter = arr.filter((item) => {
//     return true
// })
// console.log(filter)// (2)[{..},{..}]





// Topic Array Map ES6
// array ka ek or function ha MAP
// ye bhi bilkul filter ki trha he chalta ha
// Map bhi ek function ha wo he highorder function kehlaye ga or is may bhi hum as a arrgument ek function pass karty ha
// or purani array ko update kar k new array bana dyta ha

// new array create kardyta ha
// agr map nh hota tou ES5 may ye kam hum karty forloop se forrloop ap array pe chalty forloop kya karta array k sary elements return karwata phir get kar multiple ya mainus etc sab karwaty
// let arr = [2, 3, 4, 5];
// console.log(arr) //[2,3,4,5]
// let multiple = arr.map((a) => {
//     return a * 2
// })
// console.log(multiple) //[4,6,8,10]


// let arr = [1, 2, 3, 4];
// console.log(arr)
// let multiple = arr.map((a) => {
//     return a * 2
// })
// console.log(multiple) //[2, 4, 6, 8]



// object ko update bhi karsakty ha map new array k liye
// let arr = [{ names: "ghous" }, { names: "basit" }];
// console.log(arr)
// let multiple = arr.map((a) => {
//     return a.names = "Umair"
// })
// console.log(multiple)





// Topic Search
// startsWith
// search ki functionality banany may kam ata ha
// let names = "ghous";
// let search = "gh"
// if (names.startsWith(search)) {
//     console.log(names) ////startsWith mtlb strt k g agr match kary ga tou ye chaly ga wrna nh chaly ga
// } else {
//     console.log("Your first word is not match ghous")
// }




// let name = "ghous";
// let search = "ou"
// if(name.startsWith(search)){
//     console.log(name)
// }else{
//     console.log("Your first word is not match 'g'")
// }





// endsWith
// let name = "ghous";
// let search = "us"
// if(name.endsWith(search)){
//     console.log(name)
// }else{
//     console.log("Your end word is not match ghous")
// }



// let name = "ghous";
// let search = "sh"
// if(name.endsWith(search)){
//     console.log(name)
// }else{
//     console.log("Your end word is not match 's'")
// }




// jitny database ha in sab se communication k liye zarorat pharti ha sarwar ki Claind site se direct target nh kar sakty direct database may data save nh karwa sakty hammy zarorat pharti ha sarwar ki
// tou hum kya karty ha apny front end se and front end or back end ka fark tou pata hee hoga apko HTML CSS & JAVAscript ye sari cheezy front end may ati ha or agr back end ki baat kary tou apka sarwar ajata ha apka database ajata ha tou wo kehlata ha back end
// front end se apko database may data bhej na ho tou ap direct nh bhej sakty..database may apko data bhej ny k liye sab se pehly front end to sarwar bhejna paary ga or sarwar se apk database may jaye ga
// is he tarha se apko data magwana ha tou apko sarwar ko reques karni paary ge or phir sarwar apko database se data mangwa k dyga jo bhi apko database se communiction karni wo ap sarwar k throw kary gy
// database se baat karny k liye sarwar use hota
// lekin hum ny jo phara ha ha firebase database sarwar less ha directly hamari javascript se comunicate kar raha ha javascript se us may data save karwa sakty ha or javascript may he us se data get karwa sakty ha tou firebase ka ye faida ha



// sarwar pe hamara promise laga howa ha bus ye example .then or catch ko samjhny k liye
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log("Result", data))
//     .catch(error => console.log("Error", error))


// short
// async javascript wait karlyti ha jab async chalna jaye agy code nh barta
// await ka key word is liye use howa ha is API se data uth k na ajaye jab tak console nh karana mtlb agli line pe jaye ge hee nh
// async function getData() {
//    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//    console.log(data)
// }
// getData()






// Topic Classes ES6
// Topic constructor function ES5

// ES5
// function Student(name, email) {
//     this.name = name;
//     this.email = email
// }
// var student1 = new Student("ghous", "ghous@gmail.com")
// var student2 = new Student("basit", "basit@gmail.com")
// console.log(student1)




// // ES6
// class Student {
//     constructor(name, email) {
//         this.name = name
//         this.email = email
//     }
// }
// var student1 = new Student("ghous","ghous@gmail.com")
// var student2 = new Student("basit","basit@gmail.com")
// console.log(student2)




//do class ap marge bhi kar sakty ha
// use iska bhot kum hota ha
// class Student {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email
//     }
// }
// class School extends Student {
//     constructor(name, email, school) {
//         super(name,email)
//         this.school = school
//     }
// }
// var student2 = new School("basit", "basit@gmail.com", "saylani")
// console.log(student2)








// firebase auth 

// console.log(firebase)


let signup = () => {
    let email = document.getElementById("email")
    let password = document.getElementById("pass")

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then(function (result) {
            console.log("Result", result)
        })
        .catch(function (error) {
            //Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error", errorMessage)
        });
}


let login = (() => {
    let loginEmail = document.getElementById("loginEmail")
    let loginPass = document.getElementById("loginPass")

    firebase.auth().signInWithEmailAndPassword(loginEmail.value, loginPass.value)
        .then(function (result) {
            console.log("user login successfuly")
            console.log(result)
        })
        .catch(function (error) {
            //Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error", errorMessage)
        });
})


































