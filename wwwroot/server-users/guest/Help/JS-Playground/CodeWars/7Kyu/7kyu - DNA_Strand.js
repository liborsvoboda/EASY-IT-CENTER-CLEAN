function DNAStrand(dna){
    let comp = "";
    for(i = 0; i < dna.length; i++) {
        if(dna[i] == 'T') {
            comp += 'A';
        } else if(dna[i] == 'A') {
            comp += 'T';
        } else if(dna[i] == 'G') {
            comp += 'C';
        } else if(dna[i] == 'C') {
            comp += 'G';
        }
    }
    return comp;
}