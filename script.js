let newArray = []
let arrayOfTodos = [
    {
    "userId": 114,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": " aut autem",
    "completed": false
}]


const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const press = () => {


    
    let k = document.getElementById("user").value
    console.log(k)
  
    const result = arrayOfTodos.filter((word) => word.id == k)
    console.log(result[0].title)
    const item = document.getElementById("todo-list")
    let newObject = document.createElement("li")
    newObject.setAttribute("id", "list")
    let text = document.createTextNode(result[0].title)
    newObject.appendChild(text)
    item.appendChild(newObject)
    newArray.push(result[0])
    console.log(newArray)
    // console.log(result)
  
}

const del = () => {
    var d = document.getElementsByTagName("LI")
    console.log(d);
    for (let i = d.length - 1; i >= 0; i--)
    {
        d[i].parentNode.removeChild(d[i]);
    }
    }

const com = () => {
    
    var d = document.getElementsByTagName("LI")
    console.log(d);
    for (let i = d.length - 1; i >= 0; i--)
    {
        d[i].parentNode.removeChild(d[i]);
    }

    const newResult = newArray.filter ((word) => word.completed == true)
    console.log(newResult)
    const item = document.getElementById("todo-list")
    let newObject = document.createElement("li")
    let text = document.createTextNode(newResult[0].title)
    newObject.appendChild(text)
    item.appendChild(newObject)

    // let k = document.getElementById("list").innerText
    // console.log(k)
    
   // var f = document.getElementsByTagName("LI")

    // for (let i = f.length - 1; i >= 0; i--)
    // {
    //     if (arrayOfTodos)
    //     f[i].parentNode.removeChild(f[i]);
    // }
    }

const uncom = () => {
    
    var d = document.getElementsByTagName("LI")
    console.log(d);
    for (let i = d.length - 1; i >= 0; i--)
    {
         d[i].parentNode.removeChild(d[i]);
    }
        
    const newResult = newArray.filter ((word) => word.completed == false)
    console.log(newResult)
    const item = document.getElementById("todo-list")
    let newObject = document.createElement("li")
    let text = document.createTextNode(newResult[0].title)
    newObject.appendChild(text)
    item.appendChild(newObject)
    
        // let k = document.getElementById("list").innerText
        // console.log(k)
        
       // var f = document.getElementsByTagName("LI")
    
        // for (let i = f.length - 1; i >= 0; i--)
        // {
        //     if (arrayOfTodos)
        //     f[i].parentNode.removeChild(f[i]);
        // }
        }


const populateTodos = () => {
    for (let i = 0;i<arrayOfTodos.length;i++){
    let a  = arrayOfTodos[i].title
    const item = document.getElementById("todo-list")
    let newObject = document.createElement("li")
    let text = document.createTextNode(a)
    newObject.appendChild(text)
    item.appendChild(newObject)
    console.log(newObject)
    console.log(a)
    console.log(item)
}
}