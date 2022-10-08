var x: number = 10;
var y: number = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

var num1: number = 10;
var num2: number = 2;
var num3 = num2;

console.log(num3);

num3 += num2;

console.log(num3);

console.log("comparison");

var x: number = 30;
var y: number = 40;
console.log(x === 30);
console.log(x === 40);
console.log(x !== 40);
console.log("x è maggiore di 30?");
console.log(x > 30);

console.log("logical operators");
console.log((10 > 20) && (20 > 5));
console.log((10 > 20) || (20 > 5)); //torna true perchè l'espressione a destra è true
console.log((10 > 20) || (4 > 5));
console.log(!(10 > 20) && (20 > 5));

console.log("ternary operations");
// testExpression? value1:value2
//se testExpression è true ritorna value1, se è false ritorna value2

var a: number = 10;
var b: number = 20;
console.log((a > b) ? "A è maggiore di B" : "B è maggiore di A");


