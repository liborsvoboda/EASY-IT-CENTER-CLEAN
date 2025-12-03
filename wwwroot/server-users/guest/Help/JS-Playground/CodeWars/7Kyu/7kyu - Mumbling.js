function accum(s) {
	var chars = s.split("");
    var words = new Array(s.length);
    for(i = 0; i < s.length; i++) {
        words[i] = chars[i].toUpperCase() + chars[i].toLowerCase().repeat(i);
    }
    return words.join("-");
}