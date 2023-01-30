// //Find substrings whose sum of ASCII value is divisible by K
// Tags:	String
// Given a string S and a number K, find the number of substrings of length K whose sum of ASCII value of characters is divisible by K.

// Input:

//     bcgabc

//     3

// where:
// First line represents the input string S
// Second line represents K
 
// Output:

//      2

// Explanation:

// Substring “bcg” has sum of ASCII values 300 and “abc” has sum of ASCII values 294 which are divisible by 3.
function solution(str,a) {
    //Write your solution here
      let n=str.length;
      let d=0;
      let count=0;
      for(let i=0;i<n;i++){
          d+=str[i].charCodeAt(0) }
      if(d%a==0)count++
      for(let i=a;i<n;i++){
          let las=str[i-a]
          d-=las.charCodeAt(0)
          if(d%a==0)count++
      }
      return count
  }
  
  
  function main() {
      var b=String(readLine())
      var a = parseInt(readLine());
  
      var res = solution(b,a);
      console.log(res);
  }
  
  