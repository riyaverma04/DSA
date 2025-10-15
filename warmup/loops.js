//write a function that searches for an element in an array and returns the index, if the element is not present then just return -1
let arr = [4,2,0,10,8,30];
function searchElement(element,arr){
    for(let i = 0; i<arr.length; i++){
        if(element === arr[i]){
         return i;   
        }
    }
    return -1 
}

console.log(searchElement(30,arr))


//write a funciton that reurns the number of negative numbers in an array

let arr2 = [2,-9, 17, 0 , 1,-10, -4, 8]
function findNegativeNumberInArray(arr){
    let count = 0;
    for(let i= 0; i<arr.length; i++){
        if(arr[i]<0){
            count++;

        }
    }
    return count;
}

console.log(findNegativeNumberInArray(arr2))





//write a function that returns the largest number in an array
let arr3 = [5,0,7,10,8,17,1]
function findLargestNumber(arr){
    let largestNumber = -Infinity ;
    let secondLargestNumber = -Infinity;
    for(let i = 0; i<arr.length; i++){
        if(largestNumber < arr[i]){
            secondLargestNumber = largestNumber;
            largestNumber = arr[i]
        }else if(arr[i] > secondLargestNumber){
            secondLargestNumber= arr[i]
        }
            

    }
    // return largestNumber;
    return secondLargestNumber

}

console.log("secondLargestNumber: " ,findLargestNumber(arr3))
