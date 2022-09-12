// Class #15

// loop

// for (var a = 0; a < 10; a++){
//     console.log(a)
// }


// Topic 41 While loop


// var b = 0;
// while (b < 10) {
//     console.log(b)
//     b++
// }




// Topic #42 do/while loop
// do ka matlb ha ub ye karo
// do ek bar zaror chaly ga cha hy condtion true / false ho
// do while lazmi one tim print hoga condition false he Q na ho

// var c = 0 
// do{
//     console.log(c)
//     c++
// }while(c < 10)



// var c = 0 
// do{
//     console.log(c)
//     c++
// }while(c > 10)  //0




//Topic 43 Placing scrpit

// 1)app.js
// 2)scripts.js
// 3)main-code.js
// 4)main_code.js
// 5)main.code.js
// 6)coreJS.js

// complete 43



//Topic 44 commenting

// press ctrl and ? mark




// very important chapter 45
// Topic 45 Events:link



// function foo(){
//     alert("Hello World!")
// }



// function foo(){
//     var a = 2 + 2;
//     alert(a)
// }



// function foo(greet){
//     alert(greet)
// }




//Topic 46 Event : Button 

// function clickBtn(){
//     alert("Click")
// }







// Topic 47 Event:Mouse

// onmouseover
// css Hover = onmouseover bilkul same work karta h 


// function foo(){
//         alert("Click")
//     }





//Topic 48 Events:fields 






// Topic 49 Reading Field Values


// function getName(){
//     var a = document.getElementById("names")
//     alert(a.value)
// }




// function getName(){
//     var name = document.getElementById("xyz")
//     alert(name.value)
// }




// button pe click krty he console k undr pura input ajye ga is tarha <input type="text" id="xyz">
// function getName(){
//     var name = document.getElementById("xyz")
//     console.log(name)
// }




// function getName(){
//     var name = document.getElementById("xyz")
//     console.log(name.value)
// }






// function getName(){
//     var name = document.getElementById("xyz")
//     console.log(name.value)
//     name.value = ""
// }






// Topic 50 Setting field values



// function setName(){
//     var name = document.getElementById("xyz")
//     name.value = "Ghous"
// }
// setName();





// innerHTML
// function setName(){
//     var para = document.getElementById("xyz")
//     para.innerHTML = "Hello this is example"
// }
// setName();






// function setName() {
//     var name = document.getElementById("xyz")
//     name.value = "Ghous"
//     var para = document.getElementById("para")
//     para.innerHTML = "Hello this is example"
// }
// setName();



     //Calculator

// function getNum(num){
//     console.log(num)
//     var result = document.getElementById("inputResult")
// }






function getNum(num){
    var result = document.getElementById("inputResult")
    if(result.value == 0){
        result.value = ""
    }
    result.value += num
}

function clearResult(){
    var result = document.getElementById("inputResult")
    result.value = 0
}

function getResult(){
    var result = document.getElementById("inputResult")
    // console.log(result.value)
    result.value = eval(result.value)
}












// Ascii Code javascript




// var a = "Z";
// var b = a.charCodeAt();
// console.log(b)



// var a = "A";
// var b = a.charCodeAt();
// console.log(b)





// var a = "I";
// var b = a.charCodeAt();
// console.log(b)






// var a = "j";
// var b = a.charCodeAt();
// console.log(b)







// var a = "U";
// var b = a.charCodeAt();
// console.log(b)



