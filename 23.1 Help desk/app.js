// promise 
// promise kya kar raha tha jasiy k ma ny apko batya tha last class may pormise mtlb agr hum real life may baat kary tou promise mtlb wada
// ma agr kisi se wada karo mai us wady ko pura karunga ya phir ma usko toor dunga mtlb ma wada pura nh karunga 
// ise tarha se javascript may bhi ek promise ha javascript jo promise wo bhi ye he karta ha ya tou wo promise Resolve kardyta ha ya phir promise ko wo Reject kardyta ha


// API hoti kya ha ma ny apko batya tha ap log bhol gaye shayad 
//API ye hoti h k hamari appliction ha hum ny uska design pura tayyar karliya thk ha ub ek form ha farz kary mesal k toor pe hamary pass ek form ha 
// sarwar adrees ko hum bolty ha API
// kafi tarha k database hoty ha ek wo database hoty jin k liye sarwar lazmi chye hota ha Q database may hum jab koi cheez save karwaty ha hamy wo cheez pehly sarwar pe bhejni hoti ha or phir sarwar wo cheez database may bhejta ha is he tarha
// se hamy database se koi data mangwana hota ha tou hum kya karty ha pehly hum sarwar ko request karty ha or phir sarwar database ko request karta ha thek ha is tarha k sarwar waly data hoty ha lekin humny jo abhi tak phara ha firebase ka database us k liye koi sarwar ki zarorat nh ha wo sarwar less ha firebase sab kuch khud handle karta ha or bagair kisi sarwar k firebase pe data bhej sakty ha     
//  lekin is k ilawa kafi sary databases or ha jin k liye sarwar lazmi requred hota ha ap is baat ko ly k paryshan mat hoi ye ga k hum ny tou database phara he nh ha or hamy ata he nh ha kuch hum ny tou sirf firebase phara ha...sarwar wala database hum agy ja k phary gy abhi ma sirf apko API ka bata raha ho database ko ly confuse nh hoiye ga
// database may hum data kis trha save karwaty ha apny data ko hum pehly sarwar pe bhejty ha sarwar hamara data datebase may bhej dyta ha ub sarwar se baat kasiy kary hum example jaisy k hamy kisi ko call karni ha 
// jasiy mujhny basit ko call karni h ma kya karunga apny phone may basit ka numbr search karunga basit ka number mujhy mil jaye ga or ma dial kar k call kardunga basit ko is he tarha se sarwar ka bhi ek adrees hota ha har sarwar ka adrees hota ha jisko hum bolty ha API  
//sarwar se communicate karny k liye use karty ha hum API wo API hoti tou IP adrees may lekin hamy asani k liye koi domain  wagaira koi name hamy mil jata ha    



// https://jsonplaceholder.typicode.com/ link copy right daimo
// fatch jo ha ek function ha javascript ka is k undr agr hum (jsonplaceholder.typicode.com) API dy gy tou is API pe ye request bhejy ga 
// fatch ek javascript ka method ha mtlb API ko data bhej na ha ya API se data mangwana ha tou is k liye javascript may use hota fatch..
// fatch jo ha promise return karta ha or promise ko hum resolve karwaty ha ya phir reject karwaty ha  
// fetch('https://jsonplaceholder.typicode.com/todos/1') //testing API taky developer practice kar saky //this is API jsonplaceholder.typicode.com ye wo API ha jis pe hum req dy gy ye jaye gi sarwar pe sarwar database se data get kary ga is API k zariye function k parameter may data dydy ga  
//     .then(response => response.json())
//     .then(function (result) {
//         console.log("Result==>", result) //resolve
//     })
//     .catch(function (error) {
//         console.log("Error==>", error) //reject main ny internet off kiya tou Error==> TypeError:Failed to fetch at js:22:1
//     })






// ek function se dusri function may data chaye ho tu hum kya kary 
// ye example achi ha javascript may multi function may may data chye ho phir hum use karty ha promise ka ye bhi achi example ha 
// function getData() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1') //testing API taky developer practice kar saky
//         .then(response => response.json())
//         .then(function (result) {
//             examples(result) //resolve
//         })
//         .catch(function (error) {
//             console.log("Error==>", error) //reject
//         })
// } 
// getData()

// function examples(data) {
//     console.log("data", data)
// }






// function getData() {
//     let promise = new Promise(function (resolve, reject) {
//         fetch('https://jsonplaceholder.typicode.com/todos/1') //testing API taky developer practice kar saky
//             .then(response => response.json())
//             .then(function (result) {
//                 resolve(result) //resolve
//             })
//             .catch(function (error) {
//                 reject(error) //reject
//             })
//     })
//     promise.then(function (result) {
//         console.log("Resolve==>", result)
//     })
//         .catch(function (err) {
//             console.log("Reject==>", err)
//         }) 
// }
// getData()








// let promise = new Promise(function (resolve, reject) {
//     fetch('https://jsonplaceholder.typicode.com/todos/1') //testing API taky developer practice kar saky
//         .then(response => response.json())
//         .then(function (result) {
//             resolve(result) //resolve
//         })
//         .catch(function (error) {
//             reject(error) //reject
//         })
// })
// function getData() {
//     promise.then(function (result) {
//         console.log("Resolve=>",result)
//     })
//         .catch(function (error) {
//             console.log("Reject=>",error)
//         })
// }
// getData()





// mujhy data nh mily ga wrong ha ye mujhy promise use karna hoga
// var firebase_data;
// firebase_data.database().ref("/").on("child_added", function (data) {
//     firebase_data = data.val()
// })
// console.log(firebase_data)




// ye work kary ga 
// function getData(){
// let promise = new Promise(function (resolve, reject) {
//     fetch('https://jsonplaceholder.typicode.com/todos/1') //testing API taky developer practice kar saky
//         .then(response => response.json())
//         .then(function (data) {
//             resolve(data) //resolve
//         })
//         .catch(function (error) {
//             reject(error) //reject
//         })
// })
// promise.then(function (data) {
//     console.log("data==>", data)
// })
//     .catch(function (err) {
//         console.log(err)
//     })

// }
// getData()








// async

// async function getData() {
//     let promise = new Promise(function (resolve, reject) {
//         fetch('https://jsonplaceholder.typicode.com/todos/1') //testing API taky developer practice kar saky
//             .then(response => response.json())
//             .then(function (data) {
//                 resolve(data) //resolve
//             })
//             .catch(function (error) {
//                 reject(error) //reject
//             })
//     })
// //  .then ya .catch bhi use kar skty ha 
//     let data = await promise
//     console.log(data) //error or data dono may se koi ek mil jaye ga 
// }
// getData()









// addtocart
// function addToCard() {
//     var img = document.getElementById("img")
//     var price = document.getElementById("price")
//     var product = {
//         img,
//         price,
//     }
//     var arr = []
//     arr.push(product)
//     localStorage.setItem("cart",arr)
// }


