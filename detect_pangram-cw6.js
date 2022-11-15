/* Instructions

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

// Solution

function isPangram(string){
  let hold = string.replace(/\s{1,}/g,"").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/[0-9]/g,"").toLowerCase().split('');
  let arr = [...new Set(hold)]
  return arr.length === 26 ? true : false
}