
// Check balanced brackets in expression
// Tags:	Stack Data Structures
// Given a string which contains brackets, check whether bracket expression is balanced or not.

// Balanced brackets expression {},({}[({})}), [[{()()}]]
// Unbalanced brackets expression {{}, {(}), [{([]})]
 

// Reference: csis.pace.edu/~wolf/CS122/infix-postfix.htm

 

// Write a function:
//         int solution(char* S)

 

// that accept a bracket expression as a string. The function should return 1 if a bracket expression is balanced brackets else 0.

 

// Input
//     {}[]()[{()}]

 

//     where,

// The first line of input is bracket-expression as a string S.
 

// Output
//     1

 

// Assume that,

// The expression contains only brackets.
// Brackets only contains characters as '[', ']', '{', '}', '(' and ')'.
// The length of a string is within the range from 1 to 10000.
function solution(a) {
    //Write your solution here
      let stack=[]
      for(let i=0;i<a.length;i++){
          let x=a[i]
          if(x=='('||x=='['||x=='{')
              stack.push(x)
          if(stack.length==0)return 0
          let check
          switch(x){
                  case')':
                  check=stack.pop()
                  if(check=='{'||check=='[')
                      return 0
                  break;
                  case'}':
                  check=stack.pop()
                  if(check=='('||check=='[')
                      return 0
                  break;
                  case']':
                  check=stack.pop()
                  if(check=='('||check=='{')
                      return 0;
                  break;
          }
      }
      if(stack.length==0)return 1
      else return 0
  }
  
  
  function main() {
      var a = readLine().split('');
  
      var res = solution(a);
      console.log(res);
  }
  
  