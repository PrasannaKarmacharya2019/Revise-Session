// function myFunction() {
//     document.write('Hi this is a paragraph in javascript');
// }


// myFunction();
// console.log(typeof myFunction);





// let num1=document.getElementById('num1').value;
// let num2=document.getElementById('num2').value;


// function sum(num1,num2)
// {
//     return num1+num2;

// }
// let button=document.querySelector('button')
// button.addEventListener('click',function(){
//     let result=sum(num1,num2);
//     document.getElementById('result').innerHTML=sum.value;
// })



const Student=['Prasanna', 'Kumar', 'S', 22, 'Bangalore'];

Student.map((item,index)=>{
    console.log(`The value of ${index} is ${item}`);
})