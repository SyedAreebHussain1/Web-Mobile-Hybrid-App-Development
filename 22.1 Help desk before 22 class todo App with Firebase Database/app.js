var list = document.getElementById("list")

// On realtime data la k dyta ha On k sth hum use karty h child_added
// firebase se data get kar rahy h ye
// jab koi child_added ho tou function call kardou function(data)  
firebase.database().ref("todos").on("child_added", function (data) {

    // console.log(data.val())

    // // create li tag with txt node
    var li = document.createElement("li")
    var liTxt = document.createTextNode(data.val().value)
    li.appendChild(liTxt)

    // create delete Btn
    var deleteBtn = document.createElement("button")
    var deleteTxt = document.createTextNode("DELETE")
    deleteBtn.setAttribute("id", data.val().key)
    deleteBtn.setAttribute("onclick", "deleteValue(this)")
    deleteBtn.appendChild(deleteTxt)

    // create edit btn
    var editBtn = document.createElement("button")
    var editTxt = document.createTextNode("EDIT")
    editBtn.appendChild(editTxt)
    editBtn.setAttribute("id", data.val().key)
    editBtn.setAttribute("onclick", "editVAlue(this)")

    li.appendChild(deleteBtn)
    li.appendChild(editBtn)

    list.appendChild(li)
})

function addTodo() {
    var todo_item = document.getElementById("todo-item");
    var key = firebase.database().ref("todos").push().key;
    // console.log(key)
    // object
    var todo = {
        value: todo_item.value,
        key: key
    }
    // firebase.database may save karwa dunga
    firebase.database().ref("todos").child(key).set(todo)

    todo_item.value = ""
}
function editVAlue(o) {
    var val = prompt("EDIT TODO", o.parentNode.firstChild.nodeValue)
    var editTodo = {
        value: val,
        key: o.id
    }
    firebase.database().ref("todos").child(o.id).set(editTodo)
    o.parentNode.firstChild.nodeValue = val
}
function deleteValue(e) {
    firebase.database().ref("todos").child(e.id).remove()
    e.parentNode.remove()
}
function deleteAllBtn() {
    firebase.database().ref("todos").remove()
    list.innerHTML = ""
}































































































































