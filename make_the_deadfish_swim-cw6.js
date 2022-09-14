/* Instructions
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/

function parse( data ) {
  let dataArr = data.split("");
  let resultArr = [];
  let count = 0;
  for (let el of dataArr) {
    if (el === 'i') {
      count++
    }
    if (el === 'd') {
      count--
    }
    if (el === 's') {
      count = Math.pow(count, 2)
    }
    if (el === 'o') {
     resultArr.push(count)
    }
    
  }
  return resultArr
}