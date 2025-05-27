const dv=document.querySelector('.app');
dv.style.border='1px solid black';
dv.style.width='200px';
// Create a <ul> element
const ul = document.createElement('ul');

// Create a <li> element
const li = document.createElement('li');

// Create a text node
li.innerText='Hello, World!';



// Append the <li> to the <ul>
ul.append(li);

dv.append(ul);

