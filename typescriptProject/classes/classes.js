var Passenger = /** @class */ (function () {
    //costruttore:
    function Passenger(firstName, lastName, frequentFlyerNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerNo);
    };
    return Passenger;
}());
var passenger = new Passenger("John", "Smith", 5);
console.log(passenger.firstName + " " + passenger.lastName + " " + passenger.frequentFlyerNo);
passenger.display();
var passenger2 = new Passenger("Bob", "Marley", 15);
passenger2.display();
console.log("display datas with for in loop");
for (var item in passenger) {
    if (item != null) {
        console.log(item); //key
        console.log(passenger[item]); //value
    }
}
for (var item in passenger) {
    if (passenger[item] instanceof Function) { //tutto è una istanza di Functions
        continue;
    }
    else {
        console.log(item);
        console.log(passenger[item]);
    }
}
var Flight = /** @class */ (function () {
    function Flight(flightNo, from, to, flightTime) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
        this.flightTime = flightTime;
    }
    Flight.prototype.display = function () {
        console.log(this.flightNo, this.from, this.to, this.flightTime);
    };
    return Flight;
}());
var flight = new Flight(5, "From", "To", 120);
var Organizer = /** @class */ (function () {
    function Organizer(id, name) {
        this.id = id;
        this.name = name;
    }
    Organizer.prototype.display = function () {
        console.log(this.id, this.name);
    };
    return Organizer;
}());
var Events = /** @class */ (function () {
    function Events(id, name, description, starttime, endtime) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.starttime = starttime;
        this.endtime = endtime;
    }
    Events.prototype.display = function () {
        console.log(this.id, this.name, this.description, this.starttime, this.endtime);
    };
    return Events;
}());
var Venue = /** @class */ (function () {
    function Venue(id, name, description, address) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }
    Venue.prototype.display = function () {
        console.log(this.id, this.name, this.description, this.address);
    };
    return Venue;
}());
var organizer = new Organizer(1, 'organizer');
var events = new Events(1, 'Event', 'description', 'startime', 'endtime');
var venue = new Venue(1, 'Venue', 'decription', 'address');
organizer.display();
events.display();
venue.display();
console.log("accedere a campi privati e pubblici");
var Student = /** @class */ (function () {
    function Student() {
        this.name = "John";
    }
    Object.defineProperty(Student.prototype, "getLastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setLastName", {
        set: function (lastName) {
            this._lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.display = function () {
        console.log(this._lastName);
    };
    return Student;
}());
var student = new Student();
student.setLastName = "Bob";
student.display();
