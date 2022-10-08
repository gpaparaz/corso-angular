var hello = function () {
    return "hello";
};
console.log(hello);
console.log(hello());
var hello2 = function (name) {
    return "hello " + name;
};
console.log(hello2("Gio"));
var multiply = function (num1, num2) {
    return num1 * num2;
};
var myarray = [];
for (var i = 0; i < 10; i++) {
    myarray.push(function () {
        return i;
    });
}
for (var i = 0; i < 10; i++) {
    console.log(myarray[i]());
}
console.log("numeri primi:");
var prime = function (num) {
    // if (num % 5 === 0) {
    //     console.log(num + " is a number prime");
    // }
    // else if (num % 1 === 0) {
    //     console.log(num + " is a number prime");
    // }
    // else if (num % 2 === 0) {
    //     console.log(num + " is a number prime");
    // }
    // else if (num % 3 === 0) {
    //     console.log(num + " is a number prime");
    // }
    // else if (num % 5 === 0) {
    //     console.log(num + " is a number prime");
    // }
    // else if (num % 7 === 0) {
    //     console.log(num + " is a number prime");
    // }
    // else {
    //     console.log(num + " is not a number prime");
    // }
    var isprime = true;
    for (var i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            isprime = false;
            break;
        }
    }
    if (isprime) {
        return num + " is a Prime Number";
    }
    else {
        return num + " is not a Prime Number";
    }
};
console.log(prime(10));
var isprimenum = function (num) {
    var isprime = true;
    for (var i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            isprime = false;
            break;
        }
    }
    if (isprime) {
        return num + " is a Prime Number";
    }
    else {
        return num + " is not a Prime Number";
    }
};
