var hello = (): string => {
    return "hello";
};

console.log(hello);
console.log(hello());

var hello2 = (name: string): string => {
    return "hello " + name;
};
console.log(hello2("Gio"));

var multiply = (num1: number, num2: number): number => {
    return num1 * num2;
}
var myarray: Array<any> = [];
for (var i = 0; i < 10; i++) {
    myarray.push((): number => {
        return i;
    });
}

for (var i = 0; i < 10; i++) {
    console.log(myarray[i]());
}

console.log("numeri primi:");


var prime = (num: number): string => {
    var isprime: boolean = true;

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
