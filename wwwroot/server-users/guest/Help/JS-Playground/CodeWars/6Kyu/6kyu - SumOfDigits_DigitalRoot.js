function digital_root(n) {
    var nStr = n.toString();
    var sum = 0;
    for(var i = 0; i < nStr.length; i++) {
        sum += parseInt(nStr[i]);
    }
    if(sum <= 9) {
        return sum;
    } else {
      return digital_root(sum);
    }
}
