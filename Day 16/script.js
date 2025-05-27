document.title = "My Web Page";


let headerTitle = document.getElementById('header-title');
headerTitle.className= "bg-success text-white";
headerTitle.setAttribute('title', 'abc')

console.log(headerTitle);

headerTitle.style.backgroundColor = 'blue';
headerTitle.style.color = 'white';
headerTitle.style.fontSize = '50px';
headerTitle.style.fontFamily = 'Arial, sans-serif';
 

// let students=document.getElementsByClassName('student');
let students = document.getElementsByTagName('h1');
console.log(students);
console.log(headerTitle);
for (let a of students) {
    a.style.color = 'red';
    a.style.fontSize = '20px';
    a.style.padding = '10px';
    a.style.margin = '5px';
}




// Query Selector
 getInputValue=()=>{
    

const value = document.getElementById('input-value').value

console.log(value);

}






const newDiv = document.createElement('div');
newDiv.className = 'bg-success text-white';
newDiv.id='new-div'
// newDiv.innerHTML='<h1> New DIV appended</h1>';
const headerTag = document.createElement('h1');
const data=document.createTextNode('This is a new div');
headerTag.appendChild(data);
newDiv.appendChild(data);
document.body.append(newDiv);


 
// Create a button element
const button = document.createElement('button');
button.textContent = 'Click Me';
let container = document.getElementById('container');
    container = document.createElement('div');
    container.id = 'container';
   
container.style.borderBlockColor = 'red'; 
container.style.borderBlockWidth = '5px';
container.style.borderBlockStyle = 'solid';

// Append the button inside the container
container.append(button);
 document.body.append(container);
// Set the newDiv background color to blue
newDiv.style.backgroundColor = 'blue';
