class BMW {
    make: string;
    model: string;
    year: string;

    constructor(make: string, model: string, year: string) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    commonEngineFunctionality() {
        console.log("common fun");
    }
    start() {
        console.log("Start Bmw");
    }

    stop() {
        console.log("Stop Bmw");
    }
}

class ThreeSeries extends BMW {
    cruiseControl: boolean;

    cruiseControlFun() {
        this.cruiseControl = true;
        console.log("cruising true");
    }

    constructor(make: string, model: string, year: string, cruiseControl: boolean) {
        super(make, model, year);
        this.cruiseControl = cruiseControl;
    }

    start() {
        console.log("ThreeSeries start");
    }

    stop() {
        console.log("ThreeSeries stop");
    }
}

class FiveSeries extends BMW {
    parkingAssist: boolean;
}

var threeSeries = new ThreeSeries("make", "serie tre", "2010", false);

for (var item in threeSeries) {
    console.log(item + " " + threeSeries[item]);
}

threeSeries.start();

class TouchScreenLaptop {
    ram: string;
    hd: string;
    processor: string;
    constructor(ram: string, hd: string, processor: string) {
        this.ram = ram;
        this.hd = hd;
        this.processor = processor;
    }
    scroll() {
        console.log("TouchScreen scroll");
    };
    click() {
        console.log("TouchScreen click");
    };
};

class HPLaptop extends TouchScreenLaptop {
    selfRecovery: boolean;
    constructor(ram: string, hd: string, processor: string, selfRecovery: boolean) {
        super(ram, hd, processor);
        this.selfRecovery = selfRecovery;
    };
    scroll() {
        console.log("HP scroll");
    }

    display() {
        console.log("HP details: RAM : " + this.ram + " HD : " + this.hd + " Processor : " + this.processor + " Self Recovery enabled : " + this.selfRecovery);
    }

};


class DellLaptop extends TouchScreenLaptop {
    mobileAccess: boolean;

    constructor(ram: string, hd: string, processor: string, mobileAccess: boolean) {
        super(ram, hd, processor);
        this.mobileAccess = mobileAccess;
    };
    scroll() {
        console.log("Dell scroll");
    };
    display() {
        console.log("HP Details: RAM : " + this.ram + "HD : " + this.hd + "Processor : " + this.processor + "Mobile Access enabled : " + this.mobileAccess);
    }
};


var hpLaptop = new HPLaptop("32GB", "HP", "Intel", true);
var dellLaptop = new DellLaptop("16GB", "DELL", "AMD", true);

hpLaptop.display();
hpLaptop.scroll();
hpLaptop.click();
dellLaptop.display();
dellLaptop.scroll();
dellLaptop.click();

