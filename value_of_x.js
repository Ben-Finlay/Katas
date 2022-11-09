function valueOfX(eq) {
  let eqArr = eq.split('=')
  let leftHand = eqArr[0].trim().split(' ');
  let rightHand = eqArr[1].trim().split(' ');
  let result = 0;
  let plus = leftHand.indexOf('+')
  let minus = leftHand.indexOf('-')
  
  console.log('lh', leftHand, 'rh', rightHand)


  //function, move all terms to one side
  function isolateX(lS, rS) {
    //in the case where it's -x = -10, this should change it to +10
    
      for (let val of lS) {
        if (val != 'x') {
          rS.push(val)
          console.log('lS', lS, 'rS', rS)
        }
        
      }
    return lS, rS
    }
  

  //convert terms into parseable numbers
  function parse(toSum) {
    return toSum.join('').match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g);
  }

  //first checks if the leftHandside has x in it, then it converts all operators, then shifts all values to the otherside
  //finally it parses the other side, and adds it to the result.
  if (leftHand.includes('x')) {

    if (leftHand.length > 1) {
      if (leftHand[0] === '-' && rightHand[0] === '-') {
        rightHand.splice(0, 1, '+')
        leftHand.splice(0, 1)
        }
      leftHand[plus] = '-'
      leftHand[minus] = '+'
      isolateX(leftHand, rightHand)
    }

      rightHand = parse(rightHand)

      while(rightHand.length) {
      result += parseInt(rightHand.shift())}
  
      } 
      
  if (rightHand.includes('x')) {
      if (rightHand.length > 1) {
        if (leftHand[0] === '-' && rightHand[0] === '-') {
          leftHand.splice(0, 1, '+')
          rightHand.splice(0, 1)
          }
        rightHand[plus] = '-'
        rightHand[minus] = '+'
        isolateX(rightHand, leftHand)
      }

      leftHand = parse(leftHand)

      while(leftHand.length) {
      result += parseInt(leftHand.shift())}

  }
      return result;
  }
  
  
  module.exports = valueOfX;