// //Largest sum of contiguous sub-array
// Tags:	Array
// Given an array of integers A, find the largest sum of contiguous elements in sub-array of an array.

// Input 
//     5 
//     -20 -12 42 -10 25
//     Where, 

// The first line represents the size of an array. 
// The second line represents array elements.
 
// Output 
//     57 
// Here largest sub-array sum = 42 + (-10) + 25 = 57.
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
function checktype(value){
    
}

function solution(num,a) {
  //Write your solution here
    let currSum=0;
    let max=a[0]
    
    for(let i=0;i<num;i++){
        currSum=currSum+a[i]
        if(currSum>max){
            max=currSum
        }if(currSum<0){
            currSum=0
        }
    }
    return max
}


function main() {
    var num = parseInt(readLine());
    var a = readLine().split(" ").map(Number)

    var res = solution(num,a);
    console.log(res);
}

