//Count number of substrings with exactly K distinct characters
// Tags:	String
// Given a string S of lowercase alphabets, count all possible substrings (not necessarily distinct) that have exactly K distinct characters

// Input:

//      abc

//      2

//     where:

// First line represents input String S.
// Second line represents K.
 
// Output:

//      2

// Explanation:

// Possible substrings with 2 distinct characters are {"ab", "bc"} 

// Assumptions:

// Value of K can be 1 to 26.
function solution(str,k) {
    //Write your solution here
      if(str.length==0){
          return 0
      }
      let res=0,j=0;
      let map=new Map()
      let n=str.length
      for(let i=0;i<n;i++){
          if(!map.has(str[i])){
              map.set(str[i],1)
          }else{
              map.set(str[i],map.get(str[i])+1)
          }
          while(map.size>k&&j<=1){
              if(map.get(str[j])<=1){
                  map.delete(str[j])
              }else{
                  map.set(str[j],map.get(str[j])-1)
              }
              j++
          }res+=i-j+1
      }
      return res;
  }
  
  
  function main() {
      var a= readLine();
      var k = parseInt(readLine());
      var res=solution(a,k)-solution(a,k-1)
  
      
      console.log(res);
  }
  
  