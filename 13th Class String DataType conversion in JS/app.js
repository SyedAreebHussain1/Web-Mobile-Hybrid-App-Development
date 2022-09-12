// for(var a = 1; a <= 100;a=a+10){
//     document.write(a + "<br>")
// }





//Nested loop


// for(var a = 1; a <= 100;a=a+10){
//     for(var b = a ; b <= a + 9 ; b++){
//         document.write(b + " ")
//     }
//     document.write("<br>")
// }




// for(var a = 1; a <= 100;a=a+10){
//     for(var b = a ; b < a + 10 ; b++){
//         document.write(b + " ")
//     }
//     document.write("<br>")
// }






// toLowerCase

// var city = prompt("Enter your City Name")
// var arr = ["Karachi","Islamabad","Peshawar"]
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] === city){
//         alert("City has found")
//     }else{alert("City not found")}
// }


// var city = prompt("Enter your City Name")
// city = city.toLowerCase()
// var arr = ["karachi","islamabad","peshawar"]
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] === city){
//         alert("City has found")
//     }else{alert("City not found")}
// }





// toUpparCase

// var city = prompt("Enter your City Name")
// city = city.toUpperCase()
// var arr = ["KARACHI","ISLAMABAD","PESHAWAR"]
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] === city){
//         alert("City has found")
//     }else{alert("City not found")}
// }






//topic 22 Measuring length and extracting parts


// var city = prompt("Enter Your City Name");
// var firstChar = city.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChars = city.slice(1);
// otherChars = otherChars.toLowerCase();

// var city = firstChar + otherChars;

// console.log(city)






// var city = prompt("Enter Your City Name");
// var firstChar = city.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChars = city.slice(1);
// otherChars = otherChars.toLowerCase();

// var city = firstChar + otherChars;

// console.log(city)

// var arr = ["Karachi","Islamabad","Peshawar"];
// for (var i = 0; i < arr.length; i++){
//     if(arr[i] === city){
//         alert("City has found")
//     }else{ 
//         alert("City not found")
//     }
// }





// var month = prompt("Enter a month")
// var charsInMonth = month.length;
// if (charsInMonth < 3) {
//     monthAbbrev = month.slice(0,3)
// }




// var str  = "Karac  hi";
// var numChars = str.length;
// for(var i = 0; i < numChars; i++){
//     if(str.slice( i, i + 2) === "  "){
//         alert("Double spaces are found!")
//     }
// }







// var str  = prompt("Enter some text");
// var numChars = str.length;
// for(var i = 0; i < numChars; i++){
//     if(str.slice( i, i + 2) === "  "){
//         alert("Double spaces are found!")
//     }
// }









// TOPIC 23 //Finding segments


// var text = "The New yorker magazine dosnt allow the phrase World War II They say it should"
// for(var i = 0; i < text.length; i++){
//     if(text.slice(i,i + 12) === "World War II"){
//         text = text.slice(0,i) + "the second world war" + text.slice(i + 12)
//         console.log(text)
//     }
// }





// var text = "The New yorker magazine dosnt allow the phrase World War II They say it should"
// for(var i = 0; i < text.length; i++){
//     if(text.slice(i,i + 18) === "hrase World War II"){
//         text = text.slice(0,i) + "the second world war" + text.slice(i + 18)
//         console.log(text)
//     }
// }






// indexOf

// var text = "The New yorker magazine doesnt allow the phrase World War II They say it should";
// var indexNum = text.indexOf("World War II") 
// console.log(indexNum)





// var text = "The New yorker magazine doesnt allow the phrase World War II They say it should";
// var indexNum = text.indexOf("World War II"); 
// var firstText = text.slice(0,indexNum);
// var replacingText = "The second World War";
// var thirdText = text.slice(indexNum + 12);
// console.log(firstText + replacingText + thirdText)





// var text = "The new yorker magazine doesnt allow the phrase World War II They say it new should";
// var indexNum = text.indexOf("new"); 
// var firstText = text.slice(0,indexNum);
// var replacingText = "The second World War";
// var thirdText = text.slice(indexNum + 2);
// console.log(firstText + replacingText + thirdText)




//lastIndexOf

// var text = "To be or not to be.";
// var segIndex = text.lastIndexOf("be")
// console.log(segIndex) 





// var text = "The new yorker magazine doesnt allow the phrase World War II They say it new should";
// var indexNum = text.lastIndexOf("new"); 
// var firstText = text.slice(0,indexNum);
// var replacingText = "The second World War";
// var thirdText = text.slice(indexNum + 3);
// console.log(firstText + replacingText + thirdText)








// topic 24 findind a character at a location

// charAt()


// var a = "Ghous";
// console.log(a.charAt(2))
// console.log(a.charAt(3))



// var name = "ghous"
// var nameChar = name.slice(3,4)
// document.write(nameChar)





// topic 25 Strings replacing charactes



// replace

// var para = "this is example";
// var para1 = para.replace("example","text")
// console.log(para1)




// var para = "this is example , this is example";
// var para1 = para.replace(/example/g,"text")
// console.log(para1)




// topic 26 Rounding Number..yaha se choro h maths waly methods is 

// // Threes type 
// 1st Math.round
// 2nd Math.ceil
// 3rd Math.floor 



// Math.round
// 1.5 = 2 , 1.4 = 1 , 10.5 = 11



// var num = 1.5;
// var round = Math.round(num) 
// console.log(round)


// var num = 1.4;
// var round = Math.round(num) 
// console.log(round)


// var num = 9.5;
// var round = Math.round(num) 
// console.log(round)


// var num = 10.5;
// var round = Math.round(num) 
// console.log(round)




// Math.ceil 
// 1.3 = 2 , 1.8 = 2 , 10.1 = 11
// 1.0 = 1 only


// var num = 1.1;
// var ceil = Math.ceil(num) 
// console.log(ceil)


// var num = 1.9;
// var ceil = Math.ceil(num) 
// console.log(ceil)


// var num = 10.1;
// var ceil = Math.ceil(num) 
// console.log(ceil)



// Math.floor
// 1.9 = 1 , 10.9 = 10 , 3.6 = 3


// var num = 1.9;
// var floor = Math.floor(num);
// console.log(floor);


// var num = 10.9;
// var floor = Math.floor(num);
// console.log(floor);


// var num = 3.6;
// var floor = Math.floor(num);
// console.log(floor);


// var num = 9.9;
// var floor = Math.floor(num);
// console.log(floor);







// Topic 27 Generating Random Number


// Math.random() * 2;
//0.122182381221

// Math.random() * 2;
//1.3823893237832

// Math.random() * 2;
//0.62728295923221

// Math.random() * 2;
//0.020218835221



// Math.random GAme

// var headsUser = prompt ("Enter heads username");
// var tailsUser = prompt ("Enter tail username")

// var toss = Math.random() * 2;

// var floor = Math.floor(toss)
// console.log(floor)






// var headsUser = prompt ("Enter heads username");
// var tailsUser = prompt ("Enter tail username")

// var toss = Math.random() * 2;

// var floor = Math.floor(toss);
// if(floor === 0){
//     alert("Haeds " + headsUser + " win the toss" )
// }else{
//     alert("Tails " + tailsUser + " win the toss") 
// }




// Topic 28 Coverting strings to integers and decimals


// Number(10)
// parseInt(10)


// var currentAge = prompt("Enter your age.")
// var yearsEligibleToVote = currentAge - 18;
// console.log(yearsEligibleToVote)



// topic 29 converting strings to numbers, numbers to strings

// String to Number

// var integerString = "24";
// var num = Number(integerString);
// console.log(num)



// Number to strings

// var num =  10;
// console.log(num.toString());


// var integerNum = 45;
// var string = integerNum.toString();
// console.log(string)




// Topic 30 Conrolling the length o decimals

// var num = 10.54545454;
// var cont = num.toFixed(2);
// console.log(cont);


var num = 10.54545454;
var cont = num.toFixed(3);
console.log(cont);








