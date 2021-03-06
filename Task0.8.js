function numberToHoursAndMinutes(num){

    let hours = Math.floor(num / 60);
    let minutes = Math.floor(num % 60);

    if (hours === 1 && minutes === 0){
        hours = 0;
        minutes = 60;
    }
    
    const pluralSingularHours = hours === 1 ? " hour" : " hours";
    const pluralSingularMinutes = minutes === 1 ? " minute" : " minutes";
    return hours + pluralSingularHours + ", " + minutes + pluralSingularMinutes;
}

console.log(numberToHoursAndMinutes(60));
