/* Instructions
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
  let holdArr = s.split(' ')
  let min = Infinity;

  for (let i = 0; i < holdArr.length; i++) {
    if (holdArr[i].length < min) {
      min = holdArr[i].length;
    }
  
  }
  return min
}

// A Better Solution!

function findShort(s){
  let holdArr = s.split(' ')
  holdArr.sort((a, b) => a.length - b.length)
  return holdArr[0].length
}