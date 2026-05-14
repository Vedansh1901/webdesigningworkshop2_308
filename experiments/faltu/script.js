let mixed = [1, "hello",{name: "Alice"}, true];
console.log(mixed[0]); // 1
console.log(mixed[1]); // "hello"
console.log(mixed[2].name); // "Alice"
console.log(mixed[3]); // true  
function greet()
{
    console.log("Hello, world");
}
greet();
let divide=function(a,b)
{
    return a/b;
}
console.log(divide(10,2)); // 5
let sayhi=()=>{
    console.log("Hi!");
}
sayhi();
let square=x =>x*x;
console.log(square(5)); // 25   
const greetuser=(name)=>{
    console.log('hello,${name}!');
}
let topstudents = students.filter(student => student.marks > 80);
console.log(topstudents);
let totalmarks = students.reduce((total, student) => total + student.marks, 0);