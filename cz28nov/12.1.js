// Number of unique pairs in an array
// Array

// Given an array of N elements, find all the unique pairs that can be formed using the elements of a given array.

 

// Input:

//     3

//     1 1 2

 

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
 

// Output:

//     4

 

// Explanation: (1, 1) (1, 2) (2, 1) and (2, 2) are all the unique pairs, their count is 4, hence the output 4.
// SOLUTION-->>
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
 let i, j, c=[];
    for(let i=0; i<a; i++){
        for(let j=0;j<a;j++){
            let pair = (arr[i],arr[j])
            if(!c.includes(pair)){
                c.push(pair)
            }
        }
    }
    let count = c.length
    return Math.pow(count,2)
}


function main() {
    var a = parseInt(readLine());
    var arr= readLine().split(" ").map(Number)

    var res = solution(a,arr);
    console.log(res);
}