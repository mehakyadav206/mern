// function sayhello(){
//     console.log("Hello!!");
// }
// sayhello();

// function greet(msg){
//     console.log(msg);
// }
// greet("Hii");

// function greetings(name, msg = "take care"){
//     console.log(name,".",msg);
// }
// greetings("bhavna","good morning");
// greetings("mehak");

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(4,5));

// let res = sum(3,4);
// console.log(res);


// const mul = function(a,b){
//     return a*b;
// }
// const res = mul(3,5);
// console.log(res);

//arrow function

// const div = (a,b)=>{
//     return a/b;
// }
// const res = div(3,3);
// console.log(res);

// const scope = ()=>{
//     if (true){
//         var x=10;
//         let y=20;
//         console.log(y);
//     }
//     console.log(x);
// };
// scope();

let x=10;
const outer=()=>{
    const inner=()=>{
        console.log(x);
    };
    return inner;
}
const exc=outer();
exc();
