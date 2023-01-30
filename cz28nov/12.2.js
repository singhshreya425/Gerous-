// Replace every element with its previous element
// Array

// Given an array A of integers, write a program to replace each element in the array by the previous element. Replace the first element by -1.

 

// Input:

//     4

//     1 2 3 4

    

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
 

// Output:

//     -1 1 2 3

 

// Explanation: Every element A[i] is replaced by A[i-1]. And the first element will be -1, as the first element doesn't have any previous element.
//SOLUTION->>
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function solution(a,arr) {
 for(let i=a-1;i>0;i--){
     arr[i]=arr[i-1]
 }
    arr[0]=-1
    return arr.join(" ")
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(" ").map(Number)

    var res = solution(a,arr);
    console.log(res);
}