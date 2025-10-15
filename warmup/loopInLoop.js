// for(let i = 0 ; i<5 ; i++){
//     for(let j = 0; j<i ; j++){
//         console.log("i : "+ i + "  j : " + j)
//     }
// }
// for(let i = 5 ; i>0 ; i--){
//     for(let j = 0; j<i ; j++){
//         console.log("i : "+ i + "  j : " + j)
//     }
// }




//star pattern

//square pattern
// for(let i = 0; i<4; i++){
//     let row = " "
//     for(let j = 0 ; j<4; j++){
//         row = row + " * "
//     }
//     console.log(row)
// }

// for(let i = 0; i<4; i++){
//     let row = " "
//     for(let j = 0 ; j<=i; j++){
//         row = row + " * "
//     }
//     console.log(row)
// }



// for(let i = 0; i<5; i++){
//     let row = " "
//     for(let j = 0 ; j<5-i; j++){
//         row = row + (j+1)
//     }
//     console.log(row)
// }


let n = 5;
for(let i = 0; i< n ; i++){
    let row = " ";
    for(let j = 0; j<n-(i+1); j++){
        row = row + "  "
    }
    for(let k = 0; k< i+1; k++){
        row = row + "* "
    }
    console.log(row)
}



console.log("different pattern starts here")


for(let i = 0 ; i<6; i++){
    let row = " "
    for(let j = 0 ; j<= i ; j++){
        if(j %2 === 0){
            row = row + " " +1
        }else{
            row = row + " " + 0
        }
    }
    console.log(row )
}

console.log("other pattern starts here")
// for(let i = 0 ; i<6; i++){
//     let row = " "
//     for(let j = 0 ; j<= i ; j++){
//         if(() %2 === 0){
//             row = row + " " +1
//         }else{
//             row = row + " " + 0
//         }
//     }
//     console.log(row )
// }





let n1 = 5;
let toggle = 1; 
for(let i = 0 ; i<n1; i++){
    let row = " ";
    for(let j = 0; j<i+1; j++){
        row = row + toggle;
        if(toggle == 1){
            toggle = 0;
        }else{
            toggle = 1;
        }
    }
    console.log(row)
}