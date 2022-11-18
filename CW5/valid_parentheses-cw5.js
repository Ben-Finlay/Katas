/* Instructions

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

function validParentheses(parens) {
  let left = 0
  let right = 0
  let l = 0;
  let r = 0;
  let parensArr = parens.split("");
  if (parens.length === 0 || parens.length > 99) {
    return true
  }
  
  if (parensArr[0] === ')') {
    return false
  }
  
  if (parensArr[parensArr.length -1] === '(') {
    return false
  }
  
  for (let paren of parensArr) {
    if (paren === ')') {
      right++
    }
    if (paren === '(') {
      left++
    }
  }
  
  for (let i = 0; i < (parensArr.length / 2); i++) {
    if (parensArr[i] === ')') {
      r++
    }
    if (parens[i] === '(') {
      l++
    }
  
    if (r > l) {
      return false
    }    
  }
 
  
  if (right === left) {
    return true
  }
  
  return false;
}