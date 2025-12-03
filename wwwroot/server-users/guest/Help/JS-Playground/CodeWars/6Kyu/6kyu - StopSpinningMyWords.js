function spinWords(s) {
    var words = s.split(" ");
    for(var i = 0; i < words.length; i++) {
        if(words[i].length >= 5) {
            let wordArray = words[i].split("");
            words[i] = wordArray.reverse().join("");
        }
    }
    return words.join(" ");
}