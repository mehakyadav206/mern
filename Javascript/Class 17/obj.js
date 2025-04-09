//24 march
let obj = {
    name :"Mehak",
    age : 19,
    year : 2,
    course : "BCA"
};
// console.log(obj.name);
// obj.marks=100;
// delete obj.year;

// Object.freeze(obj);
// console.log(obj);
// delete obj.age;
// console.log(obj);

if(!obj.hasOwnProperty("marks")){
    obj.marks = 100;
}
console.log(obj);

let arr = Object.keys(obj);
console.log(arr);
console.log(arr.length);