// Remove duplicate characters
// Tags:	String
// Given a string S, remove the repeated characters in the string

 

// Input:

//     Hello World

   

//     where:

// First line represents the input string
 

// Output:

//     Helo Wrd

 

// Assumptions:

// Length of the string S can be 0 to 10000
// Character comparisons will be case-sensitive.
function solution(s) {
    const result = Array.from(new Set(s)).join("")
    return result
   }
   
   
   function main() {
       var s = String(readLine());
   
       var res = solution(s);
       console.log(res);
   }
   
   