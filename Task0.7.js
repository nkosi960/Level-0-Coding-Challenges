function celciusToFahrenheit(celcius){
    var fahrenheit = (celcius * 9 / 5) + 32;
    return fahrenheit;
}

function fahrenheitToCelcius(fahrenheit){
    var celcius = (fahrenheit - 32) * 5 / 9;
    return celcius;
}

console.log(celciusToFahrenheit(80));
console.log(fahrenheitToCelcius(80));