/*


Transcribe To mRNA
Transcribe the given DNA strand into corresponding mRNA - a type of RNA, that will be formed from DNA after transcription. DNA has the bases A, T, G and C, while RNA converts to U, A, C and G respectively.

Examples
dnaToRna("ATTAGCGCGATATACGCGTAC") ➞ "UAAUCGCGCUAUAUGCGCAUG"

dnaToRna("CGATATA") ➞ "GCUAUAU"

dnaToRna("GTCATACGACGTA") ➞ "CAGUAUGCUGCAU"
Notes
Transcription is the process of making complementary strand.
A, T, G and C in DNA converts to U, A, C and G respectively in mRNA.


*/






/*  Solution 1   */


const dnaToRna = d => {
    p = { A: 'U', T: 'A', G: 'C', C: 'G' }
    return [...d].reduce((v, k) => v + p[k], '')
}


/*  Solution 2   */

function dnaToRna(dna) {
    let mapping = { 'A': 'U', 'T': 'A', 'C': 'G', 'G': 'C' }
    return dna.split('').map(x => mapping[x]).join('')
}



/*  Solution 3   */


const dnaToRna = dna => {
    const rna = { 'A': 'U', 'T': 'A', 'G': 'C', 'C': 'G' };
    return [...dna].map(base => rna[base]).join('');
}



/*  Solution 4   */




const dnaToRna = dna => dna.replace(/[ATGC]/g, m => {
    switch (m) {
        case 'A':
            return 'U';
        case 'T':
            return 'A';
        case 'G':
            return 'C';
        case 'C':
            return 'G';
    }
});