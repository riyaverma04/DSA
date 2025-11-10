// let arr = [2,4,6,7,7];
// let arr2 = [1,2,2,4];



// function mergeArr(arr, arr2){
//    let pointer1 , pointer2 =0;
//     let n = arr2.length ;
//     let m = arr.length ;
//     let arr3 = [];
//     for(let i = 0; i <  m+n; i++){
        
//         if(  (pointer1 < m  && arr[pointer1] < arr2[pointer2])){
//             arr3[i] = arr[pointer1];
//             pointer1++;
//         }else{
//             arr3[i] = arr2[pointer2];
//             pointer2++;
//         }
//     }
   

//    return arr3
    


// }


// console.log(mergeArr(arr, arr2))




let arr = [0,1,0,3,12];
function moveZeroes(arr){
    
    let p=0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i]!== 0 ){
            arr[p] = arr[i]

        p++;


        }
    }
    for(let i = p; i< arr.length; i++){
        arr[i] = 0;
    }
    return arr;

}
console.log(moveZeroes(arr))
