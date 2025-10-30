//buy and sell problem


 

// function maxProfit(arr){
//     let lessStock = arr[0];
//     let profit =0;
//     let highestProfit =  0;
   
//     for(let i =0 ; i<arr.length; i++ ){
//         if(arr[i] < lessStock){
//             lessStock = arr[i]
           
//         }
//         for(let j = i+1; j< arr.length; j++){
//            profit =  arr[j] - lessStock;
//            if(highestProfit < profit){
//             highestProfit = profit;
//            }
//         }
//     }
//     return highestProfit;



// }

// console.log(maxProfit(arr))


//the complexity of the above code is 0(n^2)
//hence we will try to make time complexity less.

let arr = [7,1,5,3,6,4];

function maxProfit(arr){
    // let profit=0;
    let minStock=arr[0];
    let highestProfit= 0;
    for(let i = 0; i<arr.length ; i++){
        if(minStock > arr[i]){
            minStock = arr[i];
        }


        //in this function we are setting minStock to the lowest value and then checking for the profit from the loop and if profit is higher than the highestProfit then we set highestProfit to profit. using one loop we are able to achieve the result as well as the time complexity is 0(n    )
       




        //here profit was 
        //profit = arr[i] - minStock
        //changing profit calculation directly in if condition to reduce one variable


        //if(highestProfit < profit ){
        

        if(highestProfit < ( arr[i] - minStock)){

            //highestProfit =  profit; 
            highestProfit =  arr[i] - minStock; 
        }
    }
   
    return highestProfit;

}
console.log(maxProfit(arr))
