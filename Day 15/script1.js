
 const numbers= [2,3,5,7,88,77,-100]

const checkPrimes=(num)=>{
numbers.map((num)=>{
    if(num===null || num===undefined){
        return;
    }
    else if(num===1||num===2||num===0){
        document.getElementById('output').innerHTML=`${num} is not prime`;
        console.log(`${num} is not prime`);
            }
else if(num<0)
{
    document.getElementById('output').innerHTML=`${num} is negative`;
    console.log(`${num} is negative`);
    }
else {
    for (let i = 2; i < num; i++) {
        if (num% i === 0) 
            {
        document.getElementById('output').innerHTML=`${num} is not a prime.`;
                console.log(`${num} is not a prime.`);
        return;
    }
}
    document.getElementById('output').innerHTML=`${num} is a prime`;
console.log(`${num} is a prime`);
}
})}


checkPrimes(numbers);
  



  