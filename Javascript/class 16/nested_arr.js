//21 march
//Sum of Nested Arrays

//Method 1
// function sumNestedArrays(arr){
//     let sum = 0;

//     for(let i = 0; i < arr.length;i++){
//         if(Array.isArray(arr[i])){
//             sum += sumNestedArrays(arr[i]);
//         }else{
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// const nestedArray = [1,2,[3,4,5],[6,[7,8]]];
// console.log(sumNestedArrays(nestedArray));

//24 march
//Method 2
let arr = [1,2,3,[4,5],6,[7,[8,9]]];
function sumNested(arr){
    return arr.reduce((sum,val)=>{
    if(Array.isArray(val)){
        return sum + sumNested(val);
    }else{
        return sum + val;
    }},0)
}
console.log(sumNested(arr));