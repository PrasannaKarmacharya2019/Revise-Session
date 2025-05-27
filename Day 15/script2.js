const buttonClick=document.getElementById("btn-check-prime")
buttonClick.addEventListener("click",(event)=>{
event.preventDefault();
const number=document.getElementById("prime-number").value
checkPrimes(number);
})
const checkPrimes=(num)=>{

    if(num===null || num===undefined){
        return;
    }
    else if(num===1||num===2||num===0){
        document.getElementById('output').value=`${num} is not prime`;
        console.log(`${num} is not prime`);
            }
else if(num<0)
{
    document.getElementById('output').value=`${num} is negative`;
    console.log(`${num} is negative`);
    }
else {
    for (let i = 2; i < num; i++) {
        if (num% i === 0) 
            {
        document.getElementById('output').value=`${num} is not a prime.`;
                console.log(`${num} is not a prime.`);
        return;
    }
}
    document.getElementById('output').value=`${num} is a prime`;
console.log(`${num} is a prime`);
}
}


