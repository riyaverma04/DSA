let arr = [1,2,3,4,5];
function linearSearching(n,arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == n) return i;
    }
    //if element doesnot present in the array 
    return -1;


}
console.log(linearSearching(5, arr))



//binary search
let arr2 = [1,2,3,4,5,6,7,8,9,10];
function binarySearch(arr, target){
    let l = 0;
    let r = arr.length -1;
    
    while(r>=l){
        let m = Math.floor((l+r)/2)
        
        if(arr[m] == target) return m;
        else if(target < arr[m]){
            r = m-1;

        }else{
            l = m+1;
        }
    }
    return -1;

    //time complexity of the binary search is log2 n lorigthmic
    //and space complexity of the binary search is o(n) constant

}
console.log('binary search' , binarySearch(arr2, 9))




//bubble sort
let arr3 = [5,3,8,4,2];
function bubble(arr){
    let n = arr.length-1;
    
    
    let temp ;
    for(let i = 0; i< n; i++){
        for(let j = 0 ; j < n - i ; j++){
           if(arr[j] > arr[j+1]){
             temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
           }

        }
    }
   
    
    return arr;
}

console.log(bubble(arr3))






//slection sort
let arr4 = [4,25,12,22,11];
function selectionSort(arr){
    let n = arr.length;
    for(let i = 0; i< n-1; i++){
        let min =i;
        let temp ;
        
        for(let j = i+1; j< n; j++){
            if(arr[min] > arr[j]){
               min = j;
            }
            
            
        }
        console.log("min", min)
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;

}

console.log("selection sorting : ", selectionSort(arr4))




//insertion sort 
let arr5 = [12,11,13,5,6];
function insertionSort (arr) {
    for(let i = 1; i< arr.length; i++){
        let elem = arr[i];
        console.log("element" , elem)
       let j = i-1;
        

        // for(let j = i; j >= 0;j--){
        //     if(arr[j]> arr[pointer]){
        //         console.log("j" , arr[j])
        //         //shift 1
        //         arr[j+1] = arr[j]
        //     }else{
        //         voidPosition = j;

                
        //     }
        // }

        while(j>= 0 && arr[j]> elem){
            arr[j+1] = arr[j];
            j--;
        }
       
        arr[j+1] = elem;

    }
   
    
    return arr;

}
   
console.log("insertion sort" , insertionSort(arr5))