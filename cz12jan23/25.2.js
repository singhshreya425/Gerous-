// Missing characters to make a string Pangram
// Tags:	String
// Given a string S, find all characters that are missing from the string S, i.e., the characters that can make the string a Pangram. Display output in alphabetic order.

 

// Input:

//      The quick brown fox jumps

 

//     where:

// First line represents string S.
 

// Output:

//     adglvyz
function solution(a) {
    //Write your solution here
      a=a.toLowerCase();
      let char = "abcdefghijklmnopqrstuvwxyz";
      let missingChar=[]
      for(let i=0;i<char.length;i++){
          if(a.indexOf(char[i])==-1){
              missingChar.push(char[i])
          }
      }return missingChar.join("")
  }
  
  
  function main() {
      var a =readLine();
  
      var res = solution(a);
      console.log(res);
  }
  
  