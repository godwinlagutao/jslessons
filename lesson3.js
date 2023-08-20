const last = function (numArray, n){
    
//if n is undefined return, last element of array
if (n === undefined){
    return numArray.pop();
}
//if n is less than numArray, return 'n' last elements of array
if(n < numArray.length){
    return numArray.slice(-n);
}
//if n is more than numArray, return array
if(n > numArray.length){
    return numArray;
}

}

console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));
//Expected Output : 
//-2 
//[9, 0, -2] 
//[7, 9, 0, -2]
