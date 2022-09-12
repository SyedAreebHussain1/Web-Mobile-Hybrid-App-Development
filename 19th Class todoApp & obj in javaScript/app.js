
// Todo
// var list = document.getElementById('list')

// function addTodo() {
//     var todo_Item = document.getElementById('todo-item')


//     // Create li tag with text node
//     var li = document.createElement('li')
//     var liTxt = document.createTextNode(todo_Item.value)
//     li.appendChild(liTxt)
//     // console.log(li)
//     list.appendChild(li)


//     // Create delete button
//     var deleteBtn = document.createElement('button')
//     var delteTxt = document.createTextNode('Delete')
//     deleteBtn.appendChild(delteTxt)
//     deleteBtn.setAttribute('class', 'btn')
//     deleteBtn.setAttribute('onclick', 'deleteItem(this)')
//     // console.log(deleteBtn)
//     li.appendChild(deleteBtn)


//     // Create Edit button
//     var editBtn = document.createElement('button')
//     var editTxt = document.createTextNode('Edit')
//     editBtn.appendChild(editTxt)
//     editBtn.setAttribute('onclick', 'editItem(this)')
//     // console.log(editBtn)
//     li.appendChild(editBtn)

//     todo_Item.value = ''
// }


// function deleteAll() {
//     list.innerHTML = ''
// }
// function deleteItem(d) {
//     d.parentNode.remove()
// }
// function editItem(e) {
//     var editValue = prompt('Edit Todo', e.parentNode.firstChild.nodeValue)
//     e.parentNode.firstChild.nodeValue = editValue
// }





// Topic 69 Objects

//  Array jo return karta ha wo object karta ha
// Object it self object return karta ha
//  return ka maqsaad kya ha by defualt value junrate karta kis form
// may ho rahi Array ki value bhi jo junrate hoti h wo object k he form
//may he ho rahi hoti ha agy hum batye gy kaisy ho rahi hoti ha


// Object general structure
// var plan1 = {
//     name: "Basit",
//     price: 3.99,
//     space: 100,
//     Transfer: 1000,
//     pages: 10
// }


// Object general structure
// var webCourse = {
//     t1: "ali",
//     t2: "ghous",
//     t3: "basit"
// }
// console.log(webCourse)



// Array object return karta ha ye dekhy
// check console mery pass ek object ban raha ha check console Array ka structure same ha object k structure se
// Array always return object
// var arr = ["ali","ghous","basit"]
// console.log(arr)


// var webCourse = {
//     t1: "ali",
//     t2: "ghous",
//     t3: "basit"
// }
// webCourse.t4 = "nadia"
// console.log(webCourse)



// Topic 70 Objects. Properties

// var webCourse = {
//     t1: "ali",
//     t2: "ghous",
//     t3: "basit"
// }
// webCourse.t4 = "nadia"
// webCourse.class = [18,19]
// console.log(webCourse)


// empty k undr value put karny ka tareka
// var course = {}
// course.name = "Web"
// console.log(course)

// var course = {}
// course.val = 43
// console.log(course)

// var course = {}
// course.a = false
// console.log(course)




// undefined bhi value dy skty ha forexample ek property dal de lekin uski value nh de
// var webCourse = {
//     t1: "ali",
//     t2: "ghous",
//     t3: "basit"
// }
// webCourse.t4 = "nadia"
// webCourse.class = [18,19]
// webCourse.t5 = undefined
// console.log(webCourse)




// hum ye bhi dekh skty h k koi value mojood ha ya nahi
// var webCourse = {
//     t1: "ali",
//     t2: "ghous",
//     t3: "basit"
// }
// webCourse.t4 = "nadia"
// webCourse.class = [18,19]
// webCourse.t5 = undefined
// var abc = "t5" in webCourse
// // console.log(webCourse)
// console.log(abc)



// Array k undr Object. Object k undr Object

// var myQuestion = [
//     {
//         question: "What is your Name",
//         answer: {
//             a: "ali",
//             b: "ghous",
//             c: "basit"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "What is your Age",
//         answer: {
//             a: 15,
//             b: 12,
//             c: 16
//         },
//         correctAnswer: "b"
//     }
// ]
// console.log(myQuestion)




// Topic 71 Objects: Methods

// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 7]
// };
// function calcAnnual() {
//     var bestPrice = plan1.price;
//     var currDate = new Date();
//     var thisMo = currDate.getMonth();
//     for (var i = 0; i < plan1.discountMonths.length; i++) {
//         if(plan1.discountMonths[i]===thisMo){
//             bestPrice = plan1.price * .8
//         }
//     return bestPrice * 12
// }
// }
// var annualPrice = calcAnnual()
// console.log(annualPrice)






// this
// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 7]
// };
// function calcAnnual() {
//     var bestPrice = this.price;
//     var currDate = new Date();
//     var thisMo = currDate.getMonth();
//     for (var i = 0; i < this.discountMonths.length; i++) {
//         if(plan1.discountMonths[i]===thisMo){
//             bestPrice = this.price * .8
//         }
//     return bestPrice * 12
// }
// }
// var annualPrice = calcAnnual()
// console.log(annualPrice)




// perametter
// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 7]
// };
// function calcAnnual(percentIfDisc) {
//     var bestPrice = this.price;
//     var currDate = new Date();
//     var thisMo = currDate.getMonth();
//     for (var i = 0; i < this.discountMonths.length; i++) {
//         if(this.discountMonths[i]===thisMo){
//             bestPrice = this.price * percentIfDisc
//         }
//     return bestPrice * 12
// }
// }
// var annualPrice = this.calcAnnual(.85)
// console.log(annualPrice)



// Topic 72 Object Constructors

// perametter

// function Plan(name, price, space, transfer, pages) {
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages
// }
// var plan1 = new Plan("Basic", 3.99, 100, 1000, 10)
// console.log(plan1)




// function Course(t1, t2, t3) {
//     this.t1 = t1;
//     this.t2 = t2;
//     this.t3 = t3
// }
// var xyz = new Course("ali", "ghous", "basit")
// console.log(xyz)



// function Course(t1, t2, t3) {
//     this.a = t1;
//     this.b = t2;
//     this.c = t3
// }
// var fgh = new Course("al", "ghou", "basi")
// console.log(fgh)





// Topic 73 Object Constructors for methods
