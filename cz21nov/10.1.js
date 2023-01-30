// Number of substrings divisible by 6
// Tags:	String
// Given a string S consisting of integers 0 to 9, find the number of substrings which are divisible by 6. Substring does not contain leading zeroes

 

// Input:

//     606

 

//     where:

// First line represents input string S.
 

// Output:

//      5

 

// Explanation:

// Substrings "6", "0", "6", "60", "606" are divisible by 6.
 

// Input:

//     4806 

 

// Output:

//      5

 

// Explanation:

// Substrings "0", "6", "48", "480", "4806" are divisible by 6.
function solution(s) {
    let flag = 0
    let rem = 0
    let x = 0
    s=s.split("")
       for(let i=0; i<s.length; i++){
           rem=0
           for(let j=i; j<s.length; j++){
               x=s[j]
               if(i==j && x==0){
                   flag++
                   break;
               }
               if(x%2==0 && (rem+x)%6==0){
                   flag++
               }
               rem=(rem+x)%6
           }
       }
       return flag
    }
   function main() {
       var a = String(readLine());
   
       var res = solution(a);
       console.log(res);
   }
   
   