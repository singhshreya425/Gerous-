// Display the product of array elements
// Array
// Given an array of integers, write a program to display the product of array elements.
// Input:
//     6
//     1 2 3 4 5 6
//     where:
// First line represents the number of elements in the array.
// Second line represents the elements in the array.
// Output:
//     720
// Explanation: Product of elements in the array: 1*2*3*4*5*6 = 720.
//SOLUTION->
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

function solution(a, arr) {
    multi = 1;
    for (let i = 0; i < arr.length; i++) {
        multi = multi * arr[i]
    }
    return multi
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(" ").map(Number)

    var res = solution(a, arr);
    console.log(res);
}

