// Check whether a string is Isogram or not
// Tags:	String
// Given a string S, find whether it is Isogram or not.

 

// Input:

//      Machine

 

//     where:

// First line represents string S.
 

// Output:

//     Yes

 

// Explanation:

// "Machine" does not have any character repeating, it is an Isogram
function solution(a) {
    for(let i=0; i<a.length-1; i++){
        if(a[i]==a[i+1]) return "No"
    }
      return "Yes"
  }
  
  
  function main() {
      var a = String(readLine()).toLowerCase().split("").sort();
  
      var res = solution(a);
      console.log(res);
  }
  
  