let arr = ["h" ,"e","l" , "l" ,"0"];

//function to reverse a string
function reverseString(arr){
    let length = arr.length;
    let halfLength = Math.floor(length/2)
    console.log(halfLength)
    for(let i = 0; i< halfLength ; i++){
        let temp = arr[i]
        arr[i] = arr[length -1-i];
        arr[length -1 -i] = temp;

    }
    return arr;

}

console.log(reverseString(arr))