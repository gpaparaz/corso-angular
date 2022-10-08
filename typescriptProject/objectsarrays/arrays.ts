var courses: any = ["Angular", "React", "ES6"];
courses.push("Spring");
courses.push(10); //posso inserire un numero solo se l'array lo definisco come any, altrimenti mi da errore

for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

var levels: number[] = [20, 30, 10, 25, 12, 30, 200]
console.log(levels.toString());
console.log(levels.join(" "));
console.log(levels.slice(3, 5));//taglia dopo il 3 fino a prima del 5
levels.splice(2, 3, 88);
console.log(levels.toString);
