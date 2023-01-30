// Prime Number
// Tags:	LoopNumber
// Given an integer, find whether the number is a Prime number or not. 

 

// Display 1 if N is prime else 0. 

 

// Input
//     11 

 

// Output
//     1 

 

// 11 can be divided exactly by 1 and 11. Hence it's a prime number.

function solution(a) {
    //Write your solution here
      if (a<=1) return 0;
      for(let i=2;i<a;i++){
          if(a%i==0)return 0;
      }
      return 1
      
  }
  
  
  function main() {
      var a = parseInt(readLine());
  
      var res = solution(a);
      console.log(res);
  }
  
//------------------------------------------------------------  

function isPrime(n) {
    if (n <= 1) return 0;
    for (let i = 2; i < n; i++) {
      if (n % i == 0) return 0;
    }
    return 1;
  }
  
  console.log(isPrime(11)); // Output: 1
  