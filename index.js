function takeANumber(katzDeliLine , name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    console.log(`Currently serving ${katzDeliLine[0]}`);
    katzDeliLine.shift(`${katzDeliLine[0]}`);
  }
  else {
    console.log('There is nodoby waiting to be served!');
  }
}
