var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BMW = /** @class */ (function () {
    function BMW(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    BMW.prototype.commonEngineFunctionality = function () {
        console.log("common fun");
    };
    BMW.prototype.start = function () {
        console.log("Start Bmw");
    };
    BMW.prototype.stop = function () {
        console.log("Stop Bmw");
    };
    return BMW;
}());
var ThreeSeries = /** @class */ (function (_super) {
    __extends(ThreeSeries, _super);
    function ThreeSeries(make, model, year, cruiseControl) {
        var _this = _super.call(this, make, model, year) || this;
        _this.cruiseControl = cruiseControl;
        return _this;
    }
    ThreeSeries.prototype.cruiseControlFun = function () {
        this.cruiseControl = true;
        console.log("cruising true");
    };
    ThreeSeries.prototype.start = function () {
        console.log("ThreeSeries start");
    };
    ThreeSeries.prototype.stop = function () {
        console.log("ThreeSeries stop");
    };
    return ThreeSeries;
}(BMW));
var FiveSeries = /** @class */ (function (_super) {
    __extends(FiveSeries, _super);
    function FiveSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FiveSeries;
}(BMW));
var threeSeries = new ThreeSeries("make", "serie tre", "2010", false);
for (var item in threeSeries) {
    console.log(item + " " + threeSeries[item]);
}
threeSeries.start();
var TouchScreenLaptop = /** @class */ (function () {
    function TouchScreenLaptop(ram, hd, processor) {
        this.ram = ram;
        this.hd = hd;
        this.processor = processor;
    }
    TouchScreenLaptop.prototype.scroll = function () {
        console.log("TouchScreen scroll");
    };
    ;
    TouchScreenLaptop.prototype.click = function () {
        console.log("TouchScreen click");
    };
    ;
    return TouchScreenLaptop;
}());
;
var HPLaptop = /** @class */ (function (_super) {
    __extends(HPLaptop, _super);
    function HPLaptop(ram, hd, processor, selfRecovery) {
        var _this = _super.call(this, ram, hd, processor) || this;
        _this.selfRecovery = selfRecovery;
        return _this;
    }
    ;
    HPLaptop.prototype.scroll = function () {
        console.log("HP scroll");
    };
    HPLaptop.prototype.display = function () {
        console.log("HP details: RAM : " + this.ram + " HD : " + this.hd + " Processor : " + this.processor + " Self Recovery enabled : " + this.selfRecovery);
    };
    return HPLaptop;
}(TouchScreenLaptop));
;
var DellLaptop = /** @class */ (function (_super) {
    __extends(DellLaptop, _super);
    function DellLaptop(ram, hd, processor, mobileAccess) {
        var _this = _super.call(this, ram, hd, processor) || this;
        _this.mobileAccess = mobileAccess;
        return _this;
    }
    ;
    DellLaptop.prototype.scroll = function () {
        console.log("Dell scroll");
    };
    ;
    DellLaptop.prototype.display = function () {
        console.log("HP Details: RAM : " + this.ram + "HD : " + this.hd + "Processor : " + this.processor + "Mobile Access enabled : " + this.mobileAccess);
    };
    return DellLaptop;
}(TouchScreenLaptop));
;
var hpLaptop = new HPLaptop("32GB", "HP", "Intel", true);
var dellLaptop = new DellLaptop("16GB", "DELL", "AMD", true);
hpLaptop.display();
hpLaptop.scroll();
hpLaptop.click();
dellLaptop.display();
dellLaptop.scroll();
dellLaptop.click();
