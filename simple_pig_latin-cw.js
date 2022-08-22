function pigIt(str){
  let engArr = []
  let latArr = []
  let tempArr = []
  let shift
  let output
  
  console.log(str)
  
  engArr = str.split(" ");
  
  for (word of engArr) {
    tempArr = word.split("")
    shift = tempArr.shift()
    console.log(shift)
    if (shift === '!') {
      tempArr.push(shift)
    }
    else if (shift === '?') {
      tempArr.push(shift)
  }
    else {
      tempArr.push(shift, 'a', 'y')
    }
    
    latArr.push(tempArr.join(''))   
    
  }

  return output = latArr.join(' ')
  
}