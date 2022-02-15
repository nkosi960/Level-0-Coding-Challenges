function similarChars(text1, text2){
    let sameLetters = "";
    for (let i of text1.toLowerCase()){
        if (text2.toLowerCase().includes(i) && !sameLetters.includes(i)){
            sameLetters += i + ",";
        }
    }
    console.log("Common letters: " + sameLetters.substring(0, sameLetters.length - 1));
}

similarChars("house", "computEr");