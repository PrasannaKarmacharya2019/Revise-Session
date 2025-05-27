let input=prompt("Enter a string:");
let array=[];
for (let i = 0; i < input.length; i++) {
    array.push(input[i]);
}
const nums= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const checkOddEven=(num)=>
{
    for (let i = 0; i < num.length; i++) {
        if(num[i]===null || num[i]===undefined)
            {
            return;
        }
        else if(num[i]===" " ){
            console.log(`${num[i]} is empty`);
        }
        else if(num[i]%2===0){
            console.log(`${num[i]} is even`);
        }
        else{
            console.log(`${num[i]} is odd`);
        }
    }
}

checkOddEven(nums);
console.log("Let's go again");
checkOddEven(array);
