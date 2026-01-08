function countVowel(str) {
    let count = 0;
    let vowel = " ";

    for(const char of str){
        if(
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"){
            count++;
            vowel += char +" ";
        }
    }
    console.log("vowel", vowel)
    return count;
};

console.log("total", countVowel("rehan ahmad"))