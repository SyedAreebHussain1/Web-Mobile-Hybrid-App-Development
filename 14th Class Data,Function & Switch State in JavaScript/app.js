// Topic 31 Getting the current date and time

// new Date():
// var a = new Date();
// console.log(a)



// toString():
// var a = new Date();
// var b = a.toString();
// console.log(b) //"NewDate ko string may convert kadyga"



// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3)
// console.log(c) "Sat"



//0   //1   //2    //3   //4    //5   //6
//getDay() indx numbr show kartwata ha "sun","Mon","tues","Wed","Thus","fri","Sat"
// var a = new Date();
// var b = a.getDay();
// console.log(b)


// var dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var now = new Date();
// var theDay = now.getDay();
// console.log(theDay)


// var dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay]
// console.log(nameOfToday)





// Topic 32  Extracting parts of the date and time

// var a = new Date();
// var b = a.getTime();
// console.log(b)


// milliscond ko mujy convrt karny h into years


// var a = new Date();
// var b = a.getTime();
// var c = b/(1000 * 60 * 60 * 24 * 30 * 12)
// console.log(c)


// var a = new Date();
// var b = a.getTime();
// var c = b/(1000 * 60 * 60 * 24 * 30 * 12)
// var floor = Math.floor(c)
// console.log(floor)


// var a = new Date();
// console.log(a)

// var a = new Date()
// var b = a.getDay();
// console.log(b)



// var a = new Date()
// var b = a.getMonth();
// console.log(b)


// var a = new Date()
// var b = a.getSeconds();
// console.log(b)



// var a = new Date()
// var b = a.getHours();
// console.log(b)



// var a = new Date()
// var b = a.getFullYear();
// console.log(b)



// var a = new Date
// var b = a.getMilliseconds();
// console.log(b)



// var a = new Date()
// var b = a.getMinutes();
// console.log(b)



// var a = new Date()
// var b = a.getTime();
// console.log(b)



// Topic 33 Specifying a date and time

// ma ny var dob = new Date() banaya jiss ma ny apni dob lekhi
// phir mai ny 1970 se ly k apni dob tak second nikaly getTime() se
// phir ma ny today new date nikali
// phir ma ny todayMilli sec nikaly getTime se
// phit ma ny var diff = todayMilli - dob may se maynas karwaya
// phir ma ny var diffYear = diff/(1000*60*60*24*30*12) krdiya
// phir ma ny var accurateAge = Math.floor(diffYear) krdiya meri age nikal gaye
// 22


// var dob = new Date ("Mar 5,2000")
// var dobMilli = dob.getTime();
// var today = new Date ();
// var todayMilli = today.getTime();
// var diff = todayMilli - dobMilli;
// var diffYear = diff/(1000*60*60*24*30*12);
// console.log(diffYear)


// var dob = new Date ("Mar 5,2000")
// var dobMilli = dob.getTime();
// var today = new Date ();
// var todayMilli = today.getTime();
// var diff = todayMilli - dobMilli;
// var diffYear = diff/(1000*60*60*24*30*12);
// var accuAge = Math.floor(diffYear);
// console.log(accuAge)



// var dob = new Date(prompt("Enter your Date of Birth","Mar 5,2000"))
// var dobMilli = dob.getTime();
// var today = new Date();
// var todayMilli = today.getTime();
// var diff = todayMilli - dobMilli;
// var accuAge = Math.floor(diff/(1000*60*60*24*30*12))
// document.write(accuAge)








//Topic 34 changing elments of date and time

// var a = new Date();
// var b = a.setFullYear(2005);
// console.log(b)



// var a = new Date();
// var b = a.setMonth(5);
// console.log(b)





// var a = new Date();
// var b = a.setDate(15);
// console.log(b)





// var a = new Date();
// var b = a.setHours(6);
// console.log(b)






// var a = new Date();
// var b = a.setMinutes(35);
// console.log(b)



// var a = new Date();
// var b = a.setSeconds(25);
// console.log(b)




// var a = new Date();
// var b = a.setMilliseconds(5);
// console.log(b)





// Topic 35 Functions

// function is keyword
// greeting is function name
//(greet) is parameter


// Function ka general sintext
// function greeting(){

// }


// function call karny ka tareka
// function greeting(){
//     console.log("Hello Ghous")
// }

// greeting();



// function greeting(){
//     alert("Hello Ghous")
// }

// greeting();



// function greeting(){
//     document.write("Hello Ghous")
// }

// greeting();



// function greeting(greet){
//     alert(greet)
// }
// greeting("Hello Basit");



// function greeting(greet){
//     console.log(greet)
// }
// greeting("Hello Basit");



// function add(a,b,c){
//     alert(a + b + c)
// }
// add(5,8,11);




// return key word
// abi tak hum orgyoment k thero function ko values dy rahy thy
// return se kya karty h hum function value lyty ha
// jab hum function se value lyty ha function call karny k waqt hamy ek
// var k undr save karwana pharta h (ie:var g = add(5,8,11))


// function add(a,b,c){
//     var z = a+b+c
//     return z;
// }

// var g = add(5,8,11);
// alert(g)


// var f = 15;
// function add(a,b,c){
//     var f = 15;
//     var z = a+b+c
//     return z;
// }

// var g = add(5,8,11);
// alert(f);



// var f = 15;
// function add(a,b,c){
//    alert(f)
//     var z = a+b+c
//     return z;
// }

// var g = add(5,8,11);
// alert(g);





// function ageCal(){
// var dob = new Date(prompt("Enter your Date of Birth","Mar 5,2000"))
// var dobMilli = dob.getTime();
// var today = new Date();
// var todayMilli = today.getTime();
// var diff = todayMilli - dobMilli;
// var accuAge = Math.floor(diff/(1000*60*60*24*30*12))
// document.write(accuAge)
// }

// ageCal();
// document.write("<br>");
// ageCal();
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");

// ageCal();



// Ghous

// function = var  first = names
// function first
// var       names



// function first(){
//     alert("Hello World")
// }



// console.log("Hello")
// function first(){
//     alert("Hello World")
// }
// console.log("World!")



// console.log("Hello")
// function first(){
//     alert("Hello World")
// }
// first();
// console.log("World!")



// function first(){
//     alert("Hello World")
// }
// first();



// function first(){
//     alert("Hello World")
// }

// first();
// first();
// first();
// first();
// first();



// function first(greet){
//     alert(greet)
// }

// first("Hello World");



// // Parameters
// function first(a,b){
//     alert(a + b)
// }
// //arguments
// first(2,3);
// first(14,6);
// first(2,7);



// function first(b,a){
//     alert(b + a)
// }
// first(2,3);




// return

// function first(b, a) {
//     return b + " " + a;
// }
// console.log(first("Hello", "world"))



// return
// function first(b, a) {
//     return b + a;
// }
// console.log(first(2,3))

// console.log(first(10,5))

// console.log(first(4,4))



// function first(b,a){
//     return "Hello"
// }
// console.log(first())




// yahoo baba return;

// function fullname (fname = "Yahoo", lname = "Baba"){
//     var a = fname + " - " + lname;

//     return a;
// }
// var fn = fullname("Ram","Singh");
// document.write(fn)




// function sum(math,eng,sci){
//     var s = math + eng + sci;

//     return s;
// }
// function percentage(tt){
//     var per = tt/300*100;

//     document.write(per);
// }
// var total = sum(55,65,75);
// percentage(total);




// Topic 36 Function: Passing them data paramters k zariye function ko data pass kardiya ha

// Topic 37 Function Passing data back from them..Function se kis tarha data pass karty h return k thero




// Topic 38 Function Local vs. Global variable


// function foo(){
//     var  a = "ghous"
// }
// console.log(a)


// function foo(){
//     var  a = "ghous"
//     console.log(a)
// }
// foo();


// var a = "ghous";
// function foo(){
//     console.log(a)
// }
// foo();



// var a = "Basit"
// function foo(){
//     var  a = "ghous"
// }
// console.log(a)



// var a = "ghous"
// function foo(){
//     a = "Ahmed";
// }
// foo();
// console.log(a);



// var a = "ghous"
// function foo(){
//     a = "Ahmed";
// }
// console.log(a);



// Calculator

// function calc(num1,opr,num2){
//     if(opr === "+"){
//         return num1 + num2
//     }else if(opr === "-"){
//         return num1 - num2
//     }else if(opr === "*"){
//         return num1 * num2
//     }else if(opr === "/"){
//         return num1 / num2
//     }else if(opr === "%"){
//         return num1/num2*100 + "%"
//     }else{
//         return "Incorrect Operator"
//     }
// }

// var result = calc(5,"-",5);
// var result1 = calc(4,"*",6);
// var result2 = calc(4,"$",9)
// console.log(result)
// console.log(result1)
// console.log(result2);



// var result = calc(255,"_",600);
// console.log(result)

// var value = calc(5,"+",10);
// console.log(value)





// function foo(a,b){
//     return a + b
// }

// console.log(foo(1)) //NaN full form Not a Number..NaN is type of javascript


// console k undr
//  2 + undefined
//  NaN




// Defult Parametrs
// function foo(a,b = 3){
//     return a + b
// }

// console.log(foo(1)) //4



// Defult parameters ka mtlb ye hota ha agr value mil jaye tou wo value dirctly dydou yaha pe agr value na mily argunt may tou defult wali utha lo b = 3
// function foo(a,b = 3){
//     return a + b
// }

// console.log(foo(1,5))//6




// return ma ny defin he nh kara is liye is ny mujy undefined answr diya
// function foo(){

// }
// console.log(foo()) //undfined



// function foo(){

// }
// console.log(foo(1,5)) //undefined



// function foo(a,b){

// }
// console.log(foo(1,5)) //undefined



// Topic  39 switch statments: How to start them

// switch statement


// var  names = "Ghous";
// switch(names){

// }



// var  names = "Ghous";
// switch(names){
//     case "Ghous":
//         alert("Hello Ghous")
// }




// var names = "Ghous";
// switch (names) {
//     case "Ghous":
//         alert("Hello Ghous")
//         break;
//     case "Basit":
//         alert("Hello Basit")
//         break;
//     default:
//         alert("Hello")
// }





// var names = "Basit";
// switch (names) {
//     case "Ghous":
//         alert("Hello Ghous")
//         break;
//     case "Basit":
//         alert("Hello Basit")
//         break;
//     default:
//         alert("Hello")
// }




// var names = prompt("Enter your Name");
// switch (names) {
//     case "Ghous":
//         alert("Hello Ghous")
//         break;
//     case "Basit":
//         alert("Hello Basit")
//         break;
//     default:
//         alert("Hello")
// }

// topic 40 switch statement How to complete them





























































































