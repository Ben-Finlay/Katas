/* Instructions

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/

function isIsogram(str){
  
  let letterArr = str.toLowerCase().split('')
  letterArr = letterArr.sort()
    
  for ( let i = 0; i < letterArr.length; i++) {
    if (letterArr[i] === (letterArr[i + 1])) {
      return false
    }
  }
  return true
  }