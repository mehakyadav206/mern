//18 march
arr = [1,2,3,4,5];
let sum = arr.reduce((acc,num)=>acc+num);
console.log(sum);

arr1 =['M','e','h','a','k'];
let sum1 = arr1.reduce((acc,num)=>acc+num,'');
console.log(sum1);

arr2 =[-1,2,3,4,5];
let res = arr2.every((num)=>num>0);
console.log(res);

arr3 =[-1,-2,-3,-4,-5];
let res1 = arr3.some((num)=>num>0);
console.log(res1);

arr4 =[1,2,3,4,5];
let res2 = arr4.find((num)=>num>4);
console.log(res2);

arr5 =[1,2,3,4,5];
let res3 = arr5.includes(7);
console.log(res3);

 let arr6 =['m','e','3','a'];
 arr6.sort();
console.log(arr6);

arr7 =[1,20,35,5];
arr7.sort((a,b)=>a-b);
console.log(arr7);

let arr8 =['A','c','Z','b'];
arr8.sort((a,b)=>a.localeCompare(b));
console.log(arr8);