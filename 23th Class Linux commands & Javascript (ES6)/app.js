// abhi tak jo hum pharty arahy h wo thi (ES5) ye (ES) ha kya full form ES:ECMAScript..abhi tak jo humny javascript phary ha wo ECMAScript 5 thi javascript ko standard diya gaya tha jo ECMAScript k nam se tha  
// stand for ECMA:European Computer Manufacturer's Association. 


// ECMAscript 6 hum phary gy ECMAscript 6 2015 may aye hy

// ECMAscript6 = 2015 
// ECMAscript7 = 2016 
// ECMAscript8 = 2017 
// ECMAscript9 = 2018 

// ECMAscript year wais update hoti rehti ha 

//(ES6) hum is liye phar rahy h jab (ES6) aye tou javascript may major change aya mtlb kafi sari jo cheezy thi wo change hogaye update hoi is waja se hum (ES6) phar rahy ha  
// (ES7) may bhot Minor change is liye hum (ES7) nh phar rahy h 
// (ES8) may bhi minor change howa ha
// major jo changing hoi ha wo hoi ha (ES6) may ECMAscript6 jo hum phar rahy h ye bhi itni bari nh ha 2 class may ES6 complete hojaye ge 




// ES6 Topic variables var,let,const


// apse karty ha kuch Questions

// function foo(){
//     var name = "ghous";
// }
// console.log(name) //empty




// var name = "basit"
// function foo(){
//     var name = "ghous";
// }
// console.log(name)  //basit




// function call karny k bad bhi nh ara ghous
// var name = "basit"
// function foo(){
//     var name = "ghous";
// }
// foo()
// console.log(name) //basit





// name ko update kiya ha var hata k function may se 
// var name = "basit"
// function foo(){
//      name = "ghous";
// }
// foo()
// console.log(name)//ghous





// var name = "basit"
// function foo(){
//      console.log(name)//basit
// }
// foo()



// function k undr ki jo space ha wo is var ka scope ha is he k undr rehty howe ye var mujhy
//  mil sakta ha agr ma bahir get karny ki koshish karta ho tou ye var mujhy nh mily ga Q k var function scope ha  
// is k ilawa var may kahi pe bhi banao ma for loop k undr bana lo ma kisi object k undr bana lo ma if ki condition k undr bana lo etc var function scope ha ye baat apko yaad rakhni h 
// function k undr jo var banaya wa hoga function k bahir nh mily ga thek ha 
// function foo(){

//     var names = "ghous";
// }
// console.log(names) //var nh mily ga.
// foo()





// agr var kisi function k undr banaye gy tou var humy nh mily ga function k ilawa kahi par bhi var banye gy wo hamy mil jaye ga 
// if(true){
//     var name = "ghous";
// }
// console.log(name)//ghous





// (ES6) ek or tareeka hamary pass aya ha wo ha let
// let {} k undr se bahir nh jata if else ho ya function etc
// let block scope ha agr humny {} k undr use kiya ha tou wo {} k undr he mily ga
// // let
// if(true){
//     let fullName = "ghous";
// }
// console.log(fullName) //error:fullName is not defined







// var ko hum same property/name dy k jitni dafa chahy bana sakty ha var ek name k jasiy k necchy
// var lastName = "ahmed"
// var lastName = "ghous"
// var lastName = "basit"
// console.log(lastName) //basit






// let ka keyword use karydy tou tou sirf ek hee bar decleared hota ha agr hum dusri bar decleared kary gy usey name se tou hamy error dydy ga nechy error mojod h 
// let lastName = "ahmed"
// let lastName = "basit"
// console.log(lastName) //Error:Identifier 'lastName' has already been declared





// let lastName = "ahmed"
// console.log(lastName) //ahmed





// let ko ma var ki tarha update bhi karskta ho
// jaisy hum var ko udate karty ha waisy he let ko bhi update kar skty h lekin us k scope may agr ma let kisi function k undr nh banaya,if else may nh banaya kisi {} k undr nh banaya kisi condition k undr nh banaya tou ma let ko puri window may kahi pe bhi use kar skta ho lekin
// agr let kisi function k undr banawa ha kisi condition k undr banawa ha us condition k bahir let ko use nh kar skta tou ye fark tha var ka or let ka 

// let lastName;
// lastName = "ghous"
// console.log(lastName)//ghous






// const key word sirf ek he bar agr hamy aisa data yaha pe hamy rakhna ho sirf readable ho sirf usko read kar saky tou hum use karty ha const
//  mtlb na usko hum update kar saky  na usko hum delete kar saky usko sirf hum read kar saky wo na edit hoga na delete hoga sirf read karsaky gy hum us k liye use karty ha ES6 may const

// school jo wo saylani he rahy ga na wo update hoga na delete hoga 
// const school = "SAYLANI"
// var obj = {
//     schoolName: school
// }
// console.log(obj)





// const ka keyword use karydy tou sirf ek hee bar decleared hota ha agr hum dusri bar decleared kary gy usey name se tou hamy error dydy ga nechy error mojod h 
// const school = "SAYLANI" 
// const school = "SAYLANI"
// console.log(school) //Error:Idenifier 'school' has alerdy been decleared





// Topic Template literals


// document.write("2" + "X"  + 1 + 2*1) (ES5)



// let firstName = "Ghous"
// let lastName = "Ahmed"
// console.log("My Name is "+ firstName + " " + lastName) //(ES5)




// let firstName = "Ghous"
// let lastName = "Ahmed"
// console.log(`My Name is ${firstName} ${lastName}`) //(ES6)



// template literals ka use firebase may bhi askta ha jaisy k firebase database humny parha ap us ka ref bana rahy h
// example
// ub mujhy jo ref banana ha kafi child to child jana ha k school hoga school k undr ek class hogi class k undr student hoga student k undr uska data hoga ye ref mujhy banana ha   

// let firstName = "Ghous"
// let lastName = "Ahmed"
// // kitna bara ye ref bun gaya ref may mai ny karachi lekha usko ma ny plus karwaya,phir ma ny usko plus karwaya,pjir ma ny webandmobile lekha usko ma ny plus karwaya firstName kafi bara ye bun gaya or ma bar bar plus ka sign use kar raha ho 
// firebase.database().ref("karachi/" + "saylani/" + "webandmobile/" + firstName + lastName)//(ES5)




// ub is tarha use kariye ga taky practice hojaye
// let firstName = "Ghous"
// let lastName = "Ahmed"
// firebase.database().ref(`karachi/saylani/webandmobile/${firstName} ${lastName}`) //(ES6)





//Topic Spread Operators 
// ub hum pharty spread operators


// 1st tareeka 
// var students1 = ["ghous","basit"] 
// var students2 = ["ahmed","umair"]
// var merge = students1.concat(students2) //(ES6)
// console.log(merge)



// 2nd tareeka
// ... sirf elements ko get kary ga array k undr jo elements ha or is k sath merge kardyga puri array ko kabhi bhi get nh kary ga sirf us k undr k element ko get karyga ye he cheez hum object pe bhi laga sakty h 
// var students1 = ["ghous","basit"] 
// var students2 = [...students1,"ahmed","umair"]
// console.log(students2) //ES6



// ye he cheez hum object pe bhi laga sakty h Spread Operators ka method hum array may bhi laga sakty ha or object may bhi laga sakty ha 
// var students1 = { 
//     names: "ghous"
// }
// var students2 = { ...students1, school: "Saylani" }
// console.log(students2)






// Topic Object destructuring 

// (ES5)
// var student = {
//     names: "ghous",
//     school: "Saylani",
//     roll: 123
// }
// console.log(student.names) // get karny ka tareka (ES5) ka



// Object destructuring (ES6)
// object se property kis tarha get karty ha uska asan  tareeka ha
// var student = {
//     names: "ghous",
//     school: "Saylani",
//     roll: 123
// }
// // var ki tarha decleared kardyga names,school,roll
// let {names,school,roll} = student;
// console.log(names)
// console.log(school)






// Topic ternary Operators 


// (ES5)
// var age = 20;
// if(age > 30){
//     console.log("30 se bara ha")
// }else{
//     console.log("30 se chota ha")
// }





//(ES6)
// if or else in (ES6)
// var age = 20;
// var check = age > 30 ? "30 se bara ha"
//     :
//     "30 se chota ha"
// console.log(check)





// var age = 40;
// var check = age > 30 ? "30 se bara ha"
//     :
//     "30 se chota ha"
// console.log(check)




// acha is may ek cheez or bhi h 
// or / and bhi use kar skty ha jaisy if or else may karty ha
// var age = 40;
// if(age > 30 || age < 50){

// }
// if(age > 30 && age < 50){

// }




// or
// var age = 40;
// var check =
//     age > 30 || age < 50?
//         "30 se bara ha"
//         :
//         "30 se chota ha"
// console.log(check)




// and
// var age = 40;
// var check =
//     age > 30 || age < 50?
//         "30 se bara ha"
//         :
//         "30 se chota ha"
// console.log(check)





// else if ES6
// var age = 60;
// var chec =
//     age > 30 ?
//         "30 se bara ha"
//         :
//         age < 50 ?
//             ""
//             :
//             ""
// "30 se chota ha"
// console.log(chec)






// ye bhi ek ternary Operators kehlata ha is may kya ha k agr boolian nechy jo condition ha true 
// hojaye tou ye name dekha na wrna kuch nh dekhana jo boolian ha wo he dekha dyna DOM pe boolian kabhi bhi rander nh hota  

// var bool = true;
// var name = bool && "Ghous";
// document.write(name) //Ghous




// var bool = false;
// var name = bool && "Ghous";
// document.write(name) //agy he nh bary ga false show hoga






// Topic Async or sync

// mai chata ho k number 2 pehly lekha wa aye or number 1 bad may lekhawa ay


// Async
// setTimeout(function () {
//     console.log("Number 1")
// }, 1000)
// console.log("Number 2")
// setTimeout(function () {
//     console.log("Number 3")
// }, 1100)
// answer
// Number 2
// Number 1
// Number 3




// var names;
// setTimeout(function(){
//     names = "Ghous Ahmed"
// },1000)
// console.log(names) //undefined




// joogar se data tou mil jaye ga lekin hum kary gy proper work propper work k liye hum use kary gy promise
// var names;
// setTimeout(function(){
//     names = "Ghous Ahmed"
// },2000);
// setInterval(function(){
//     console.log(names)
// },1000)





// Topic promise

// Promise hamy dou parameters dyta ha pehla 1.resolve,2.reject 
// ma ny pormise banaya  new Promise kar k Promise ko ma ny create kara us k undr mai ny ek function() pass kara us function may mujhy dou parameter mil rahy 1.resolve, 2.reject
// condition lagy ge kaha apko database se data mil jaye koi error na aye tou ap resolve kardygy 
// agr database se apko data nh mila example internet connection ka error agyaa ya phir database ka koi error agya mtbl koi bhi error askta ha tou ap kya kary gy usko reject kardy gy thek ha
// var promise = new Promise(function(resolve,reject){
//     var zinger = "Available"
//     if(zinger === "Available"){
//         resolve("Han bhai basit ne zinger khilaya") //data
//     }else{
//         reject("Nahi khilaya") //error
//     }
// })
// // promise get kaisy kary gy.main lekho ga promise is sth hum use karty ha 1).then,2).catch
// // agr promise resolve hogya tou hamy data mily ga .then k undr agr reject howa tou data mily ga .catch k undr 
// // .the or .catch hamesha promise k sth lagty ha dono ek sth lagty h uper nechy
// // .catch k undr ata ha error ha jo k reject ha agr promise reject hojaye ga tou .catch k error k parametter k undr mily ga 
// // agr hamara promise resolve hojye ga tou .then k data k parameter k undr mily ga  
// promise.then(function(data){
//     console.log("Resolve==>",data)
// })
// .catch(function(error){
//     console.log("Reject==>",error)
// })






// error
// var promise = new Promise(function(resolve,reject){
//     var zinger = "Nahi khilaya"
//     if(zinger === "Available"){
//         resolve("Han bhai basit ne zinger khilaya") //data
//     }else{
//         reject("Nahi khilaya") //error
//     }
// })
// promise.then(function(data){
//     console.log("Resolve==>",data)
// })
// .catch(function(error){
//     console.log("Reject==>",error)
// })








// promise use kaha hoga
// farz kary ap firebase se data get kar rahy h 

// is tarha se fire base se data lyty ha hum  
// firebase.database().ref("users").on("child_added",function(data){
// console.log(data.val())
// })
// function getData() {
//     console.log(data.val())
//     div.innerHTML = data.val()
// }//data nh mily ga


// data lylny k liye hum banye gy promise
// let promise = new Promise(function (resolve, reject) {
//     firebase.database().ref("users").on("child_added", function (data) {
//         if (data.val()) {
//             resolve(data.val()) //data
//         } else {
//             reject("something want wrong") //error
//         }
//     })
// })
// promise.then(function (data) {
//     console.log(data)
// })
//     .catch(function (err) {
//         console.log(err)
//     })






// var promise = new Promise(function(resolve,reject){
//     if(true){
//         resolve("It's Resolve") //data
//     }else{
//         reject("Reject") //error
//     }
// })
// promise.then(function(data){
//     console.log("Resolve==>",data)
// })
// .catch(function(error){
//     console.log("Reject==>",error)
// })





// var promise = new Promise(function(resolve,reject){
//     if(false){
//         resolve("It's Resolve") //data
//     }else{
//         reject("Reject") //error
//     }
// })
// promise.then(function(data){
//     console.log("Resolve==>",data)
// })
// .catch(function(error){
//     console.log("Reject==>",error)
// })








// pending
var promise = new Promise(function (resolve, reject) {
    if (true) {
        setTimeout(() => {
            resolve("It's Resolve")
        }, 2000)

    } else {
        reject("Reject") //error
    }
})
console.log(promise)
promise.then(function (data) {
    console.log("Resolve==>", data)
})
    .catch(function (error) {
        console.log("Reject==>", error)
    })

