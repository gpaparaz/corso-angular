function hello(name: string): string {
    return "Hello";
}

console.log(hello("Gio"));

function add(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(add(2, 3));

function display(id: number, name: string, role?: string) {
    //tramite ?  dico che il parametro è opzionale
    console.log("Id", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
}
console.log(display(1, "User", "Admin"));

var x = add(5, 20);
console.log(x);

function calculator(): any {
    function subtract(num1: number, num2: number): number {
        return num1 - num2;
    }
    return subtract;
}

var sub = calculator(); //calculator torna subtract function
console.log(sub(20, 5));
//oppure posso fare così:
console.log(calculator()(20, 5));

console.log("Anonymus function");

var helloworld = function () {
    return "hello world";
}

console.log(helloworld);

var hello2 = function (name: string): string {
    return "hello " + name;
}

console.log(hello2("Gio"));

