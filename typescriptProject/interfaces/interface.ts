//defines the contract in your application. It defines the syntax for classes to follow. 
//Classes that are derived from an interface must follow the structure provided by their interface.

interface Product {
    id: number,
    name: string,
    description: string,
    price: number;
    //posso specificare anche funzioni:
    display(): void;
}

var product1: Product = {
    id: 123,
    name: "Prodotto 1",
    description: "il primo prodotto di una serie di prodotti",
    price: 50,
    display(): void {
        console.log(this.id + " " + this.name);
    }
}

console.log("Functional Interfaces");
interface Add {
    (x: number, y: number): void; //posso anche fare a meno di specificare il tipo di ritorno, e definirlo quando la implemento
    //in alternativa qui posso segnarlo come void, e poi quando la implemento posso specificare che tornerà un number
    //non posso fare l'inverso
}

interface Sub {
    (x: number, y: number): number;
}

var add: Add;
var sub: Sub;

//se provo a cambiare il tipo degli argomenti da errore, idem se provo ad aggiungere un parametro
add = function (x: number, y: number): void {
    console.log(x + y);
}
sub = function (x: number, y: number): number {
    return x - y;
}

console.log("Interfacce Array");

interface StudentName {
    [index: number]: string //specifico che tipo di index voglio per questo array e che tipo di data conterrà
}

var studentNames: StudentName = ["John", "Bob", "Smith"];

//String type for intex array:

interface StudentScore {
    [index: string]: number; //object with unlimited properties due to index string. l'ho chiamato index ma può chiamarsi in qualunque modo
}

var studentScore: StudentScore = {}; //le graffe rappresentano un oggetto con un numero illimitato di properties
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
//Car estenderà due interfacce
interface Exterior {
    color: string;
    numOfDoors: number;
}

interface Interior {
    seats: number;
    auto: boolean;
}

interface Car extends Exterior, Interior {
    make: string;
    model: string;
    year: number;
}

var myCar: Car = {
    make: "Honda",
    model: "Civic",
    year: 2020,
    color: "Balck",
    numOfDoors: 5,
    seats: 5,
    auto: true
}

interface Book {
    title: string;
    isbn: string;
    description: string;
    price: number;
}

var myBook: Book = {
    title: "My new Book",
    isbn: "A12B34C",
    description: "description of my new book",
    price: 20
}