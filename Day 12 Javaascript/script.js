document.write('hello world')
console.log('hello world')
console.log(window)

// let x=10;
// let y=12;
// const sum=x+y;
// console.log(sum)
// const sub=x-y;
// console.log(sub)




    
    let student={ name:'John', age:14, isStudying:true,    subjects:['math', 'english', 'science'], marks: [2,3,6,8,10,12,14,16]}
    console.log(student);
    console.log(student.marks.length);    // Number of marks

function add(x,y){
    let sum=x+y;
    console.log(sum);
}
     
add(20,30);

function sub(x,y){
    let sub=x-y;
    console.log(sub);
}
sub(20,"ram");




// { quotient: 105, divisor: 10, remainder: 5 }
function getDivisionResult(dividend, divisor) {
    let quotient = dividend/divisor;
    let remainder = dividend%divisor;
    let object = {
        quotient: quotient,
        divisor: divisor,
        remainder: remainder
    };
    return object
}

let result = getDivisionResult(105, 10);
console.log(result); 



// { quotient: 105, divisor: 10, remainder: 5 }
function divide(a,b){
    let quo=a/b;
    let rem=a%b;
    let obj={
        quotients: quo,
        divisor: b,
        remainder: rem
    }
    return obj;}
    let res=divide(105,10);
console.log(res);
