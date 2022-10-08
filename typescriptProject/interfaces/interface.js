//defines the contract in your application. It defines the syntax for classes to follow. 
//Classes that are derived from an interface must follow the structure provided by their interface.
var product1 = {
    id: 123,
    name: "Prodotto 1",
    description: "il primo prodotto di una serie di prodotti",
    price: 50,
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
console.log("Functional Interfaces");
var add;
var sub;
//se provo a cambiare il tipo degli argomenti da errore, idem se provo ad aggiungere un parametro
add = function (x, y) {
    console.log(x + y);
};
sub = function (x, y) {
    return x - y;
};
console.log("Interfacce Array");
var studentNames = ["John", "Bob", "Smith"];
var studentScore = {}; //le graffe rappresentano un oggetto con un numero illimitato di properties
/*nell'array con index string io uso la stringa come key*/
studentScore["John"] = 100;
studentScore["Bob"] = 90;
//for-in-loop
//item mi da la key
for (var item in studentScore) {
    console.log(item); //stampa key
    console.log(studentScore[item]); //stampa value
}
console.log("Estendere interfacce");
var myCar = {
    make: "Honda",
    model: "Civic",
    year: 2020,
    color: "Balck",
    numOfDoors: 5,
    seats: 5,
    auto: true
};
