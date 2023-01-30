//Find length of string without using inbuilt string method
// String
// Given a string S, find the length of S without using an inbuilt string method. 

// Input 
//     Codezinger University 

// Output 
//     21 

// Assume that, 

// The length of string S is within the range [0 to 10000].
// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();    
// });

// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

function solution(s) {
  let len=0;
    while(s[len]!==undefined){
        len++
    }
    return len;
}
function main() {
    var s = String(readLine());

    var res = solution(s);
    console.log(res);
}