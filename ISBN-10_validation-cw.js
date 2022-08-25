/* Instructions
SBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The last digit can be 0-9 or X, to indicate a value of 10.

An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.

For example:

ISBN     : 1 1 1 2 2 2 3 3 3  9
position : 1 2 3 4 5 6 7 8 9 10
This is a valid ISBN, because:

(1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0
Examples
1112223339   -->  true
111222333    -->  false
1112223339X  -->  false
1234554321   -->  true
1234512345   -->  false
048665088X   -->  true
X123456788   -->  false
*/

function validISBN10(isbn) {
  let value = 1;
  let isbnArr = isbn.split('');
  let sum = 0;

  if (isbnArr.length !== 10 ) {
    return false;
  }

  if (isbnArr[9] === 'X'){
    isbnArr[9] = 10;
  }

  for (let n of isbnArr) {
    parseInt(n)
  }

  for (num of isbnArr) {
    if (num === 'X') {
      num = 0;
    }
    sum += (num * value)
    value++
  }

  if (sum % 11 === 0) {
    return true;
  }
    return false
}