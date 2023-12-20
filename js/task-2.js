
function formatMessage(message, maxLength) {
  if
    (message.length <= maxLength)
  {
    return message;
  }
  else {
    return message.slice(0, maxLength) + "...";
  }
}


const result1 = formatMessage("Curabitur ligula sapien", 16);
console.log(result1); 
const result2 = formatMessage("Curabitur ligula sapien", 23);
console.log(result2); 
const result3 = formatMessage("Vestibulum facilisis purus nec", 20);
console.log(result3); 
const result4 = formatMessage("Vestibulum facilisis purus nec", 30);
console.log(result4); 
const result5 = formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
console.log(result5); 
const result6 = formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);
console.log(result6); 