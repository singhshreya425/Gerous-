// Check whether strings are rotation of each other
// Tags:	String
// Given two strings S1 & S2, write a program to say whether S2 is a rotation of S1.

// e.g. string S2=CDAB is a rotation of string S1=ABCD, whereas string S2=ACBD is not a rotation of string S1=ABCD

 

// Input:
//     ABCD
//     CDAB

 

//     where, 

// First line represents string S1. 
// Second line represents string S2. 
 

// Output:
//     Yes

 

// Input:
//     ABCD
//     CBDA

 

// Output:
//     No

 

// Assumptions: 

// Strings S1 and S2 contain only upper case characters.
function solution(s1,s2) {
    if(s1.length==s2.length){
        if((s1+s1).indexOf(s2)!= -1)return "Yes"
        else return "No"
    }
   }
   
   
   function main() {
       var s1 = String(readLine());
       var s2 = String(readLine());
   
       var res = solution(s1,s2);
       console.log(res);
   }
   
   