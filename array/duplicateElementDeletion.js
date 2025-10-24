let arr = [2,2,4,4,4,5,6,7,7,8,8,8,9];
function removeDuplicateElement (arr){
    let uniqueElement=0;
    let pointer=0 ;
    for(let i = 0; i<arr.length; i++){
       
        
        if(uniqueElement != arr[i]){
            console.log("inside loop ", i)
            uniqueElement = arr[i];
             arr[pointer] = uniqueElement;
             pointer++;
           
        }

    }
   
    return arr;

}
console.log("hey")

console.log(removeDuplicateElement(arr));