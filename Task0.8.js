function numberToHoursAndMinutes(num){
    let hours = Math.floor(num / 60);
    let minutes = Math.floor(num % 60);
    return hours + " hour(s)" + "," + minutes + " minute(s)";
}

console.log(numberToHoursAndMinutes(133));