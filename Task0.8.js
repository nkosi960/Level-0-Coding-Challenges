function numberToHoursAndMinutes(num){
    const hours = Math.floor(num / 60);
    const minutes = Math.floor(num % 60);
    const pluralSingularHours = hours > 1 ? " hours" : " hour";
    const pluralSingularMinutes = minutes > 1 ? " minutes" : " minute";
    return hours + pluralSingularHours + "," + minutes + pluralSingularMinutes;
}

console.log(numberToHoursAndMinutes(133));
