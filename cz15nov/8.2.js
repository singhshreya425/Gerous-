// Reverse string according to number of words
// Tags:	String
// Given a string S containing a number of words. If the count of words in the string S is even then reverse its even position’s words else reverse its odd position, push reversed words at the starting of a new string and append the remaining words as it is in order.

 

// Input:

//     Ashish Yadav Abhishek Rajput Sunil Pundir

 

//     where:

// First line represents the input string S
 

// Output:

//     ridnuP tupjaR vadaY Ashish Abhishek Sunil

 

 

// Input:

//     Ashish Yadav Abhishek Rajput Sunil Pundir Prem

 

// Output:

//     merP linuS kehsihbA hsihsA Yadav Rajput Pundir
function solution(a) {
    let arr = a;
      let length = a.length;
      let y,z,final,temp=[],abc=[]
      if(length%2==0){
          for(let i=0; i<length-1;i+=2){
              abc.push(arr[i])
          }
          for(let i=1; i<=length; i+=2){
              y=a[i].split("")
              z=y.reverse()
              final = z.join("")
              abc.unshift(final)
          }
          return abc.join(" ");
      }else{
          for(let i=1; i<=length; i+=2){
              abc.push(arr[i])
          }
          for(i=0; i<=length; i+=2){
              y=a[i].split("")
              z=y.reverse()
              final=z.join("")
              abc.unshift(final);
          }
          return abc.join(" ")
      }
  }
  
  
  function main() {
      var a = String(readLine()).split(" ")
  
      var res = solution(a);
      console.log(res);
  }
  
  