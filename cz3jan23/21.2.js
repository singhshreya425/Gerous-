// Check two strings are anagram of each other
// Tags:	StringSorting
// Given two strings S1 & S2, check those are Anagram of each other or not. 

 

// Display 1 if both S1 and S2 are anagram of each other else 0. 

 

// Input 
//     codezinger 
//     Eco Red Zing 

    

//     where, 

// First line represents string S1. 
// Second line represents string S2. 
 

// Output 
//     1 

 

// "codezinger" and "Eco Red Zing", both are the anagram of each other. 

 

// Assume that, 

// The length of string S1 and S2 are within the range [1 to 100000]. 
// S1 & S2 contains only alphanumeric characters without special characters. 
// Character comparisons will not be case-sensitive. 
function solution(a,b) {
    //Write your solution here
     let x=a.toLowerCase().trim().replace(/ /g,"").split("").sort();
      let y=b.toLowerCase().trim().replace(/ /g,"").split("").sort();
      let str1=x.join("")
      let str2=y.join("")
      if(str1==str2){
          return 1
      }else return 0
      
  }
  
  
  function main() {
  
      var a=readLine();
      var b= readLine();
      var res = solution(a,b);
      console.log(res);
  }
  
  