//const
// const second = "hello"
// const second = "world"
// document.write(second);
// document.write(first);


//let
// let b = "ali"
// let s = "ghouse"
// document.write(b)






// var arr1 = new Array("ali","ghous","basit");
// console.log(arr1);


// var arr = ["car","Dog","tiger","lion"];
// console.log(arr[2])


// arr[4] = "elephant";
// console.log(arr);





//LOOP



//  var x;
//  for(x = 1; x <= 10; x++){
//      console.log(x)
//  }




// var x;
// for(x = 1; x <= 10; x= x+2){
//     console.log(x)
// }




// var x;
// for(x = 1; x <= 10; x= x+3){
//     console.log(x)
// }





//  for(var i = 10; i > 0; i--){
//      document.write(i + "<br>")
//  }





//two ka tabel

// document.write("2" + "x" + "1" + "=" + 2 * 1 + "<br>")
// document.write("2" + "x" + "2" + "=" + 2 * 2 + "<br>")
// document.write("2" + "x" + "3" + "=" + 2 * 3 + "<br>")
// document.write("2" + "x" + "4" + "=" + 2 * 4 + "<br>")
// document.write("2" + "x" + "5" + "=" + 2 * 5 + "<br>")





//Two ka tabel

// for(var i = 1; i <= 10;i++){
//     document.write("2" + "x" + i + "=" + 2*i + "<br>")
// }








// array

// var names = ["Ghous","Basit","Fahad"];

// console.log(names[0])
// console.log(names[1])
// console.log(names[2])







// var names = ["Ghous","Basit","Fahad"];

// for(var i = 0; i < names.length; i++){
//     console.log(names[i])
// }






// var names = ["Ghous","Basit","Fahad",123];

// for(var i = 0; i < names.length; i++){
//     console.log(names[i])
// }





// Topic 19 for loop
// Flags,Booleans,array length and loopus interruptus 


// var cities = ["Karachi","Lahore","Islamabad","Faislabad"]

// for(var i = 0; i < cities.length; i++){
//            alert(cities[i] + " is a cleanest city!")
// }





// var cities = ["Karachi","Lahore","Islamabad","Faislabad"]

// for(var i = 0; i < cities.length; i++){
//     if(cities[i] == "Karachi"){
//            alert(cities[i] + " is a cleanest city!")
//     }
// }



// var cities = ["Lahore","Islamabad","Faislabad","Karachi"]

// for(var i = 0; i < cities.length; i++){
//     if(cities[i] === "Karachi"){
//            alert(cities[i] + " is a cleanest city!")
//     }
// }





// for(var i = 0; i > 0; i++){
//     console.log("hello")
// }




// for(var i = 1; i > 0; i++){
//     console.log("hello")
// }




///break

// for(var i = 1; i < 0; i++){
//     if(i === 10){
//         break;
//     }
//     console.log("hello")
// }







// for(var a = 1; a <= 15; a++){
//     if(a === 8){
//         break;
//     }
//     console.log("hello")
// }





// for(var i = 0; i <= 10; i++){
//     if(i === 5){
//         break;
//     }
//     console.log("hello")
// }







// var cities = ["Lahore","Islamabad","Faislabad","Karachi"];

// for(var i = 0; i < cities.length; i++){
//     if(cities[i] === "Islamabad"){
//         alert(cities[i] + " is a cleanest City")
//         break
//     }
// }




//nested loop


// for(var i = 0; i < 5; i++){
//     for(var j = 0; j < 3; j++){
//         document.write(j + ") Pakistan Zindabad" + "<br>")
//     }
// }





// for(var i = 0; i < 5; i++){
//     for(var j = 0; j < 1; j++){
//         document.write(j + ") Pakistan Zindabad" + "<br>")
//     }
// }





// var firstNames = ["Ghous","Basit","Fahad"]
// var lastNames = ["Ahmed","Khan","shah"]

// for(var i = 0; i < firstNames.length; i++){
//     for(var x = 0; x < lastNames.length; x++){ 
//         console.log(firstNames[i] + " " + lastNames[x])
//     }
// }






// var firstNames = ["Ghous","Basit","Fahad"]
// var lastNames = ["Ahmed","Khan"]

// for(var i = 0; i < firstNames.length; i++){
//     for(var x = 0; x < lastNames.length; x++){ 
//         console.log(firstNames[i] + " " + lastNames[x])
//     }
// }








// var firstNames = ["Ghous","Basit","Fahad"]
// var lastNames = ["Ahmed"]

// for(var i = 0; i < firstNames.length; i++){
//     for(var x = 0; x < lastNames.length; x++){ 
//         console.log(firstNames[i] + " " + lastNames[x])
//     }
// }




// for(var i = 0; i < 10; i++){
//     for(var j = 0; j < i; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }









// var word = prompt("Enter your word");
// var check;

// for (var i = word.length -1; i >= 0; i--){
//     console.log(word[i])
// }







// var word = prompt("Enter your word");
// var check = "";

// for (var i = word.length -1; i >= 0; i--){
//     check += word[i]
// }

// if(check === word){
//     console.log(word + " is palindrome word")
// }





// var word = prompt("Enter your word");
// var check = "";

// for (var i = word.length -1; i >= 0; i--){
//     check += word[i]
// }

// if(check === word){
//     console.log(word + " is palindrome word")
// }else{
//     console.log(" This is not a palindrome word")
// }




//LowerCase

// var names = "GHOUS";
// names = names.toLowerCase();
// console.log(names)





//UpperCase

// var names = "Ghous Ahmed";

// console.log(names.indexOf ("A"))
// // console.log(names.indexOf("h"))








//calculator

// var val1 = prompt("enter your first value")
// var val2 = prompt("enter your second value")
// var sign = prompt("enter your operator")

// console.log(val1)
// console.log(val2)
// console.log(sign)







// var val1 = prompt("enter your first value")
// var sign  = prompt("enter your operator")
// var val2 = prompt("enter your second value")


// console.log(val1+sign+val2)
// if(sign === "+"){
//     alert((+val1)+(+val2))
// }else if(sign === "-"){
//     alert(val1-val2)
// }else if(sign === "*"){
//     alert(val1*val2)
// }else if(sign === "/"){
//     alert(val1/val2)
// }else if(sign === "%"){
//     alert(val1/val2*100 + "%")
// }






var equ = prompt("Enter your equation");
var num = equ.length

for(var i = 0; i < num; i++){
    if(equ.slice(i,i+1) === "+" || equ.slice(i,i+1) === "-" || equ.slice(i,i+1) === "*" || equ.slice(i,i+1) === "/"){
        
    }
       alert("sign has found")
   }





