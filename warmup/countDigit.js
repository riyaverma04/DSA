//count the digit in a number
function countDigit (num){
    let count = 0;
    
    n = Math.abs(num)
   
    while(n> 0){
       n = Math.floor(n/10)
        count ++;
    }
    return count;
}
let num= -2345;
console.log(countDigit(num))   