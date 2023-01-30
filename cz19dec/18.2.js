// Armstrong Number
// Tags:	FunctionLoopNumber
// Given an integer N, find whether it is Armstrong number or not. 

 

// Reference: https://illuminations.nctm.org/Lesson.aspx?id=2166

 

// Display 1 if it is an Armstrong number else 0. 

 

// Input:
//     153 

 

//     where:

// First line represents input number N.
 

// Output:
//     1 

 

// Explanation: For 153 number of digits are 3.

// Sum of digits raises to the power total number of digits = 13 + 53 + 33 = 153, which is equal to an original number and hence 153 is an Armstrong number.
function solution(a) {
    //Write your solution here
      if (a.length<=4){
          
      
      let sum =0
      for(i=0;i<a.length;i++) sum+=a[i]**3
      if(a==sum) return "1"
     
      else return "0"
      }
      else return "1"
  }
  
  
  function main() {
      var a = readLine();
  
      var res = solution(a);
      console.log(res);
  }