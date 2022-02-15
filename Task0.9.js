function vowelsFromString(text){
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelsFound = "";
    for (let vowel of text.toLowerCase()){
        if (vowels.includes(vowel) && !vowelsFound.includes(vowel)){
                vowelsFound += vowel + ",";
        }
    }
    vowelsFound = vowelsFound.length ? vowelsFound.substring(0 ,vowelsFound.length - 1) : "no vowels found!";
    console.log("Vowels: " + vowelsFound);
}

vowelsFromString("Umuzi");