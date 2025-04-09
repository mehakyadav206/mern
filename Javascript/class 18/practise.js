//26 march
//q1 - Find the largest number in an array
// let arr = [23,40,19,46,33,200];
// function largestNum (arr){
//     return arr.reduce((acc,num)=>{
//     return num>acc ? num : acc;
// } ,arr[0]);
// }
// console.log(largestNum (arr));


//q2 - Write a function to count the occurrences of a letter in a string.
// let word = "MehakYadav";

// function findOcc(word) {
//   let countLetter = {};

//   for (let letter of word) {
//     // countLetter[letter] = countLetter[letter] ? countLetter[letter] + 1 : 1;
//     countLetter[letter] = (countLetter[letter] || 0) + 1;
//   }

//   return countLetter;
// }

// const res = findOcc(word);
// console.log(res);

//q3 - Reverse a given string
// let str = "Hello";
// let reverseStr = "";
// for(let i = str.length; i > 0; i--){
//     reverseStr += str[i-1]; 
// }
// console.log(reverseStr);

//q4 - Write a function to remove duplicates from an array
// let arr1 = [1,4,5,3,4,2,1,6,3];
// function removeDupli (arr1){
//     return arr1.reduce((acc,num)=>{
//         if(!acc.includes(num)){
//             acc.push(num);
//         }
//         return acc;
//     },arr1[0]);
// }
// console.log(removeDupli(arr1));


//q5 - Find the factorial of a number
// let num = 5;
// let fact = 1;
// function numFact(num){
//     for(let i = 1; i <=num; i++){
//         fact = fact * i;
//     }
//     return fact;
// }
// console.log(numFact(num));


//q6 - Check if an object have a specific property
//  let obj ={
//     name : "Mehak",
//     age : 19,
//     sem : 4,
//     course:"BCA"
//  };
//  console.log(obj);
//  if(!obj.hasOwnProperty("marks")){
//     console.log(true);
//  } 


//q7 - Find the second largest number in an array
// let arr4 = [34,56,67,32,11,9];
// let arr5 = arr4.sort((a,b)=>a-b);
// function secondLar (arr4){
//     return arr5[arr5.length - 2];
// }
// console.log(secondLar(arr5));


//q8 - Convert the first letter of each word in a sentence to uppercase.
// function upCase(str){
//     let arr = str.split(" ");
//     return arr.map((w) => {
//        return  w[0].toUpperCase() + w.slice(1)}).join(" ");
    
// }
// let str1 = upCase("the weather is so soothing and calm");
// console.log(str1);


//q9 - Find the sum of all even numbers in an array
// let arr2 = [4,7,9,5,6,2,10,3,1];
// let sum = 0;
// function evenNum (arr2) {
//     return arr2.filter((num)=> num%2 == 0);
// }
// console.log(evenNum(arr2));
// sum = evenNum(arr2).reduce((acc,num)=>acc+num);
// console.log(sum);


//q10 - Sort an array of numbers in ascending order
// let array = [34,29,56,18,51];
// array.sort((a,b)=>a-b);
// console.log(array);


//q11 - Count the number of vowels in a string.
// let str1 = "MehakYadav";
// let vowels = "aeiouAEIOU";
// let count = 0;

// for(let char of str1){
//     if(vowels.includes(char)){
//         count++;
//     }
// }
// console.log(count);


//q12 - Check if all the elements in an array are positive
// let arr3 = [2,4,5,-6,7];
// function pos(arr3){

//    return arr3.every((num)=>num >= 0);
// }
// console.log(pos(arr3));


//q13 - Merge two objects
// let obj1 = {
//     name : "Bhavna",
//     age : 18
// };
// let obj2 = {
//     course : "BCA",
//     sem : 4
// };
// let obj3 = {
//     ...obj1,...obj2
// };
// console.log(obj3);


//q14 - Convert an object into array of key-value pairs
// let obj4 = {
//     Firstname : "Anjali",
//     Age : 20,
//     Course : "BBA",
//     Sem : 4
// };
// let arr5 = Object.entries(obj4);
// console.log(arr5);