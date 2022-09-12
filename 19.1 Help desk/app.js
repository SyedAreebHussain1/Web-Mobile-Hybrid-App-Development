// var arr = ['ghous', 'basit']
// console.log(arr[1])


// var arr = ['ghous', 'basit']
// for (var i = 0; i < arr.length; i++) {
//     arr[i]
//     console.log(arr[i])
// }

// var studentName = 'ghous';
// var studentRollNumber = 123;


// data jab ziada hoga tou ye object use karty h
// var student = {
//     name: 'Ghous',
//     roll:123,
//     class: 'Web & Mobile'
// }
// console.log(student)



// object target property

// var student = {
//     name: 'Ghous',
//     roll:123,
//     class: 'Web & Mobile'
// }
// console.log(student.name)
// console.log(student.class)
// console.log(student.roll)



// array k undr Object
// multiple student ka data array k undr object se bany ga

// var students = [{ name: 'Ghous' }, { name: 'Basit' }]
// console.log(students[1].name)

// var students = [{ name: 'Ghous' }, { name: 'Basit' }]
// console.log(students[1])


// var students = [{ name: 'Ghous' }, { name: 'Basit' }]
// for (var i = 0; i < students.length; i++) {
//     console.log(students[i].name)
// }



// var students = [{ name: 'Ghous' }, { name: 'Basit' },{name: 'Ali'}]
// for (var i = 0; i < students.length; i++) {
//     console.log(students[i].name)
// }


// update var
// var names = 'ghous'
// names = 'Ahmed'
// console.log(names)


// Object k undr koi propert add karny ka tareeka
// var student = {
//     name: 'Ghous',
//     roll:123,
//     class: 'Web & Mobile'
// }
// student.phone = 123456
// console.log(student)



// var student = {
//     name: 'Basit',
//     roll:123,
//     class: 'Web & Mobile'
// }
// student.phone = 123456
// console.log(student)



// property undefined
// koi asia property jo ma ny banai he nh tou wo mujhy undefined la k dega
// var student = {
//     name: 'Ghous',
//     roll:123,
//     class: 'Web & Mobile'
// }
// console.log(student.phone)


// var student = {
//     name: 'Ghous',
//     roll:123,
//     class: 'Web & Mobile'
// }
// student.phone = undefined
// console.log(student)



// empty k undr value add karna
// var student = {}
// student.name = 'Ghous'
// student.roll = 123
// student.class = 'Web & Mobile'
// console.log(student)




// delete property
// var student = {
//     name: 'Ghous',
//     phone: 123456
// }
// delete student.phone
// console.log(student)




// value ko check krna k value ha ya nh i.e
// Answer true ya false dyga
// var student = {
//     name: 'Ghous',
//     phone: 123456
// }
// var check = 'phone' in student;
// console.log(check)



// var student = {
//     name: 'Ghous',
//     phone: 123456,
//     subject: ['English','Urdu']
// }
// var check = 'roll' in student;
// console.log(check)



// Topic 71 Object Methods
// object k undr hum koi function bhi bana skty h
// Object k undr koi methods bhi add kar sakta ho yani k function


// var student = {
//     name: 'Ghous',
//     phone: 123456,
//     subject: ['English','Urdu'],
//     getResult: function(){
//         return 'Pass'
//     }
// }
// console.log(student.getResult())


// var student = {
//     name: 'Ghous',
//     phone: 123456,
//     subject: ['English','Urdu'],
//     exam1Marks: 50,
//     exam2Marks: 70,
//     getResult: function(){
//         return student.exam1Marks + student.exam2Marks
//     }
// }
// console.log(student.getResult())




// this property
// var student = {
//     name: 'Ghous',
//     phone: 123456,
//     subject: ['English','Urdu'],
//     exam1Marks: 50,
//     exam2Marks: 70,
//     getResult: function(){
//         return this.exam1Marks + this.exam2Marks
//     }
// }
// console.log(student.getResult())



// Topic 72 Objects Constructors
// Constructors function ka first word capital hoga
// new ka keyword h jo constructor banany k liye use hota h

function Student(name, className, roll, phone) {
    this.studentName = name;
    this.className = className;
    this.roll = roll;
    this.phone = phone
}
var student1 = new Student('Ghous', 'Web', 123, 123456)
var student2 = new Student('Ali', 'Web', 321, 123456)
var student3 = new Student('Basit', 'Web', 678, 123456)
console.log(student1, student2, student3)


























