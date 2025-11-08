let arr = [2];

function sum(n){
    if(n< 0) return 0;
    let add =  arr[n] + sum(n-1);
    return add;

}
console.log(sum(arr.length-1))


//sum of all odd numbers in an array
// let arr1 = [1,2,3,4,5,6,7,8,9];
// function sumOfOdd(n){
//     if(n< 0) return 0;
//     if(arr1[n] %2 != 0){
//         return arr1[n] + sumOfOdd(n-1)

//     }else{
//         return 0 + sumOfOdd(n-1)
//     }
// }
// console.log("adding odd" , sumOfOdd(arr1.length -1));


let arr1 = [1,2,3,4,5,6,7,8,9];
function sumOfOdd(n){
    let isOdd = arr1[n] %2 != 0;

    if(n=== 0) return isOdd ? arr1[n] : 0 ;
    if(isOdd){
        return arr1[n] + sumOfOdd(n-1)

    }else{
        return 0 + sumOfOdd(n-1)
    }
}
console.log("adding odd" , sumOfOdd(arr1.length -1));






//factorial

function fac(n){
    if(n===0) return 1;
    return n * fac(n-1);

}
console.log("factorial" , fac(5))





//power of a two
function powerOfTwo(n){
    if(n===1) return "yes";
    if(n<1) return 'no';
    n= n/2;
    return powerOfTwo(n);
    




}

console.log("power of two", powerOfTwo(64))





//fibonacci number
function fib(n){
   if(n <= 1) return n;
   return fib(n-1)+ fib(n-2);



}
console.log("fib" , fib(5));







