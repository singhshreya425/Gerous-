//smallest window that contain all character of itself
// Smallest window that contains all characters of string itself
// Tags:	String
// Given a string S, find the smallest window(substring) length with all distinct characters of the given string.

 

// Input:

//     aabbcc

 

//     where:

// First line represents input string S.
 

// Output:

//     4

 

// Explanation:

// abbc of length 4 is the smallest window with the highest number of distinct characters.
 

// Assumptions:

//  Character comparisons will be case-sensitive.
function solution(a) {
    //Write your solution here
      let mySet1=new Set()
      for(let i=0;i<a.length;i++){
          mySet1.add(a[i])
  }
      let distcount= mySet1.size
      let start=0;
      let startIndex=0;
      let minLen=Number.MAX_VALUE;
      let counter=0;
      let visited=new Array(256).fill(0)
      for(let j=0;j<a.length;j++){
          visited[a.charCodeAt(j)]++
          if(visited[a.charCodeAt(j)]==1){
              counter++
          }if(counter==distcount){
              while(visited[a.charCodeAt(start)]>1){
                  if(visited[a.charCodeAt(start)]>1){
                      visited[a.charCodeAt(start)]--
                      start++
                  }
              }
              let cur_len=j-start+1
              if(cur_len<minLen){
                  minLen=cur_len
                  start=startIndex
              }
          }
          
      }return minLen
  }
  
  
  function main() {
      var a = readLine();
  
      var res = solution(a);
      console.log(res);
  }
  
//--------------------------------------------------------------------  

function solution (s){
    //3 unique character = a,b ,c
    let uniquechar=0
    let map = new Map()
    for (let el of s){
        if(!map.has(el)){
            map.set(el,1)
            uniquechar++
        }

    }
    console.log(uniquechar)
    let start=0
    let minlen=s.length
    let ccount=new Array(256).fill(0)//[0,0,0,0,0]
    let count=0
    for(let i=0;i<s.length;i++){
        ccount[s[i].charCodeAt(0)]++//[0,0.......1]
        if(ccount[s[i].charCodeAt(0)]==1){
            count ++
        }
        while(ccount[s[i].charCodeAt(0)]>1)
        count [s[i]]
    }
}