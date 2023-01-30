// Check whether a string is suffix of another
// Tags:	String
// Given two strings S1 and S2, check whether S1 is a suffix of S2 i.e. check whether string S2 ends with string S1.

 

// Input:

//     code

//     coderscode

 

//     where:

// First line represents string S1.
// Second line represents string S2.
 

// Output:    

//     Yes
function solution(s1,s2) {
    let n1=s1.length , n2=s2.length
    if(n1>n2) return "No";
       for(let i=0;i<n1;i++){
           if(s1[n1-i-1]!=s2[n2-i-1])
               return "No"
       }
       return "Yes"
   }
   
   
   function main() {
       var s1 = String(readLine());
       var s2 = String(readLine());
   
       var res = solution(s1,s2);
       console.log(res);
   }
   
   