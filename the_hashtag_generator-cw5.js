/* Instructions
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag (str) {
  let hashtag = ""
  let capital = str.replace(/\b\w/g, c => c.toUpperCase());
  let emptyTest = str.replace(/\s/g, "")
  if (emptyTest.length > 0) {
   hashtag = '#' + capital.replace(/\s/g, "");
    if (hashtag.length < 141) {
   return hashtag;
      }
   }
  return false;
}