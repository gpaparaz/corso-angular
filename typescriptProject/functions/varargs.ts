var product = function (...nums) {
    //nums rappresenta qualsiasi numero di parametri, ad esempio in caso di array
    var result = 1;
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
}

console.log(product(2, 3, 4, 5));

//in alternativa potrei anche fare
// function(num1:number, num2:number, ...nums:number[])