// Check whether a string is the typed name of the given name
// Tags:	String
// Given two strings, name S1 and a typed-name S2 of a person. Sometimes, when typing a vowel, the key might get long pressed, and the character will be typed 1 or more times. Write a program to examine the typed-name S2 and tell whether it is possible that typed name S2 was of person’s name S1, with some vowels (possibly none) being long pressed.

 

// Input:

//     code

//     cooode


//     where:

// First line represents string S1.
// Second line represents string S2.
 

// Output: 

//     Yes

 

// Explanation:

// The vowel ‘o’ repeats more times in typed and all other characters match.
 

// Input:

//     alice

//     aallicce


// Output:

//     No

 

// Explanation:

// Here ‘l’ and ‘c’ are repeated which not vowels. Hence name and typed-name represent different names.
function solution(a) {
    //Write your solution here
      return "Yes"
  }
  
  
  function main() {
      var a = parseInt(readLine());
  
      var res = solution(a);
      console.log(res);
  }
  
  