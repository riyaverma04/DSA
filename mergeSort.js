let arr = [34,63,62,73,12,33];
let start = 0;
let end = arr.length -1;


function mergeFun(arr, start, mid , end){
    let temp =[];
    let i = start;
    let j = mid +1;
    while(i <= mid && j <= end){
        if(arr[i] <= arr[j]){
            temp.push(arr[i]);
            i++;

        }else{
            temp.push(arr[j]);
            j++;
        }
    }
    while(i <= mid){
        temp.push(arr[i]);
        i++;
    }

    while(j <= end){
        temp.push(arr[j]);
        j++;
    }

    //transfering the array to the actual array
    for(index = 0; index <= temp.length-1; index++){
        arr[index+ start] = temp[index];
    }

}

function mergeSort(arr, start, end){
    if(start < end){
        let mid =  Math.floor((end + start)/2);
    mergeSort(arr, start, mid); //this is for the left from the mid arr
    mergeSort(arr, mid+1, end); //this is for the right form the mid arr
    mergeFun(arr,start, mid, end);
    }
}
mergeSort(arr, start, end);
console.log(arr)
