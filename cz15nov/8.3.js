// Count occurrences of word in a given string
// Given a string S and a word W, count the number of times the given word appears in the string.

 

// Input:

//     Hello World Hello

//     Hello    

   

//     where:

// First line represents the input string S
// Second line represents the word to be searched W
 

// Output:

//     2

 

// Assumptions:

// Length of the string S can be 0 to 10000
// Length of the word can be 0 to 10000
// Character comparisons will be case-sensitive.
function solution(s,w) {
    let count = 0;
       for(let i=0; i<s.length; i++){
           if(w==s[i])
               count++
       }
       return count;
   }
   
   
   function main() {
       var s = readLine().split(" ")
       var w =readLine()
   
       var res = solution(s,w);
       console.log(res);
   }
   
   