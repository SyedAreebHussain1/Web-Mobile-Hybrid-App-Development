//Topic 64 counting Elelment 

// var list = document.getElementById('li1')
// console.log(list)



// var list = document.getElementsByTagName('li')
// console.log(list[3])



// var list = document.getElementsByTagName('li')
// console.log(list.length)


// var list = document.getElementsByClassName('li0')
// console.log(list)



// Topic 65 Attributes

// hasAttribute

// var target = document.getElementById('p1')
// if(target.hasAttribute('class')){
//     alert('available')
// }else{
//     alert('Not available')
// }



// var target = document.getElementById('p1')
// if(target.hasAttribute('src')){
//     alert('available')
// }else{
//     alert('Not available')
// }


// var target = document.getElementById('p1')
// console.log(target.hasAttribute('src'))


// var target = document.getElementById('p1')
// console.log(target.hasAttribute('class'))



// getAttribute

// var target = document.getElementById('p1')
// console.log(target.getAttribute('class'))


// var target = document.getElementById('p1')
// console.log(target.getAttribute('id'))



// var target = document.getElementById('p1')
// console.log(target.getAttribute('width'))



// var target = document.getElementById('p1')
// console.log(target.getAttribute('src'))




// setAttribute

// var target = document.getElementById('p1')
// target.setAttribute('class','blue')


// var target = document.getElementById('p1')
// target.setAttribute('class','blue')
// console.log(target)


// Topic 66 Attribute names and values 

// var target = document.getElementById('p1')
// console.log(target.attributes)


// nodeName
// var target = document.getElementById('p1')
// console.log(target.attributes[1].nodeName)


// nodeValue
// var target = document.getElementById('p1')
// console.log(target.attributes[1].nodeValue)

// var target = document.getElementById('p1')
// console.log(target.attributes[2].nodeValue)



//Topic 67 Adding nodes

// var tag = document.createElement('p')
// console.log(tag)


// var tag = document.createElement('img')
// console.log(tag)



// var tag = document.createElement('h1')
// console.log(tag)


// var p = document.createElement('p')
// var txt = document.createTextNode('Hello World!')
// p.appendChild(txt)
// console.log(p)




// var p = document.createElement('p')
// var txt = document.createTextNode('Hello World!')
// p.appendChild(txt)
// var main = document.getElementById('main')
// main.appendChild(p)




// msg SEnd

function send(){
    var val = document.getElementById('val')
    var elementNam = document.createElement('p')
    var txtNode = document.createTextNode(val.value)
    var msg = document.getElementById('msg')
    elementNam.appendChild(txtNode)
    msg.appendChild(elementNam)
    val.value = ''
}















































































































