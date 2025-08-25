let arr1 = [23,56,89,34];
let arr2 = [3,67,2,8,0,1];
let arr3 = [];
//merging first array in arr3
for(let i = 0; i< arr1.length; i++){
    arr3.push(  arr1[i]);
}
//merging second array in arr3
for(let i = 0 ; i< arr2.length; i++){
    arr3[arr1.length + i] = arr2[i];
}
console.log(arr3)