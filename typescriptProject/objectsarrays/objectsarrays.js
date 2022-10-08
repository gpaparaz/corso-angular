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
var courses = ["Angular", "React", "ES6"];
courses.push("Spring");
courses.push(10); //posso inserire un numero solo se l'array lo definisco come any, altrimenti mi da errore
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
console.log("destrutturare un array");
var x = courses[0];
var y = courses[1];
var a = courses[0], b = courses[1], c = courses[2];
console.log(a);
console.log(b);
console.log(c);
