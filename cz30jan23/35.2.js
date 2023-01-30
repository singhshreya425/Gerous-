// Second most frequent character
// Tags:	String
// Given a string S, Find the second most frequent character in S.

 

// Input:

//     aaabbcccc

 

//     where:

// First line represents input string S
 

// Output:

//     a
function solution(s) {
    //Write your solution here
      let charcount={};
      for(let char of s){
          charcount[char]=(charcount[char]||0)+1;
      }
      let sortedcharcount=Object.entries(charcount).sort((a,b)=>b[1]-a[1]);
      return sortedcharcount[1][0];
  }
  
  
  function main() {
      var s = (readLine());
  
      var res = solution(s);
      console.log(res);
  }
  
//-----------------------------------------------
function secondMostFrequent(s) {
    let charCount = {};
    for (let char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    let sortedCharCount = Object.entries(charCount).sort((a, b) => b[1] - a[1]);
  
    return sortedCharCount[1][0];
  }
  
  console.log(secondMostFrequent("aaabbcccc")); // Output: "a"
  