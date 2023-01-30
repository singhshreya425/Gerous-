//REVERSE A SENTENCE USING RECURSSION
// Reverse a sentence using recursion
// Tags:	String
// Given a string S, write a program to reverse the input string without using any built-in function

 

// Input:

//     hello world

   

//     where:

// First line represents the input string
 

// Output:

//      dlrow olleh

 

// Assumptions:

// Length of string can be 0 to 10000

function solution(a) {
  //Write your solution here
    if(a===""){
        return "";
    }else{
        return solution(a.substr(1))+a.charAt(0)
    }
}


function main() {
    var a = readLine();

    var res = solution(a);
    console.log(res);
}

//--------------------------------------------------------


function reverse(str){
    if(str===""){
        return "";
    }else{
        return reverse(str.substr(1))+str.charAt(0)
    }
}
console.log(reverse('abcd efj'))

//New approach
function reverseString(s) {
    return s && reverseString(s.slice(1)) + s[0] || s;
  }

  //New approach 1
  function Reverse(str) {
    if (str === null) {
      return null;
    }
    if (str.length <= 1) {
      return str;
    }
    var first = str[0];
    var last = str[str.length - 1];
    var str1 = Reverse(str.substring(1, str.length - 1));
    return last + str1 + first;
  }
  
  var result = Reverse("a really serious string of nothingness making call stack to explode");

  //New approach 2
  function reverse(str) {
    if(str.charAt(0) === ''){
      return "";
    }
    return str.charAt(str.length -1) + reverse(str.substring(0,str.length-1));
  }

  //New approach 3
  function strrev(str) {
    return str.length !== 1 ? strrev(str.slice(1))+str[0] : str;
}

//New approach 4
const reverse_string = s => s === '' ? '' : reverse_string(s.substring(1)) + s.charAt();

console.log(reverse_string('Hello, world!')); // !dlrow ,olleH

//New approach 5
function reverse(str){
    if(str.length===0)
       return "";
   
   return str[str.length-1]+reverse(str.slice(0,str.length-1));
   }

   //New approach 6
   const reverseIt = (x) => {
    if (x === "") {
      return "";
    }
    return x[x.length - 1] + reverseIt(x.substring(0, x.length - 1));
};

//Newa approach 7
function reverse(s) {
    const index = s.indexOf(" "); 
    if(index === -1) {
      return s
    }
    else { 
        return reverse(s.slice(index+1)) + " " + s.slice(0,index)
    }
  } 

  //New approach 8
  function reverse(str, newStr = "") {
    // Base case
    if (str.length === 0) return newStr;
    // newStr += str.slice(-1)
    return reverse(str.slice(0, -1), newStr += str.slice(-1));
    }
    
    console.log(reverse("house")) // esuoh