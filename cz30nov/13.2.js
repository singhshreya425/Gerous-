// Count substrings with same first and last characters
// Tags:	String
// Given a string S, find the count of all substrings starting and ending with the same character.

 

// Input:

//     abcab

 

//     where:

// First line represents input string S.
 

// Output:

//     7

 

// Explanation:

// There are 15 substrings of  abcab : a, ab, abc, abca, abcab, b, bc, bca, bcab, c, ca, cab, a, ab, b.
// Out of the above substrings, there are 7 substrings: a, abca , b, bcab , c, a and b starting and ending with the same character.
 

// Assumptions:

// Character comparisons will be case-sensitive.
function solution(a) {
    let i,j, count =0, len=a.length
    for(i=0;i<len;i++){
        for(j=i;j<len;j++){
            if(a[i]==a[j])
                count++
        }
    }
       return count
   }
   
   
   function main() {
       var a =readLine().split('');
   
       var res = solution(a);
       console.log(res);
   }
   
   