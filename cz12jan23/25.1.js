// Calculate the difficulty of a sentence
// Tags:	String
// Given a string S, find the difficulty of the given string. Here a Word is considered hard if it has 4 consecutive consonants or number of consonants is more than the number of vowels. Else word is easy. Difficulty of the string is defined as 5*(number of hard words) + 3*(number of easy words).

 

// Input:

//     Difficulty of sentence

 

//     where:

// First line represents input string S.
 

// Output:

//      13

 

// Explanation:

// Hard words = 2(Difficulty and sentence) Easy words = 1(of) So, answer is 5*2+3*1 = 13
function solution(ab) {
    //Write your solution here
      let hard = 0;
      let easy = 0;
      if (ab=="")return 0
      for (let i=0;i<ab.length;i++){
          if (ab[i].length>4){
              hard ++
          }if (ab[i].length<4){
              easy++
          }
      }
      return 5*hard+3*easy
  }
  
  
  function main() {
      var ab = readLine().split(" ");
  
      var res = solution(ab);
      console.log(res);
  }
  
  
