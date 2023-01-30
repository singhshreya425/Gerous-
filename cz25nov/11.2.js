//Remove all occurrences of word
// String

// Given a string S and a word W, remove all the occurrences of the word W in the input string S.

 

// Input:

//     hello world hello

//     hello

   

//     where:

// First line represents the input string S
// Second line represents the word to be removed W.
 

// Output:

//      world

 

// Explanation:

// String after removing all occurrences of hello becomes " world ".
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

function solution(s,w) {
 let res=""
 for(let i=0; i<s.length; i++){
     if(s[i]!=w){
         res+=s[i]+"  "
     }
 }
    return res
}


function main() {
    var s = String(readLine()).split(" ");
    var w=String(readLine());

    var res = solution(s,w);
    console.log(res);
}