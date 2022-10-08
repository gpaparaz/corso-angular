var email = "testa@mail.it";
var atposition = email.indexOf('@');
var dotposition = email.indexOf('.');
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
