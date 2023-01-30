// Separate individual characters of string
// Tags:	String
// Given a string S, separate the individual characters from the string.

 

// Input:

//     Hello

   

//     where:

// First line represents the input string S
 

// Output:

//     H e l l o

 

// Assumptions:

// Length of the string S can be 0 to 10000
function solution(a) {
    let b = ""
  for(let i=0;i<a.length;i++){
      b+=(a.charAt(i)+" ")
  }
    return b
    //return a.join(" ")
}

function main() {
    var a = String(readLine())//.split("");

    var res = solution(a);
    console.log(res);
}
//------------------------------------------------
let str = "Hello";
let result = str.split("").join(" ");
console.log(result);
