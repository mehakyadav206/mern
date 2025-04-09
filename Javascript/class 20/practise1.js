//3 April
//q1 - Find the length of the longest word in a sentence.
let str = "The weather is so soothing and calm."


//q3 - Find the smallest number in an array.
let arr = [23,40,19,46,33,200];
function smallestNum (arr){
    return arr.reduce((acc,num)=>{
    return num<acc ? num : acc;
} ,arr[0]);
}
console.log(smallestNum (arr));

//q7 - Find the sum of all odd numbers in an array.
let arr2 = [4,7,9,5,6,2,10,3,1];
let sum = 0;
function oddNum (arr2) {
    return arr2.filter((num)=> num%2 !== 0);
}
console.log(oddNum(arr2));
sum = oddNum(arr2).reduce((acc,num)=>acc+num);
console.log(sum);

//q9 - Write a function to check if a string starts with a specific character.

