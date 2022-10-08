class Passenger {
    firstName: string;
    lastName: string;
    frequentFlyerNo: number;

    //costruttore:
    constructor(firstName: string, lastName: string, frequentFlyerNo: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }

    display() {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerNo);

    }
}

var passenger = new Passenger("John", "Smith", 5);
console.log(passenger.firstName + " " + passenger.lastName + " " + passenger.frequentFlyerNo);
passenger.display();
var passenger2 = new Passenger("Bob", "Marley", 15);
passenger2.display();

console.log("display datas with for in loop");

for (let item in passenger) {
    if (item != null) {
        console.log(item); //key
        console.log(passenger[item]); //value
    }
}

for (let item in passenger) {
    if (passenger[item] instanceof Function) { //tutto è una istanza di Functions
        continue;
    }
    else {
        console.log(item);
        console.log(passenger[item]);
    }
}

interface IFlight {
    flightNo: number;
    from: string;
    to: string;
}

class Flight implements IFlight {
    flightNo: number;
    from: string;
    to: string;
    flightTime: number;

    constructor(flightNo: number, from: string, to: string, flightTime: number) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
        this.flightTime = flightTime;
    }
    display() {
        console.log(this.flightNo, this.from, this.to, this.flightTime);
    }
}

var flight = new Flight(5, "From", "To", 120);


interface IEventManager {
    id: number;
    name: string;

    display(): void;
}

class Organizer implements IEventManager {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    display(): void {
        console.log(this.id, this.name);
    }
}

class Events implements IEventManager {
    id: number;
    name: string;
    description: string;
    starttime: string;
    endtime: string;

    constructor(id: number, name: string, description: string, starttime: string, endtime: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.starttime = starttime;
        this.endtime = endtime;
    }

    display(): void {
        console.log(this.id, this.name, this.description, this.starttime, this.endtime);
    }
}

class Venue implements IEventManager {
    id: number;
    name: string;
    description: string;
    address: string;

    constructor(id: number, name: string, description: string, address: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }

    display(): void {
        console.log(this.id, this.name, this.description, this.address);
    }
}

var organizer = new Organizer(1, 'organizer');
var events = new Events(1, 'Event', 'description', 'startime', 'endtime');
var venue = new Venue(1, 'Venue', 'decription', 'address');

organizer.display();
events.display();
venue.display();


console.log("accedere a campi privati e pubblici");

class Student {
    public readonly name: string = "John";
    //con readonly devo definire il valore del campo qui, non posso farlo fuori dalla classe
    private _lastName: string;

    get getLastName(): string {
        return this._lastName;
    }

    set setLastName(lastName: string) {
        this._lastName = lastName
    }

    display() {
        console.log(this._lastName);
    }
}

var student = new Student();
student.setLastName = "Bob";
student.display();


class Check {
    static bankName: string = "Intesa San Paolo"; //con static potrò accedere a questo oggendo usando il nome della classe
    customerName: string;
    accountNo: number;
    routingNo: number;
}

var check = new Check();
Check.bankName = "Montepaschi";
console.log(Check.bankName);

class Calculator {
    static sum(num1: number, num2: number): number {
        return num1 + num2;
    }

    static sub(num1: number, num2: number): number {
        return num1 - num2;
    }

    static molt(num1: number, num2: number): number {
        return num1 * num2;
    }
}

Calculator.sum(3, 2);



