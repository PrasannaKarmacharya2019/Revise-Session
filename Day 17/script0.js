let reverseString =" ";
let array=[1,2,3,4,5,6,7,8,9,10];
console.log(typeof array);
const string= array.join(' ');

let strings="abc";
for(let i=string.length-1; i>=0; i--){
 
    reverseString += string[i];
}
console.log(reverseString);




