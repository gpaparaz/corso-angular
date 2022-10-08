var n1 = 10;
console.log(n1);
var s1 = "you created a new value";
var s2 = "stringa 2";
console.log(s1);
console.log(s2);
var s3 = s1;
console.log(s3);
var b1 = true;
var b2 = false;
console.log(b2);
console.log(b2);
var a1 = "test";
var a2 = 123;
var a3 = {
    productId: 1,
    productName: "Iphone",
    productPrice: 1000
};
console.log(a3);
var array1 = ["stringa1", "stringa2", "stringa3"];
console.log(array1);
console.log(array1[1]);
console.log(array1.length);
var array2 = ["stringa", 1233, true];
console.log("variable scopes");
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i); //la variabile i è disponibile anche fuori dalla funzione
for (var j = 0; j < 10; j++) {
    console.log(j);
}
//console.log(j); //j non è disponibile
var pi = 3.14;
pi = 2.14;
var pi2 = 3.14;
// pi2= 2.14; //pi2 dichiarata const non può più essere modificata
var product = function (num1, num2) {
    return num1 * num2;
};
//senza const posso assegnare a product una funzione diverse. con const non posso più
// product = function(num1:number, num2:number):number{
//     num1+num2;
// }
//MAPPE
console.log("mappe");
var studentScores = new Map([["John", 90], ["bob", 80]]);
console.log(studentScores.get("john"));
studentScores.set("bauhaus", 100);
console.log(studentScores.size);
studentScores["delete"]("bauhaus");
console.log(studentScores.has("bahuaus"));
console.log("fine mappe");
