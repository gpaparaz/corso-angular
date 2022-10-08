var x: number = 10;
var y: number = 20;
if (x > y) {
    console.log("X is greater");
}
else if (y > x) {
    console.log("Y is greater");
}
else {
    console.log("numbers are equals");
}

console.log("switch case");

var a: number = 3;
switch (a) {
    case 1:
        console.log("caso 1");
        break;
    case 2:
        console.log("caso 2");
        break;
    default: //non abbiamo un caso 3, quindi prenderà il default
        console.log("default case");
        break;
}
//se non definissi la logica del case 1, case 1 e case 2 li accorperebbe


console.log("ciclo while");
var n: number = 10;
var i = 1;
while (i <= n) {
    console.log("i: ", i++);
}