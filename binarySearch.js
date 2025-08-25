let arr = [34,55,66,72,86,99,123,890,13456] //need to sort first it is already sorted 
//algorithm
//finding the mid of the array if searched key is eaqual to the element present on the index then return ;
//if not then finding key is less than the element present at the mid then we make a loop for the same on the left side of the array
//if key is greater than the element present at the mid we make a loop towards the right side of the array and further finding the mid and continue until reach the key
let start =0;
let end = arr.length -1;
let k = 99

function binarySearch(arr, start, end){
    
    while(start<= end){
        let mid = Math.floor((end + start)/2);
        if(arr[mid] === k){
            return mid;
        }
        if(k < arr[mid]){
            end = mid -1;
        }else if(k > arr[mid]){
            start = mid +1;
        }
    }
    return -1;

}
console.log(binarySearch(arr, start, end));
