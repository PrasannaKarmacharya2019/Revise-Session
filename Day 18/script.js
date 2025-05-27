const array=[9,10,55,77,88];
console.log('For Each statement');
let forEachArray= array.forEach((value,index) => {
    console.log("forEachArray",value);      
    return value>60;
          
});
console.log("forEachArray",forEachArray);
console.log("Map Array");
let mapArray=array.map((value)=> {   
     
    return value+1;
   
});
console.log("mapArray",mapArray);
console.log("----------------------------------------")

console.log("After applying filter")
let filteredValue=  array.filter((value,index) => {
   console.log("value",value);
    return value>60;
});   
console.log("filtered value is:",filteredValue);


let peoples=[{name:"John",age:10,city:"New York"},
    {name:"Jane",age:25,city:"Los Angeles"},
    {name:"Mike",age:5,city:"Chicago"},
    {name:"Sara",age:28,town:"Miami"}];

let peopleWhoCanDrink=peoples.filter((peoples) => {
    return peoples.age>=21;
});
console.log("People who can drink",peopleWhoCanDrink);


console.log("Reduce method");
//reduce Methods
const numbers=[1,2,3,4,5];
let total=numbers.reduce((accumulator,currentValue) => {
    console.log("accumulator",accumulator);
    console.log("currentValue",currentValue);
    return accumulator+currentValue;
},'');
console.log("Total is:",total);



const string=["abc", "def", "ghi", "jkl"];
let tot=string.reduce((acc,currentVal) => {
    console.log("acc",acc);
    console.log("currentValue",currentVal);
    return acc+currentVal;
},'');
console.log("Concat string is:",tot);
//reduce method with object

console.log('Sorting array');
// sorting 
const num=[111,22,3,40,55];
num.sort((a,b) => {
    console.log("a",a);
    console.log("b",b);
    return a-b;
});
console.log("Sorted array is:",num);

