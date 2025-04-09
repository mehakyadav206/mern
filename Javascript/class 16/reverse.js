//19 march
 let arr =  [1,2,3,4,5];
 let Rarr=[];
for (let index = arr.length-1; index >=0; index--) {
    Rarr.push(arr[index]);
}
console.log(Rarr);

let arr1 = [1,2,3,4,5];
let arr2 = [3,5,7,6,1];

let res = arr1.filter((num)=>arr2.includes(num));
console.log(res);

 let arr3 = [1,2,3,2,4,3,5,6];
 let res2 = arr3.reduce((acc,num)=>{
    if(!acc.includes(num)){
        acc.push(num);
    }
    return acc;
 },[])
 console.log(res2);