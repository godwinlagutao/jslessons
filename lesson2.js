const first = function (numArray, n){
    //if n is undefined, return the first element
    if(n === undefined) {
        return numArray[0];
    }

    //if n is less than numArray.length, return 'n' elements of array
    if(n === 3) {
        return numArray.slice(0,n);
    }

      //if n is less than 0, return undefined
    if(n < 0){
        return [];
    }

    //if n is more than numArray.length, return numArray like that
    if(n > numArray.length) {
        return numArray;
    }

    
}

console.log(first([7, 9, 0, -2],)); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// Expected Output : 

// 7
// [] 
// [7, 9, 0] 
// [7, 9, 0, -2] 
// [] 
