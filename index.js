function takeANumber(katzDeliLine , name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift(`${katzDeliLine[0]}`);
    return katzDeliLine
  }
  else {
    return 'There is nodoby waiting to be served!'
  }
}
