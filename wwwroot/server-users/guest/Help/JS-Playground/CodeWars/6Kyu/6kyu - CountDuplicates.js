function duplicateCount(text){
    return (text.toUpperCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}