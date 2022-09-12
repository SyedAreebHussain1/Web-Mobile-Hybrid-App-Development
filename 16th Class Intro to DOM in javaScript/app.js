// Topic 51 Reading and setting paragraph text

// sab se pehly ma ny text ko var may save kar wa ha

// function readMore(){
//    var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil similique dignissimos, vitae odio totam deleniti quae id amet doloribus consequuntur aut voluptates optio neque nam temporibus fugit eius mollitia animi?"
//    var peragraph = document.getElementById("pera")
//    peragraph.innerHTML = text 
// }



// Standard
// Two peragraph bilkul is tarha k same nh ho skty jus ma apko samjha raha ho Paragraph se input lyna or paragph may text ko put karna ye dono ye chezy in dono peragraph k zariye bata raah ho  


// function readMore(){
//     var text = document.getElementById("txt").innerHTML
//     var peragraph = document.getElementById("pera")
//     peragraph.innerHTML = text
// }


// function readMore(){
//     var text = document.getElementById("txt")
//     var peragraph = document.getElementById("pera")
//     peragraph.innerHTML = text.innerHTML
// }


// HTML in javascript javascript k undr HTML

// function readMore(){
//     var text = "<ul><li>List 1</li><li>List 2</li><li>List 3</li></ul>"
//     var peragraph = document.getElementById("pera")
//     peragraph.innerHTML = text
// }


// Topic 52 Manipulating images and text


// function visCar(){
//     var image = document.getElementById("car")
//     image.className = "hidden"
// }

// HTML may jab image ko class dy ve ho or hamy uski class ko
//  remove karna ho tou hum className += " classname" lkhy gy or css may work kar ge

// function visCar(){
//     var image = document.getElementById("car")
//     image.className += " hidden";
// }



// function visCar(){
//     var image = document.getElementById("car")
//     image.className += " hidden";
// }


// Topic 53 Swapping images


// function changeImg(){
//     var cImg = document.getElementById("car")
//     cImg.src = "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"   
// } 




// function changeImg(){
//     var cImg = document.getElementById("car")
//     cImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHRXh2N6quBvariiq2jvotUb15Ws3Lc5mGQ&usqp=CAU"
// }


// function changeImgBefore(){
//     var cImg = document.getElementById("car")
//     cImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvraI-wAfW0rIWr5AaTfXBhnlJ8AdOeN_5JQ&usqp=CAU"
// }



// function changeImg(id,src){
//     var image = document.getElementById(id)
//     image.src = src
// }




//Topic 54 Swapping images and setting classes
// href



// function saylaniWebMobile(){
//     var lnk = document.getElementById("saylani")
//     lnk.href = "https://www.youtube.com/channel/UCIp6Gs5oDdxf9yVzA5G-Qvw"
// }



// function linkFb(){
//     var lnk = document.getElementById("linkfb")
//     lnk.href = "https://www.facebook.com/"
// }





// Topic 55 setting styles


// function change(){
//     var image = document.getElementById("img")
//     image.style.width = "80%"
// }



// function change(){
//     var peragraf = document.getElementById("pera")
//     peragraf.style.fontSize = "2em"
// }



// function change(){
//     var image = document.getElementById("img")
//     image.style.width = "50%"
//     image.style.border = "4px solid red"
//     image.style.borderRadius = "20%"
// }





//Topic 56 Target all element by tag name

// var pera = document.getElementsByTagName("p")
// pera[1].style.color = "red"




// var pera = document.getElementsByTagName("p")
// pera[1].style.color = "red"
// pera[2].style.color = "blue"



// tamam pa apply karny k liye forloop lagye gy

// var pera = document.getElementsByTagName("p")
// for(var i = 0;i < pera.length;i++){
//     pera[i].style.color = "blue"
// }




//Topic 57 Target some element by tag name

var parent = document.getElementById("parent");
var pera = parent.getElementsByTagName("p")
for(var i = 0; i < pera.length; i++){
    pera[i].style.color = "blue"
}

























































