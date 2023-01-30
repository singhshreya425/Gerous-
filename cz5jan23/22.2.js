// Check whether a string can be converted to another string by replacing vowels and consonants
// Tags:	String
// Given two strings S1 and S2, you are allowed only to change a character at any position to any vowel if it is a vowel or to a consonant, if it is a consonant. Write a program to check whether a string S1 can be changed to S2 or S2 can be changed to S1.

 

// Input:

//     abcgle

//     ezggli

 

//     where:

// First line represents string S1.
// Second line represents string S2.
 
// Output: 

//     Yes

 

// Explanation:

// Change ‘a’ to ‘e’, ‘b’ to ‘z’, ‘c’ to ‘g’ and ‘e’ to ‘i’.
 

// Input: 

//     abc

//     cgth

 

// Output:

//      No
function isVowel(c) {
    //Write your solution here
      if(c==='a'||c==='e'||c==='i'||c==='o'||c==='u')
          return true;
      return false
  }
  
  function solution(a,b){
      let l1=a.length;
      for(let i=0;i<l1;i++){
          if(isVowel(a[i])&&isVowel(b[i])) continue;
          else if (!isVowel(a[i])&&!isVowel(b[i])) continue;
   else return "No"
      }return "Yes"
  }
  
  
  function main() {
      var a = String(readLine()).split("");
      var b = String(readLine()).split("");
  
      var res = solution(a,b);
      console.log(res);
  }
  
  