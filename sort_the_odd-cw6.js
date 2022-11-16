/* Instructions

Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/

// Solution

function sortArray(array) {
  let odd = array.filter(n => n%2 !== 0).sort((a, b) => a-b)
  let max = array.length
  let c = 0
  for (let i = 0; i < max; i++) {
    if(array[i] % 2 !== 0) {
      array.splice(i, 1, odd[c])
      c++
    }
  }
  return array
}