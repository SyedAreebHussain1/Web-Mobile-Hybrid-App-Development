
// object kafi important topic h 
// objectn hum use Q karty ha Q k koi aisi cheez hamary pas jiska multipl data ho
// jaisy k ek car ha car ka multiple data ho skta ha car color ho sakta ha,car ka brand name ho sakta ha,car ka model ho skta ha etc kaafi sarri chezy   
// is he tarha se student ha student ka bhi kafi sara data hota ha student ka name ha,student ka roll number h,student ki class ha is trha ka data store karty h object k undr 
// object key or value ki base pe chalta ha mtlb property or value i.e property<name:"ali">value 
// var obj = {

// }


// object se value get karny ka tareeka 
// var student = {
//     name: "Ghous",
//     roll:123
// }
// console.log(student.name)
// console.log(student.roll)




// object se koi property delete karwani ho 
// var student = {
//     name: "Ghous",
//     roll:123
// }
// delete student.name
// console.log(student)





// object may koi property add karwani ho tou wo kaisy karwaty h
// var student = {
//     roll:123
// }
// student.name = "Ghous"
// console.log(student)






// object pr loop 
// var student = {
//     name: "ghous",
//     roll: 123
// }
// for (var prop in student) {
//     console.log(prop)
// }





// var student = {
//     name: "ghous",
//     roll: 123
// }
// for (var prop in student) {
//     console.log(prop,student[prop])
// }





// Object may prompt 
// var names = prompt("Enter your name")
// var student = {
//     names: names
// }
// console.log(student)






// hassan javed ye keh rahy h k keyboard se input may enter karty h tou is k liye ap ka process ye hota ha k ap jo apna input rakh rahy h usko ek form k tag k undr
//  rakh ly us k bad input se jab enter kary gy tou form apka subit hojaye ga or apko us k bad jo function lagana ha onsubmit pe lagana h button pe nh lagana ha onsubmit pe lagana ha tou apka ye work kary ga






// addEventListener kisi bhi tag k upr lag sakta ha example mery pass html k undr ek button h ma ny us btn ko by id javascript may get karliya  
// addEventListener
 

// button.addEventListener("onclick",function(){

// })





// onkeypress keyboard use karny pe chaly ga 
// window.onkeypress = function(){
//     console.log("Chal raha ha")
// }


 
// parameters bhi dy skty h 
// window.onkeypress = function(e){
//     console.log("testing",e)
// }





// keycode
// window.onkeypress = function(e){
//     console.log("testing",e.keyCode)
// }




// jab mujhy kisi key ka code maloom karna ho tou google pe ja search karounga javascript key code
// link  https://www.toptal.com/developers/keycode/for/u



// onkeypress
// window.onkeypress = function(e){
//     if(e.keyCode === 32){
//         console.log("Space")
//     }else if(e.keyCode === 87){
//         console.log("w")
//     }else if(e.keyCode === 68){
//         console.log("d")
//     }
// }



// onkeydown 
// window.onkeydown = function(e){
//     if(e.keyCode == 32){
//         console.log("Space")
//     }else if(e.keyCode == 87){
//         console.log("w")
//     }else if(e.keyCode == 68){
//         console.log("d")
//     }
// }





// full professional game hum java script se nh bana sakty
// jab bhi window word use ap samjh ly k apny jo browser khola h uski baat
// kr rahy h window ki hum location bhi change kar sakty window.alert bhi laga sakty ha
// alert ap direct lagaye ya window.alert lagaye

// console.log(window)





// spider game
// link character https://www.fightersgeneration.com/


var image = document.getElementById("img")
var count = 0
window.onkeydown = function(e){
    if(e.keyCode == 32){
        image.src = "https://www.fightersgeneration.com/characters3/spider-sting.gif"
        setTimeout(()=>{
            image.src = "https://www.fightersgeneration.com/characters3/m-spiderman.gif"
        },2410)
    }else if(e.keyCode == 83){
        image.src = "https://www.fightersgeneration.com/characters3/spidey-crouch.gif"
    }else if(e.keyCode == 68){
        count = count + 10
        image.src = "https://www.fightersgeneration.com/characters3/spidey-walk1.gif"
        image.style.marginLeft = count + "px"
        setTimeout(()=>{
            image.src = "https://www.fightersgeneration.com/characters3/m-spiderman.gif"
        },1500)
    }
}












































