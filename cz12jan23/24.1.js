// Find a string within a string
// Tags:	String
// Given two strings S1 & S2, search for an occurrence of the second string within a first string.  

// Note: Do not use system library for the implementation. 

 

// Input:
//     Code Zinger University 
//     Zinger

 

//     where, 

// First line represents string S1. 
// Second line represents string S2. 
 

// Output:
//     5 

 

// Here 'Zinger' word starts at 5th index within 'Code Zinger University’. 

 

// Assume that, 

// The length of strings S1 & S2 are within the range [1 to 10000].
// Character comparisons will be case-sensitive.
function solution(s1,s2) {
    //Write your solution here
      let l1=s1.length;
      let l2=s2.length;
      let l=l1-l2
      if (l1<l2)return -1;
      for (let i=0;i<=l;i++){
          let j;
          for(j=0;j<l2;j++){
              if(s1[i+j]!=s2[j])
                  break;
          }
          if (j==l2){
              return i;
              break;
          }
          if(i==l&&j!=l2)
              return -1
      }
  }
  
  
  function main() {
      var s1 = readLine();
      var s2 = readLine();
  
      var res = solution(s1,s2);
      console.log(res);
  }
  
  