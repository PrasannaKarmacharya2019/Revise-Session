let people=[
    {name:"Alice",age:19},
    {name:"Bob",age:30},
    {name:"Charlie",age:25},
    {name:"David",age:30},
    {name:"Eve",age:25},
    {name:"Frank",age:30},
    {name:"Grace",age:25},
    {name:"Heidi",age:30},
    {name:"Ivan",age:25},
];
let groupedByAge = people.reduce((acc, person) => {
    if (!acc[person.age]) {
        acc[person.age] = [];
    }
    acc[person.age].push(person);
    return acc;
}, {});

console.log(groupedByAge);

console.log('------------------Method 2------------------');
// Method 2
const groupedData = people.reduce((acc, person) => {
    let {age} = person;
    if (acc[age]===undefined) {
        acc[age] = [];
    }
    acc[age].push(person);
    return acc; 
}
, {});;
console.log(groupedData);

