//inserting a elment in a array



let addBtn = document.getElementById('takeInput');
let searchBtn =document.getElementById('search-btn')

addBtn.addEventListener('click',insert)


 let arr = [23,53,63,62,63,77,89];
 let n = arr.length;
 console.log(arr)
function insert(){
    const inputIndex = document.getElementById('input-index');
const inputValue = document.getElementById('input-value');

    console.log(inputIndex)
   


for(let i = arr.length; i > inputIndex.value; i--) {
    
   arr[i] = arr[i-1];


}
arr[inputIndex.value] = inputValue.value;

console.log("array after insertion : " , arr);

}
let deleteBtn = document.getElementById('del-btn')
const deletion = ()=>{
    let deleteIndex = parseInt(document.getElementById('del-index').value);
    for(let i = deleteIndex; i<arr.length-1; i++){
        arr[i] = arr[i+1];
        
    }
    arr.length = n-1;
    console.log("arr after deletion: " , arr)
}
deleteBtn.addEventListener('click', deletion)



const searchIndex = ()=>{
    let searchValue = document.getElementById('search-value').value;
   
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === parseInt(searchValue)){
            console.log(i)
        }
    }
    //default method to search from the array is 
console.log("finding with default value : ",arr.indexOf(parseInt(searchValue)))

    
}
searchBtn.addEventListener('click',searchIndex)

