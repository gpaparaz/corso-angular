var n1: number = 10;
console.log(n1);

var s1: string = "you created a new value";
var s2: string = "stringa 2";
console.log(s1);
console.log(s2);
var s3: string = s1;
console.log(s3);

var b1: boolean = true;
var b2: boolean = false;
console.log(b2);
console.log(b2);

var a1: any = "test";
var a2: any = 123;

var a3: any = {
    productId: 1,
    productName: "Iphone",
    productPrice: 1000
}

console.log(a3);

var array1: Array<string> = ["stringa1", "stringa2", "stringa3"];
console.log(array1);
console.log(array1[1]);
console.log(array1.length);

var array2: Array<any> = ["stringa", 1233, true];


console.log("variable scopes");

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i); //la variabile i è disponibile anche fuori dalla funzione

for (let j = 0; j < 10; j++) {
    console.log(j);
}
//console.log(j); //j non è disponibile

var pi = 3.14;
pi = 2.14;

const pi2 = 3.14;
// pi2= 2.14; //pi2 dichiarata const non può più essere modificata

const product = function (num1: number, num2: number): number {
    return num1 * num2;
}
//senza const posso assegnare a product una funzione diverse. con const non posso più
// product = function(num1:number, num2:number):number{
//     num1+num2;
// }

//MAPPE
console.log("mappe");

let studentScores = new Map([["John", 90], ["bob", 80]]);
console.log(studentScores.get("john"));
studentScores.set("bauhaus", 100);
console.log(studentScores.size);

studentScores.delete("bauhaus");
console.log(studentScores.has("bahuaus"));

console.log(studentScores.keys());
for (let key of Array.from(studentScores.keys())) {
    console.log(key);
    console.log(studentScores.get(key)); //to get the value
}

console.log("fine mappe");
studentScores.clear();

//SET TYPE
console.log("Set type");
let cources = new Set();
cources.add("Angular");
cources.add("React");
cources.add("Node");
console.log("Coruses size: " + cources.size);
console.log(cources.values);
cources.forEach(function (course) {
    console.log(course);
});


//DATE
let expiryDate: any = new Date();
console.log(expiryDate);

let expiryDate2: any = new Date("2025-12-05");
console.log(expiryDate.getDate());
console.log(expiryDate.getDay());
console.log(expiryDate.getMinutes());
console.log(expiryDate.toTimeString());
