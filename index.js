function takeANumber(katzDeliLine , name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine[0]}.`
    return katzDeliLine.shift()
  }
  else {
    return "There is nodoby waiting to be served!"
  }
}

function currentLine(array){
  var line = "The line is currently:"
  if (array.length > 0){
    for (let i = array.length ; i > 0 ; i--){
      line = line +`${array.length - (i + 1)}` 
    }
  } 
} 