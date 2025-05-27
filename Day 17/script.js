let array=[1,2,3,4,5,6,7,8,9,10];
array.push({firstName:'John', lastName:'Doe'});
console.log(array);
array.pop();
console.log(array);
const abc=array.slice(1,3);
console.log(abc);
array.unshift({firstName:'Jane', lastName:'Doe'});
console.log(array);
array.shift();
console.log(array);
let str=array.join('-');
console.log("array point")
console.log(str);
array.reverse();    
console.log(array);


