/*  


Verbos Regulares

The conjugations for all Spanish regular verbs can be built by using the three forms for verbs ending in -ar, -er and -ir.

Create a function that takes a verb as string, and returns a string with the six person/number combinations (like in the examples). Watch out for verbs ending in -ir (check the notes). Try programming the construction rather than forming structures with arrays.

Examples
espVerb("pasar") ➞ "Yo paso, tú pasas, él pasa, nosotros pasamos, vosotros pasáis, ellos pasan."

espVerb("unir") ➞ "Yo uno, tú unes, él une, nosotros unimos, vosotros unís, ellos unen."

espVerb("correr") ➞ "Yo corro, tú corres, él corre, nosotros corremos, vosotros corréis, ellos corren."
The smallest category of regular Spanish verbs is those that end in -ir. To conjugate them, remove the infinitive ending and then add one of the following verb endings:

...	Singular	Plural
1st person	yo -o	nosotros -imos
2nd person	tú -es	vosotros -ís
3rd person	él -e	ellos -en

Notes
This is for European Spanish, so the second person plural is vosotros pasais, not ustedes pasan
We're only using regular Spanish verbs. So no yo conozco, tú conoces, etc.
Pay attention to the accent marks! Feel free to copy them from the test page if you want.

*/





//#############################################################
//#                        MY SOLUTION    1                 #
//#############################################################



function espVerb(verb) {
    const pronouns = ['Yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'];
    const ends = {
        ar: ['o', 'as', 'a', 'amos', 'áis', 'an'],
        ir: ['o', 'es', 'e', 'imos', 'ís', 'en'],
        er: ['o', 'es', 'e', 'emos', 'éis', 'en'],
    }
    const form = verb.substr(-2);
    const stem = verb.substr(0, verb.length - 2);
    return pronouns.reduce((result, pronoun, index) => {
        return `${result}${pronoun} ${stem}${ends[form][index]}${
		  index === pronouns.length - 1 ? '.' : ', '}`;
    }, '');
}




//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function espVerb(verb) {
    const pronouns = ['Yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'];
    const ends = {
        ar: ['o', 'as', 'a', 'amos', 'áis', 'an'],
        ir: ['o', 'es', 'e', 'imos', 'ís', 'en'],
        er: ['o', 'es', 'e', 'emos', 'éis', 'en'],
    }
    const form = verb.substr(-2);
    const stem = verb.substr(0, verb.length - 2);
    return pronouns.reduce((result, pronoun, index) => {
        return `${result}${pronoun} ${stem}${ends[form][index]}${
		  index === pronouns.length - 1 ? '.' : ', '}`;
    }, '');
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function espVerb(verb) {
    let vF = verb[verb.length - 2]
    let e = vF === "a" ? ["o", "as", "a", "amos", "áis", "an"] :
        vF === "e" ? ["o", "es", "e", "emos", "éis", "en"] : ["o", "es", "e", "imos", "ís", "en"]
    let b = verb.slice(0, verb.length - 2)
    return `Yo ${b}${e[0]}, tú ${b}${e[1]}, él ${b}${e[2]}, nosotros ${b}${e[3]}, vosotros ${b}${e[4]}, ellos ${b}${e[5]}.`
}




//#############################################################
//#                        MY SOLUTION    4                   #
//#############################################################


const espVerb = v => {
    let [p, s, t] = [v.match(/\w+(?=er|ar|ir)/g)[0],
        ['o', 'es', 'e', 'imos', 'ís', 'en'],
        'Yo 0, tú 1, él 2, nosotros 3, vosotros 4, ellos 5.'
    ]
    s = s.map(e => {
        switch (e) {
            case 'o':
                return e
            case 'e':
                return /ar$/g.test(v) ? 'a' : e
            case 'en':
                return /ar$/g.test(v) ? 'an' : e
            case 'es':
                return /ar$/g.test(v) ? 'as' : e
            case 'ís':
                return /ar$/g.test(v) ? 'áis' : /er$/g.test(v) ? 'éis' : e
            case 'imos':
                return /ar$/g.test(v) ? 'amos' : /er$/g.test(v) ? 'emos' : e
        }
    })
    return t.replace(/(\d)/g, i => p + s[i])
}







//#############################################################
//#                        MY SOLUTION    5                   #
//#############################################################



const espVerb = verbo => {
    const pron = 'Yo tú él nosotros vosotros ellos'.split(' ');
    const desi = 'o s  mos is n'.split(' ');

    const raiz = verbo.slice(0, -2);
    const vocal_tem = {
        a: ' a a a á a'.split(' '),
        e: ' e e e é e'.split(' '),
        i: ' e e i í e'.split(' ')
    }[verbo[verbo.length - 2]];

    let res = [];
    for (let i = 0; i < 6; i++)
        res.push(`${pron[i]} ${raiz}${vocal_tem[i]}${desi[i]}`);

    return res.join(', ').replace(/íi/, 'í') + '.';
};




//#############################################################
//#                        MY SOLUTION    6                   #
//#############################################################




function espVerb(verb) {
    let stem = verb.slice(0, -2)
    let x2 = verb.slice(-2) == 'ar' ? 'a' : 'e'
    let x4 = verb.slice(-2)[0]
    let x5 = x4 == 'a' ? 'ái' : x4 == 'e' ? 'éi' : 'í'
    let reg = {
        Yo: 'o',
        tú: `${x2}s`,
        él: `${x2}`,
        nosotros: `${x4}mos`,
        vosotros: `${x5}s`,
        ellos: `${x2}n`
    }
    return [...Object.keys(reg)].map(p =>
        `${p} ${stem}${reg[p]}`).join(', ') + '.'
}