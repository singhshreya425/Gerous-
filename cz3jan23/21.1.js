// Check product of the two numbers is greater than or equal to N
// Tags:	if-else
// Given three integers N, N1 and N2, find the product of N1 and N2 is greater than or equal to N.


// Write a function:
//         int solution(int N, int N1, int N2) 


// that accepts three integers and return 1, 2 or 3 according to a given condition

// if N1*N2 is equal to N return 1.
// if N1*N2 is greater than N return 2.
// if N1*N2 is less than N return 3.
 

// Input
//     1000
//     50 
//     20

 

// Output
//     1

 

// Assume that, 

// N1 & N2 are integers within the range [-10000 to 10000].
function solution(N,N1,N2) {
    //Write your solution here
     if(N1*N2==N){
         return 1
     }else if(N1*N2>N){
         return 2
     }else if(N1*N2<N){
         return 3
     }
  }
  
  
  
  function main() {
     
      var N = parseInt(readLine());
      var N1 = parseInt(readLine());
      var N2 = parseInt(readLine());
      
  
      var res = solution(N,N1,N2);
      console.log(res);
  }
  
  