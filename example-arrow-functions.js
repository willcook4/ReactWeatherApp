function add (a, b ) {
  return a + b;
}

// Add statement {}

// addExpression -- single line

console.log(add(1,3));
console.log(add(9,0));


var addStatement = (number1, number2) => {
  return number1 +  number2;
}

console.log(addStatement(4,7));

var addExpression = (a, b) => a + b;

console.log(addExpression(8,2));