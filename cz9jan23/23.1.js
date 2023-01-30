// CodeZinger logoCodeZinger

// Check whether a person is eligible for donating Blood or not
// perfect stamp
// Print
// Submitted on:  Jan 10, 2023 12:43 am
// Score: Score is100/100
// Test Cases: 4/4test cases passed.
// Code Review: 0code reviews.
// Comment: 0comments.

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// Help
// Check whether a person is eligible for donating Blood or not
// if-else

// Given is the age and weight of a person as an input, Determine whether the person is eligible for donating blood or not. Display "Yes" if the person is eligible otherwise display "No".

// A person is said to be eligible to donate blood only if,

// Age > = 17 years and,
// Weight > = 110 pounds.
 

// Input:

//     18

//     112

 

//     where:

// First line represents the Age of the person(in years).
// Second line represents the weight of the person(in pounds).
 

// Output:

//     Yes

 

// Explanation:

// As the age of person = 18 > 17 and weight = 112 > 110, hence the person is eligible to donate blood.
 

// Assumption:

// Age of the person will be a limited positive integer.
// Weight of the person can be in the range 1 to 10000 pounds.
function solution(age,weight) {
    //Write your solution here
      if(age >=17 && weight >= 110){
          return "Yes"
      }else {return "No"}
  }
  
  
  function main() {
      var age = parseInt(readLine());
      var weight =parseInt(readLine());
  
      var res = solution(age,weight);
      console.log(res);
  }
  
  