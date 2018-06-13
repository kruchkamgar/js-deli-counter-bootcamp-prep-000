var katzDeli = [];
var ticketNumber = 1;

function takeANumber (deliLine) {
  deliLine.push(ticketNumber);
  return `Welcome, you hold ticket number ${ticketNumber++}.`;
}

function nowServing (deliLine) {
  return (deliLine.length > 0) ? `Currently serving ${deliLine.shift()}.` : "There is nobody waiting to be served!";
}


function currentLine (deliLine) {
  var readOut = `1. ${deliLine[0]}`;
  
  var i;
  for ( i = 1; i < deliLine.length; i++ ) {
    readOut += `, ${i+1}. ${deliLine[i]}`;
  }
  
  return (deliLine.length > 0) ? `The line is currently: ${readOut}` : "The line is currently empty.";
}

