

function livingRoom(prisonerNumber, lightbulb, previousVisits) {
    
  //this prisoner is in charge of turning the lightbulb on
  if (prisonerNumber === 99 && !lightbulb) {
    lightbulb = true;
    let count = 0;
    for (let val of previousVisits) {
      if (val === false) {
      count++
      }
    }
    //this checks to see if the prisoner has had to turn it on at least 99 times
    if (count === 99) {
    return [lightbulb, true]
      }
    }
  //if a prisoner encounters a lightbulb that's on, they turn it off if they have never turned it off before
  if (lightbulb && prisonerNumber !== 99 && !previousVisits.includes(true)) {
    lightbulb = false;
  }
  return [lightbulb, false]
}


