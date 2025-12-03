// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
/* 
DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases: 
Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. 
In RNA Thymine is replaced by another nucleic acid Uracil ('U')
 */



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


function DNAtoRNA(dna) {
    let result = []
    for (let i = 0; i <= dna.length; i++) {
        if (dna[i] !== 'T') {
            result.push(dna[i])
        } else result.push("U");
    }
    return result.join('');
}

const DNAtoRNA = dna => dna.replace(/T/g, 'U');