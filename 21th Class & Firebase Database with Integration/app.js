// // Topic 69 Objects

// // General seentxt of Object
// var student = {
//     name: 'Ghous',
//     fatherNAme: 'Ahmed',
//     roll: 123,
//     school:'Saylani'
// }
// console.log (student)


// Topic 70 Objects properties
// object ki properties add bhi karskty h jaisy array may hum karty thy
// array may koi index save karwana ho ya delete karwana ho
// tou is he tarha add kar skty h


// property add karna

// var student = {
//     name: 'Ghous',
//     roll: 123,
//     school:'Saylani'
// }
// student.fatherName = 'Ahmed'
// console.log(student)





// Topic 71 Objects Methods
// Object k undr property may koi function add bhi karwa skty h

// var obj = {
//     name: 'Ghous',
//     roll: 123
// }
// console.log(obj.name) //Ghous
// console.log(obj.roll) //123





// Topic 72 Objects: Constructors
//  Constructors ek function h jo kya kar raha ha
// hammy bar bar objects banana ny k liye asani kar raha ha
// Constructors ka name Capital ho na chye or is may keyword use hota ha this ka
// Constructors function se object create karny k liye keyword use hota ha new


// function Student(name, roll) {
//     this.name = name;
//     this.roll = roll
// }
// var student1 = new Student('ghous', 123);
// var student2 = new Student('basit', 321);
// console.log(student1)
// console.log(student2)




// Topic 73 Objects Constructors for methods
//  Constructors k undr bhi hum function bana skty ha

// function Student(name,roll){
//     this.name = name;
//     this.roll = roll;
//     this.fatherName = function(){
//         return 'Ahmed'
//     }
// }
// var student1 = new Student('ghous',123)
// console.log(student1.fatherName())






// Topic 74 Objects Prototypes
// prototype alag se copy bana k rakh dyta ha
// javascript bar bar isko junrait nh kary ga


// function Student(name,roll){
//     this.name = name;
//     this.roll = roll;
//     this.getName = function(){
//         return this.name;
//     }
// }

// var student1 = new Student('ghous',123)
// var student2 = new Student('basit',321)
// console.log(student1)
// console.log(student2)




// prototype
// function Student(name, roll) {
//     this.name = name;
//     this.roll = roll;
// }
// // ye bar bar function ko repeat nh kary
// //  ga is ek he dafa function ki copy bana k rakh de
// // bus is ye he faida ha is k ilawa koi use nh h sirf copy banany k liye hum prototype use karty h
// Student.prototype.getName = function () {
//     return this.name;
// }
// var student1 = new Student('ghous', 123)
// var student2 = new Student('basit', 321)
// console.log(student1)
// console.log(student2)




// Topic 75 Objects checking for properties and methods

// var student2 = {
//     name: 'basit',
//     roll: 321
// }
// console.log('roll' in student2) //true




// var student2 = {
//     name: 'basit',
// }
// console.log('roll' in student2) //false




// ek sth sari properties object ki chye ho..ye tareeka ha

// var student2 = {
//     name: 'basit',
//     roll: 321,
//     school: 'saylani'
// }
// for(var prop in student2){
//     console.log(prop)
// }




// var student2 = {
//     name: 'basit',
//     roll: 321,
//     school: 'saylani'
// }
// for(var prop in student2){
//     console.log(student2[prop])
// }




// // property or value dono agye
// var student2 = {
//     name: 'basit',
//     roll: 321,
//     school: 'saylani'
// }
// for(var prop in student2){
//     console.log(prop,student2[prop])
// }




// // in proto wali property bhi check krta ha

// var student2 ={
//     name:'basit',
//     roll:321,
//     school:'saylani'
// }
// console.log('roll' in student2) //true



// var student2 ={
//     name:'basit',
//     roll:321,
//     school:'saylani'
// }
// console.log('constructor' in student2) //true





// hasOwnProperty sirf object ki apni property check krta ha baki nh karta
// var student2 = {
//     name: 'basit',
//     roll: 321,
//     school: 'saylani'
// }
// console.log(student2.hasOwnProperty('roll'))//true



// var student2 = {
//     name: 'basit',
//     roll: 321,
//     school: 'saylani'
// }
// console.log(student2.hasOwnProperty('constructor'))//false




// function Student(name,roll){
//     this.name = name;
//     this.roll = roll;
// }
// Student.prototype.school = 'saylani'
// var student1 = new Student('ghous',321)
// console.log(student1)





// DataBase

// Authentication
// Account jo bunta ha wo keh laati h Authentication firebase authentication haamy provide kar raha ha
// account firebase pe nh bun raha ha bulky jo project ap bana rahy h us pe acccount bun raha ha firebase ko use karty ve
//1.Email/pass
//2.phone number
//3.anonymous ya ni guest
//4.google
//5.game center
//6.microsoft
//7.facebook
//8.apple
//9.twitter
//10.play games
//11.github
//12.yahoo 





// database

//main featre ha data base
// main data text keh lata ha video imgs ye sab bhi data hota ha pr asal data text keh lata ha
// database apka data could pe save karwa dyta ha
// could ek sarwar ha jo firebase k pass rakha wa ha us may hum apna data save karwa rahy ha jo could h
// Database bhot baari field ha jis developers hota ha jobs hoti h hum sirf apko basic batye gy
//database types SQL,PHP etc
// hum jo database pharny jarahy ha wo kafi alagh h SQL database,No-SQL database
// firebase database NO-SQL ha hum sirf basic cheezy cover kary gy

// jab bhi ap front-end se database may koi data save karwaty h tou apko zarorat parti h sarwar ki
// sarwar kya ha front-end pe apka data ha ap us data ko ap pehly sarwar pe bhejty h sarwar uska sara process karta ha
// or usko data base may bhej ta ha. sab databases k liye sarwar lazmi hota ha front-end ap directly data nh bhej sakty 
// front-end ap pehly sarwar pe data bhejy gy or sarwar se database may bhejy gy
// firebase itni achi cheez ha firebase k liye apko sarwar ki zarorat nh ha firebase may asaani kya ha ap directly front-end se data firebase may bhej sakty ha
// koi bhi sarwar ki zarorat apko nh h firebase sab kuch khud manig kar raha ha data ka jo bhi processure wagera h uska jo bhi process ha firabase sub khud manig kar raha ha
// firebase k liye apko sarwar ki zarorat nh ha firebse sarwar less ha is k liye sarwar ki zaroorat nh h 
// acha kuch NO-SQL database hoty h jin k liye sarwar ki zarorat hoti ha jo k hum agy parhy gy mangoo db name se jo ha mango db k name jo database wo bh No-SQL h us database k liye sarwar lazmi hoga
// lekin abhi hum firebase phar rahy h us k liye sarwar ki zarorat nh h  
// bagair sarwar k front-end apna data bhej sakty ha kafi easy h
// firebase No-SQL ha


// front-end se mujhy check krna ha k console may data mil raha ha phir ma jao ga database pe 

// function saveData() {
//     var name = document.getElementById('name')
//     var roll = document.getElementById('roll')

//     var student = {
//         name: name.value,
//         roll: roll.value
//     }
//     console.log(student)
// }



// firebase se link utha k html k <head> k tag k undr lagana ha

// console.log(firebase)



// console.log(firebase.database)



// function saveData() {
//     var name = document.getElementById('name')
//     var roll = document.getElementById('roll')

//     var student = {
//         name: name.value,
//         roll: roll.value
//     }
//     firebase.database().ref("student").set(student)
// }



// set value k undr ghous dy diya ha
// function saveData() {
//     var name = document.getElementById('name')
//     var roll = document.getElementById('roll')

//     var student = {
//         name: name.value,
//         roll: roll.value
//    }
//     firebase.database().ref("student").set("ghous")
// }




// function saveData() {
//     var name = document.getElementById('name')
//     var roll = document.getElementById('roll')

//     var student = {
//         name: name.value,
//         roll: roll.value
//    }
//     firebase.database().ref("student/student1").set(student)
// }




// function saveData() {
//     var name = document.getElementById('name')
//     var roll = document.getElementById('roll')

//     var student = {
//         name: name.value,
//         roll: roll.value
//    }
//     firebase.database().ref("student").child("student1").set(student)
// }



// set ki jaga hum lekhy gy push tou firebase kya kary ga random li ek key junrait kary ga or us key k undr ye data save kary ga
// function saveData() {
//     var name = document.getElementById('name')
//     var roll = document.getElementById('roll')

//     var student = {
//         name: name.value,
//         roll: roll.value
//    }
//     firebase.database().ref("student").push(student)
// }



// child object k undr ek or object bana raha ha jitna marzi chaho object k undr ja skta ho
// function saveData() {
//     var name = document.getElementById('name')
//     var roll = document.getElementById('roll')

//     var student = {
//         name: name.value,
//         roll: roll.value
//    }
//     firebase.database().ref("student").child("mystudent").push(student)
// }



// function saveData() {
//     var name = document.getElementById('name')
//     var roll = document.getElementById('roll')

//     var student = {
//         name: name.value,
//         roll: roll.value
//    }
//     firebase.database().ref("student").child("mystudent/today").push(student)
// }






// apni key kaisy banaye yani apna random code 
// function saveData() {
//     var name = document.getElementById('name')
//     var roll = document.getElementById('roll')

//     var student = {
//         name: name.value,
//         roll: roll.value
//    }
//    var key = Math.random() * 12234223
//     firebase.database().ref("student/" + key.toFixed()).set(student)
// }





// firebase apko khud ek key bana k dy ga

// function saveData() {
//     var key = firebase.database().ref("student").push().key
//     console.log(key)
// }



// function saveData() {
//     var name = document.getElementById('name')
//     var roll = document.getElementById('roll')
//     var key = firebase.database().ref("student").push().key
//     var student = {
//         name: name.value,
//         roll: roll.value,
//         key: key
//     }
//     firebase.database().ref("student/" + key).set(student)
// }


// data magwaye gy kaisy firebase se 
// tareeka ye ha
// key mujhy apny pass save karwani hogi ya phir is tarha lekhna hoga 
// is may dou methods ha once/on 
// once haamy ek he bar data la k dyta ha jab hum page refresh karti h
// on kya karta ha on bagair refresh kary  realtime data la la k dyta rehta ha  
// val() ek function ha hamy proper way may data la k dydy ta ha

// function saveData() {
//     var name = document.getElementById('name')
//     var roll = document.getElementById('roll')
//     var key = firebase.database().ref("student").push().key
//     var student = {
//         name: name.value,
//         roll: roll.value,
//         key: key
//     }
//     firebase.database().ref("student/" + key).set(student)
// }

// function getFirebaseData(){
//     firebase.database().ref("student").once("value",function(data){
//         console.log(data.val())
//     })
// }

// getFirebaseData()




// ab ma chata ho sirf ghous wala data mery pass ajye basit wala nh aye mai kya 
// karunga ghous ki jo key ha wo ma copy karunga or phir ref("student/key jo copy ki wo paste kardunga")
// ub ye kya ref bun gaya ma ny kaha student may jao student k undr ye key us ma jao data ly ao 
// On methode
// function saveData() {
//     var name = document.getElementById('name')
//     var roll = document.getElementById('roll')
//     var key = firebase.database().ref("student").push().key
//     var student = {
//         name: name.value,
//         roll: roll.value,
//         key: key
//     }
//     firebase.database().ref("student/" + key).set(student)
// }

// function getFirebaseData(){
//     firebase.database().ref("student").on("child_added",function(data){
//         console.log(data.val()) 
//     })
// }

// getFirebaseData()





// remove data

// function saveData() {
//     var name = document.getElementById('name')
//     var roll = document.getElementById('roll')
//     var key = firebase.database().ref("student").push().key
//     var student = {
//         name: name.value,
//         roll: roll.value,
//         key: key
//     }
//     firebase.database().ref("student/" + key).set(student)
// }
// key mery pass pehly se hee majood ha key: javascript k ye key mojoood hogi 
// or ye ma btn ko id dy dunga ye jo key hogi ma btn ko id dy dunga or jab ma bulunga delete 
// or wo key javascript ko auto matic mily gee or wo is ki ko ja k delete kardyga 
// mujhy bar bar copy kar k dyny ki zarort nh paary ge
// or ye jab samj may ay ga ap logo todo app banye hogi javascript may ub apko karna ye ha k todo app may firebase database ap lagye or us may add karry
// delete kary taky apko wo cheez samjh may ajye k delte ho kis tarha se raha ha

// // Remove Data
// function removeFirebaseData(){
//     firebase.database().ref("student/-N2iaOdo9XEaGerQTaVW").remove() 
// }

// removeFirebaseData() 



// function removeFirebaseData(){
//     firebase.database().ref("student").remove() 
// }
// removeFirebaseData()





// Edit
// function saveData() {
//     var name = document.getElementById('name')
//     var roll = document.getElementById('roll')
//     var key = firebase.database().ref("student").push().key
//     var student = {
//         name: name.value,
//         roll: roll.value,
//         key: key
//     }
//     firebase.database().ref("student/" + key).set(student)
// }

// function editFirebaseData(){
//     firebase.database().ref("student/-N2iaRD3XTQNKfusEXRP").set({
//         key:"-N2iaRD3XTQNKfusEXRP",
//         name:"basit",
//         roll:"213"
//     })
// }
// editFirebaseData()



  
































































