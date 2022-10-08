var email: string = "testa@mail.it";
var atposition: number = email.indexOf('@');
var dotposition: number = email.indexOf('.');

if (atposition == -1 || dotposition == -1) {
    console.log("invalid email");
}
else {
    console.log("email is valid");
}

var data = prompt("pleas enter your email");
if (data == null) {
    console.log("email not valid");
}
else if (atposition == -1 || dotposition == -1) {
    console.log("invalid email");
}
else {
    console.log("email is valid");
}
