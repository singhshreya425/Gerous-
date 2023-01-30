// Check if a String can be converted to Pangram in K changes
// Tags:	String
// Given string S containing only lowercase alphabets and an integer K, find whether the string can be converted to a Pangram by performing at most K changes. In one change we can remove any existing character and add a new character.

 

// Note: Given that length of the string is greater than 26 always and in one operation we have to remove an existing element to add a new element.

 

// Input:

//     qwqqwqeqqwdsdadsdasadsfsdsdsdasasas

//     4

 

//     where:

// First line represents string S.
// Second line represents K.
 

// Output:

//     No

 

// Explanation:

// Making just 4 modifications in the string, it can't be changed to a pangram.
 

// Input:

//     qwqqwqeqqwdsdadsdasadsfsdsdsdasasas

//     24

 

// Output:

//     Yes 

 

// Explanation:

// By making 19 modifications in the string, it can be changed to a pangram.
function solution(a,n) {
    //Write your solution here
      let filterA1 = a.split("").filter((x,i,a)=>a.indexOf(x)==i).length
              return (filterA1+n>=26)?"Yes":"No"
  }
  
  
  function main() {
      var a = readLine();
      var n = parseInt(readLine())
  
      var res = solution(a,n);
      console.log(res);
  }
  
  