// Make an expression balanced
// Tags:	StackData Structures
// Given a brackets expression, find a minimum number of bracket reversals required to make an expression balanced using Stack.

 

// Expression-1 =  “}{“ 

// Here 2 brackets reversals needed to make expression balanced “{}”.

 

// Expression-2 = “{{” 

// Here 1 bracket reversals needed to make expression balanced “{}”.

 

// Write a function:
//         int solution(char* S)

 

// that accept brackets expression as string S. The function should return a minimum number of brackets reversals required to convert expression balanced. If a string can not be made balanced bracket expression then return -1.

 

// Input
//     }{

 

//     where,

// The first line represents a bracket expression as a string.
 

// Output
//     2

 

// Assume that,

// The expression contains only brackets.
// brackets can be '{' and '}'.
// Length of string can be [1 to 10000]
function solution(a) {
    //Write your solution here
      let len=a.length
      if(len%2)return -1
      let s=[]
      for(let i=0;i<len;i++){
          if(a[i]=='}'&&!s.length==0){
              if(s[s.length-1]=='{')
                  s.pop()
              else
                  s.push(a[i])
          }else
              s.push(a[i])
      }
      let len2=s.length
      let n=0
      while(!s.length==0&&s[s.length-1]=='{'){
          s.pop()
          n++
      }
      return(len2/2+n%2)
  }
  
  
  function main() {
      var a =readLine().split("");
  
      var res = solution(a);
      console.log(res);
  }
  
  