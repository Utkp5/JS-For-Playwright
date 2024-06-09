// Q1 Find second largest and smallest no. from Array.

var arr = [25,75,84,52,46,13,63,26,59,8,10,25]

console.log("Array length : " + arr.length);

//below sort() method we have used to find the solution....
// here a-b means sorting in ascending order and b-a means desending order

arr.sort(function(a,b){

    return a-b;

});

sec_small = arr[1];
sec_larg = arr[arr.length-2];

console.log(" " + arr + " ");
console.log("============Second largest  No. is : " +sec_larg);
console.log("============Second Smallest No. is : " +sec_small);