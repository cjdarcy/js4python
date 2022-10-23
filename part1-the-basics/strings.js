function removeVowels(s) {
    const vowels = 'aeiouAEIOU';
    let sWithoutVowels = "";
    for (let eachChar of s) {
        if (vowels.indexOf(eachChar) === -1) {
            sWithoutVowels = sWithoutVowels + eachChar
        }
    }
    return sWithoutVowels
}

console.log(removeVowels('JavaScript'))
