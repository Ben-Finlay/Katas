/* Instructions
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

*/

function solution(input, markers) {
  let inputArr = input.split('\n')
  
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr[i].length; j++) {
      if (inputArr[i][j] === markers[0] || inputArr[i][j] === markers[1]) {
        inputArr[i] = inputArr[i].slice(0, ([j] -1))
        
      }
    }
  }
  return inputArr.join("\n");
};