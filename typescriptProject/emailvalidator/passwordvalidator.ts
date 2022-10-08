var password: string = "Test@123";
if (password.charCodeAt(0) >= 65 && password.charCodeAt(0) <= 90) {
    console.log("password is valid");
}
else {
    console.log("invalid password" + password);
}