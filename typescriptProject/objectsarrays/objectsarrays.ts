var student = {
    name: "john",
    surname: "smith",
    score: 90
};

console.log(student.name);

for (var item in student) {
    // console.log(item);
    console.log(student[item]);
}

var courses: any = ["Angular", "React", "ES6"];
courses.push("Spring");
courses.push(10); //posso inserire un numero solo se l'array lo definisco come any, altrimenti mi da errore

for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

console.log("destrutturare un array");

var x = courses[0];
var y = courses[1];

var [a, b, c] = courses;
console.log(a);
console.log(b);
console.log(c);

console.log("destrutturare un oggetto");

// var { name, surname } = student;
// console.log(name + " " + surname);

var employee = {
    id: 1,
    completeName: "john",
    salary: 25000
}
for (var j in employee) {
    console.log(employee[j]); //stampa value
}

var { id, completeName, salary } = employee;
console.log(id);
console.log(completeName);
console.log(salary);