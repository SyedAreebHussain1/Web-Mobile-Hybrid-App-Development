
// setInterval(function(){

// })


// 1000 ma ny lekha ha is ka mtlb ye h k har 1 second bad timer() wala 
// funtion run hojaye ga har second bad timer wala fuction run hojye ga 
// jab tak hum isy ruky gy nh ye ruky ga nh 

// setInterval() multiple time chaly ga bar bar  chaly ga jabtak 
// ruky ge nh jab tak chalta rahy ga 

// function timer(){

// }

// setInterval(timer,1000)


// function timer(){
// console.log("running...")
// }

// setInterval(timer,1000)





// setTimeout() ye bhi dou value lyta ha pehli may function 
// dusri may time. lekin fark ye ha setInterval bar bar chalta ha 
// setTimeout sirf ek bar chalta ha or ye function call kab hoga jab 3 second
// hojaye ye call hojaye ga jaisy he mainy apni file run karoga
//brower pe 3 second bad ye run hojye ga  

// setTimeout() one time chaly ga

// function timeOut(){
//     console.log("running...")
// }
// setTimeout(timeOut,3000)



// function timeOut(){
//     console.log("running...")
// }
// setTimeout(timeOut,8000)






// setInterval() ko rukny ka tareeka

// var count = 0;
// function timer(){
// count++
// console.log(count)
// }
// setInterval(timer,1000)



// setInterval() ub isko rukny ka tareeka kya ha isko rukny ka 
// tareka ye ha k setInterval jo h is ko ma rakh dunga var = interVal k undr

// sab se pehly humny kya kara ek count ka var ly liya us may mainy value rakhde 0
// ek or var bana liya interVal nam se lekin koi value define nh ki ma ny iska mtlb ye k is may value bad may define karunga
// us k bad ma ny ek funcion banaya ha timer k nam se is function k undar ma ny count ko increment karawaya h count kya ha mera var ha isko ma ny increment karwadiya or console.log karadiya count ko
//ub mai ny kya kara inerVal k var k undar ma ny function set karwa diya setinterval..setInterval function kya karta ha reapeativly chalta h mtlb is may koi bhi function hum dy dyty ha wo bar bar reapeat hota h
//timer wala jo function tha setInterval ki value may dy diya or ye dusri value ye humse lyta ha time.time ye humse lyta ha milliseconds k undr time mai ny dy diya 1000-millisec hoty ha 1 second tou ye 1 second bad bar bar chaly ga
//setTimeout se hum setInterval ko ruky gy   
//setTimeout ka function  kya karta ha ek he bar chalta ha wo time hum isko bata dyty ha k ap call hojana us time jo time humdy agr mainy usko bola 5000millisec bad ap chal jana  tou 5 second bad  function chaly ga 
//or is k undr jo ek function clearInterval() h ye kya karta ha jo setInterval hamara bar bar chal raha hota ha usko stop/pouse kardyta ha clearInterval() kya karta ha setInterval ko stop kardyta ha
//setInterval mainy kaha pe save kara tha interVal k var k undr tou ma ny clearInterval k undr interVal wala var pass kardiya tou isny kya kara setInterval ko stop kardiya
//5 second tak chaly ga Q k pe setTimeout ko 2nd value 5000 millisec di h


// var count = 0;
// var interVal;
// function timer(){
//     count++
//     console.log(count)
// }
// interVal = setInterval(timer,1000)
// setTimeout(function(){
//     clearInterval(interVal)
// },5000)





//Stop Watch
// sab se pehly three var bana liye or unko value 0 dy di sab ko 
//phir ma id's se get karunga
//interVal k nam ka var banao ga or usko blank rakho ga.
//ub hamy ek setInterval() function chalana ha jo bar bar chaly wo
//function timer k name se function bana lia ha is may karunga msec ko incrament msec++ thek ha sab se poehly msec increment hogy msec jab 100 tak puch jaye gy tou tou sec++ increment hojaye ga sec jab 60 pe puch jae ga tou min++ incremet hojay ga
//incrment ho gya ub mujhy HTML ma kaha show karwa na ha jo ma msec ki heading bany thi uski undar show karwa na ha javascript k undar gt bhi kara ve ha var msecHeading k nam se 
//ye kya kar ga timer jab mera fuction chaly ga msec ko increment kary ga karny k bad usko html ma daal dyga
//ub setInterval function laga dyty ha interVal k undar interVal = setInterval(1st timer wala function,2nd tim dy dunga)


// var min = 0;
// var sec = 0;
// var msec = 0;
// var minHeading = document.getElementById("min")
// var secHeading = document.getElementById("sec")
// var msecHeading = document.getElementById("msec")
// var interVal;
// function timer(){
//     msec++
//     msecHeading.innerHTML = msec
//     if(msec >= 100){
//         sec++
//         secHeading.innerHTML = sec
//         msec = 0
//     }else if(sec >= 5){
//         min++
//         minHeading.innerHTML = min
//         sec = 0
//     }
// }
// function start(){
//     interVal = setInterval(timer,10)
// }
// function stop(){
//     clearInterval(interVal)
// }
// function reset(){
//     msec = 0;
//     sec = 0;
//     min = 0;
//     msecHeading.innerHTML = msec
//     secHeading.innerHTML = sec
//     minHeading.innerHTML = min
//     clearInterval(interVal)
// }














// var msec = 0
// var sec = 0
// var min = 0
// var msecHead = document.getElementById("msec")
// var secHead = document.getElementById("sec")
// var minHead = document.getElementById("min")
// var btn1 = document.getElementById("btn1")
// var interVal;
// function timer() {
//     msec++
//     msecHead.innerHTML = msec
//     if (msec == 100) {
//         sec++
//         secHead.innerHTML = sec
//         msec = 0
//     } else if (sec == 6) {
//         min++
//         minHead.innerHTML = min
//         sec = 0
//     }
// }

// function start() {
//     interVal = setInterval(timer, 10)
//     btn1.disabled = true
// }
// function stop() {
//     clearInterval(interVal)
//     btn1.disabled = false
// }
// function reset() {
//     minHead.innerHTML = 0
//     msecHead.innerHTML = 0
//     secHead.innerHTML = 0
//     // clearInterval(interVal)
//     stop()
// }












// var msec = 0;
// var sec = 0;
// var min = 0;
// var msecHead = document.getElementById("msec")
// var secHead = document.getElementById("sec")
// var minHead = document.getElementById("min")
// var btn1 = document.getElementById("btn1")
// var interVal;
// function timer(){
//     msec++
//     msecHead.innerHTML = msec
//     if(msec == 100){
//         sec++
//         secHead.innerHTML = sec
//         msec = 0
//     } else if(sec == 10){
//         min++
//         minHead.innerHTML = min
//         sec = 0
//     }
// }

// function start(){
//     interVal = setInterval(timer,10)
//     btn1.disabled = true
//  }
// function stop(){
//     clearInterval(interVal)
//     btn1.disabled = false
// }
// function reset(){
//     msec = 0
//     sec = 0
//     min = 0
//     msecHead.innerHTML = msec
//     secHead.innerHTML = sec
//     minHead.innerHTML = min
//     clearInterval(interVal)
// }




// var minute = 0;
// var second = 0; 
// var milliSecond = 0;
// var hours = 0;
// var minuteHeading = document.getElementById("minute")
// var secondHeading = document.getElementById("second")
// var milliSecondHeading = document.getElementById("millisecond")
// var hoursHeading = document.getElementById("hr")
// var disBtn = document.getElementById("dis")
// var interVal;
// function timer(){
//     milliSecond++
//     milliSecondHeading.innerHTML = milliSecond
//     if(milliSecond >= 100){
//         second++
//         secondHeading.innerHTML = second
//         milliSecond = 0
//     }else if(second >= 60){
//         minute++
//         minuteHeading.innerHTML = minute
//         second = 0
//     }else if(minute >= 60){
//         hours++
//         hoursHeading.innerHTML = hours
//         minute = 0
//     }
// }
// function start(){
// interVal = setInterval(timer,10)
// disBtn.disabled = true
// }
// function stop(){
//     clearInterval(interVal)
//     disBtn.disabled = false
// }
// function reset(){
//     milliSecond = 0;
//     second = 0;
//     minute = 0;
//     hours = 0;
//     milliSecondHeading.innerHTML = milliSecond
//     secondHeading.innerHTML = second
//     minuteHeading.innerHTML = minute
//     hoursHeading.innerHTML = hours
//     stop()
// }










//The Dom


// var a = document.getElementById('some')


// console.log(document.childNodes[0])


// console.log(document.childNodes[1])


// console.log(document.childNodes[2]) //undefined


// console.log(document.childNodes[1].childNodes[0])

// console.log(document.childNodes[1].childNodes[1])

// console.log(document.childNodes[1].childNodes[2])
 
// console.log(document.childNodes[1].childNodes[3]) //undefined


// console.log(document.childNodes[1].childNodes[1].childNodes[0])



//Target ka karny ka tareqa

// console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[1])


// Reapeat again b basit

// document.write("Hello World")


// console.log(document.childNodes[0])

// console.log(document.childNodes[1])

// console.log(document.childNodes[2])

// console.log(document.childNodes[1].childNodes[0])

// console.log(document.childNodes[1].childNodes[1])

// console.log(document.childNodes[1].childNodes[2])

// console.log(document.childNodes[1].childNodes[2].childNodes[0])

// console.log(document.childNodes[1].childNodes[2].childNodes[1])

// console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[0])

// console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[1])



// var a = document.getElementById('pappa')
// console.log(a.childNodes[0])




// var a = document.getElementById('pappa')
// console.log(a.childNodes[1])




// var a = document.getElementById('pappa')
// console.log(a.firstChild)






// Sliblings

// var a = document.getElementById('firstSon')
// console.log(a.nextSibling)





// ub pappa dhud rah ha last waly bety ko


// var a = document.getElementById('pappa')
// console.log(a.lastChild)




// ub firstSon ko pappa ko dhund na ha

// var a = document.getElementById('firstSon')
// console.log(a.parentNode)




// var a = document.getElementById('secondSon')
// console.log(a.parentNode)




// nodeType 1 or 3


// var a = document.getElementById('firstSon')
// console.log(a)


// var a = document.getElementById('firstSon')
// console.log(a.nodeType)

// var a = document.getElementById('firstSon')
// console.log(a.childNodes[0].nodeType)



// nodeName


// var a = document.getElementById('firstSon')
// console.log(a.nodeName)




// var a = document.getElementById('firstSon')
// console.log(a.nodeName)


// var a = document.getElementById('pappa')
// console.log(a.nodeName)



// var a = document.getElementById('firstSon')
// console.log(a.nodeName)




// nodeValue

// var a = document.getElementById('pappa')
// console.log(a.childNodes[0])



// var a = document.getElementById('pappa')
// console.log(a.childNodes[0].nodeValue)



// jab ek he div k undar bhot sary ho to is tarha target kargy sab ko 

// var a = document.getElementById('pappa')
// console.log(a.childNodes)



// solve karna ha
// var a = document.getElementById('father')
// console.log(a.sibling)


