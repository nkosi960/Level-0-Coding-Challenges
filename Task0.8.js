function numberToHoursAndMinutes(num){

    let hours = Math.floor(num / 60);
    let minutes = Math.floor(num % 60);

    if (hours === 1 && minutes === 0){
        hours = 0;
        minutes = 60;
    }
    
    const pluralSingularHours = hours > 1 ? " hours" : " hour";
    const pluralSingularMinutes = minutes > 1 ? " minutes" : " minute";
    return hours + pluralSingularHours + ", " + minutes + pluralSingularMinutes;
}

console.log(numberToHoursAndMinutes(60));
