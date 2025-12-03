function findShort(s) {
    var words = s.split(' ');
    var minCount = words[0].length;
    for(i = 1; i < words.length; i++) {
        if(words[i].length < minCount)
            minCount = words[i].length;
    }
    return minCount;
}