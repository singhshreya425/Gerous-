// Frequency of characters in a string
// Tags:	String
// Given a string S, count the frequency of characters in the string S i.e. which character is present how many times in the string

 

// Input:

//     hello world

   

//     where:

// First line represents the input string
 

// Output:

//     d 1

//     e 1

//     h 1

//     l 3

//     o 2

//     r 1

//     w 1

 

// Explanation: Print the count of each distinct letter present in string S.

 

// Assumptions:

// String contains only lower case letters
// Length of string S can be 0 to 10000
function solution(a) {
    //Write your solution here
      let fre={}
      for(let i=0;i<a.length;i++){
          if(fre.hasOwnProperty(a[i])){
              fre[a[i]]+=1;
          }else{
              fre[a[i]]=1;
          }
      }
      let data=[];
      for(let i in fre){
          if (i!=" "){
              data.push(i+" "+ fre[i])
          }
      }
      return data.join("\n")
      
  }
  
  
  function main() {
      var a = readLine().split('').sort().join('');
  
      var res = solution(a);
      console.log(res);
  }
  
  