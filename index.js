function takeANumber(katzDeliLine , name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nodoby waiting to be served!";
  }
  else {
    return (`Currently serving ${katzDeliLine.shift()}.`)


  }
  let i = 0;
  while (i < katzDeliLine.length){
    i++
  }





  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  }
  else {
    return "There is nodoby waiting to be served!"
  }
}

function currentLine(array){
  var line = "The line is currently:"
  if (array.length > 0){
    for (let i = 0 ; i < array.length ; i++){
      line = line.concat(` ${i + 1}. ${array[i]},`)
    }
  return line
  }
  else{
    return "The line is currently empty."
  }
}
