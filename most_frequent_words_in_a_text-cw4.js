/* Instructions

Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
Examples:
top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]

*/

function topThreeWords(text) {
  let textClean = text.replace(/[^a-z0-9 ']/gi, '').trim().toLowerCase();
  let count = {}
  let values = []
  let output = []
  let textArr = textClean.split(' ').filter((a) => a).filter((b) => b !== "'")
    
  for (text of textArr) {
    if (count[text]) {
      count[text] += 1;
    } else {
      count[text] = 1;
    }
  }
  
  values = Object.values(count).sort().reverse()
  console.log('values', values, 'countOb,', count)
  
  for (let i = 0; i < 3; i++) {
    for (key in count) {
      if (values[i] === count[key] ) {
        output.push(key)
      }
    }
  }
  
  output = [... new Set(output)]
  
  console.log(output)
  
  
  
  while (output.length > 3) {
    output.pop()
  }
  
  return output
  }