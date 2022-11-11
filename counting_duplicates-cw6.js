/* Instructions

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

// Solution

function duplicateCount(text){
  let dupes = {}
  let dupeArr = text.toLowerCase().split('')
  let result = 0
  dupeArr.forEach(e => {
    dupes[e] = (dupes[e] || 0 ) + 1;
  })
  for (let val in dupes) {
    if(dupes[val] > 1) {
      result++
    }
  }
  return result;
}