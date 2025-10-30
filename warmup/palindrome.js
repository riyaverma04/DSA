//palindrome function
function isPalindrome(num){
    let n = num;
    let rem ;
    let reve= 0;
    while(n>0){
        rem = n% 10;
        reve = (10* reve) + rem;
        n=Math.floor(n/10);
    }
    if(num === reve){
        return "palindrome"
    }else{
        return "not palindrome"
    }
}

console.log(isPalindrome(121))







function reversArray (s){
     let len = s.length
    let arr = [];
    let str;
    for(let i = 0; i< len; i++){
        str = s[(len-1) - i];
        arr.push(str); 





    }
    return arr;

}

let s = ["h" ,"e","l" , "l" ,"0"]
console.log(reversArray(s))