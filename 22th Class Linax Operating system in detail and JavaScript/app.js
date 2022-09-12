// Topic 76 Browser control: Getting and setting the URL
// hamary pass kuch condition is tarha ki h jaisky hum ny puri ki puri web appliction bana li login page sign up page tamam cheezy ma ny bana li 
// javascript k zariye ma apny page ko change kis tarha karo ga apna href change kis tarha karunga ga ye ajj hum cheezy pharny waly h k hum apni javascript ki madad se hum apny broswer ko control kis tarha kary gy bhot easy h 
// easy bhot ha or kam ka bhi bhot ha   

// hum ek page par mojood ha hamy ye kasiy pata chaly k hum kis href par mojood ha kis location par mojood ha 
// function press(){
//     var locate = window.location.href
//     console.log(locate)
// }


//  url jiss page ka dunga us page pe chala jao ga abhi is may google ka url diya ha function may  
// href
// function press(){
//     window.location.href = "https://www.google.com/"
// }




// Topic 77 browers control: getting and setting the URL another way


// assign bilkul href ki tarha work karta or kam karna ka stand bhi assign ha href nh  
// assign
// function press(){
//     window.location.assign("https://www.google.com/")
// }


// ub mery pass condition aisi ha hum log facebook login karty ha hum jab back karty h tou humy login wala page nh milta.. replace use howa wa hota ha i.e
// replace kya karta h next page pe jaye ga lekin is ko wapsi jany ka rasta nh pta hota mtlb back waly page pe nh ja ta
// back ka option he nh ay ga 
// replace
// function press(){
//     window.location.replace("https://www.google.com/")
// }



// reload in web (false)/(empty) bhi chor dunga tou ye browser ko reload kardyga
// (false) or () dono same ha
// reload
// function press(){
//     window.location.reload(false) //cahche reloading 
// }



// sarwar se reload karwany k liye (true)
// sarver conect jab hum true use karygy 
// function press(){
//     window.location.reload(true)//sarver reloading
// }




// Topic 78 Browser control: Forword and reverse

// history.forward()
// history.back()
// history.go(1)
// history.go(-1)

// document.referrer ka matlb ha k kis website se ap aye ho  
// document.referrer




// Topic 79 browser control: filling the window with content
// important 
// koi bhi appliction hoti h appliction may hota ha login with google ya phir lekha hota ha login with facebook jaisy he hum click kartyy ha small window ati h browser ki us ya tou facebook ka page hota ha ya google ka page hota ha gmail ka pagae hota h
// ya small window ajati h wo kis tarha bunti h ub hum wo dekhny waly h  

// window.open ka matlb ha apko new window open karni h  
// function press(){
//      window.open()
// }



// blank page pe mai ny apni html lekh de ha
// function press(){
//     var content = "<h2>Successfully change page bla bla bla</h2>"
//      window.open().document.write(content)
// }



// mujhy koi bhi href dyna ha href kis trha dy ge
// function press(){
//      window.open("https://www.google.com/")
// }



// koi new window open karwany k sth sth apni screen pe new window show hogi example nechy
// function press(){
//     window.open("https://www.google.com/","win1","width=600,height=500,left=200,top=100")
// }





// Topic 81 Browers control: testing for popup blockers

function press() {
    var win = window.open("https://www.google.com/", "win1", "width=600,height=500,left=200,top=100")
    if (win === null) {
        alert("ap apna popup blocker ko disable kardou")
        win.open()
        win.close()
    }
}




// function press() {
//     var win = window.open("", "", "width=600,height=500,left=200,top=100")
//     if (win === null) {
//         alert("ap apna popup blocker ko disable kardou")
//         win.open()
//         win.close()
//     }
// }













































