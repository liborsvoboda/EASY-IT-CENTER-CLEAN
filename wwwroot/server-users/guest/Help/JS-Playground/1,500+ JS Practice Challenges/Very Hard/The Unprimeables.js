/*  
The Unprimeables

In this challenge, you have to establish if an integer is an Unprimeable number. To be Unprimeable, when a single digit of a composite number is exchanged with any digit from 0 up to 9, the new number obtained must not be a prime:

number = 14

Numbers obtained changing the first digit (1):

04 (4), 14, 24, 34, 44, 54, 64, 74, 84, 94
// Leading zeros are not considered

Numbers obtained changing the second digit (4):

10, 11, 12, 13, 14, 15, 16, 17, 18, 19

// Among the two series, 11, 13, 17 and 19 are primes
// 14 is not an unprimeable number

number = 200

Numbers obtained changing the first digit (2):

000 (0), 100, 200, 300, 400, 500, 600, 700, 800, 900
// Leading zeros are not considered

Numbers obtained changing the second digit (0):

200, 210, 220, 230, 240, 250, 260, 270, 280, 290

Numbers obtained changing the third digit (0):

200, 201, 202, 203, 204, 205, 206, 207, 208, 209

// Among the three series, there aren't primes
// 200 is an unprimeable number (the first of the series)
Given a non-negative integer num, implement a function that returns:

The string "Prime Input" if num is prime.
The string "Unprimeable" if num is Unprimeable (accordingly to the above instructions).
If num is not Unprimeable, an array containing all the primes obtained after exchanging its digits, without duplicates and sorted ascendingly.
Examples
isUnprimeable(200) ➞ "Unprimeable"

isUnprimeable(14) ➞ [11, 13, 17, 19]

isUnprimeable(2) ➞ "Prime Input"


Notes
When changing the first digit, leading zeros are not considered part of the new number obtained.
Despite is still an unproofed theory, as far as we know every even number (except 2) is not prime. You are free to choose to use this discriminant when you check the number obtained after the change of a digit.
The same concept can be applied also to primes. Primes that do not return other primes when their single digits are changed (apart from the number itself) are called Weakly Primes: the first prime of this series is 294001.
*/



//#############################################################
//#                        MY SOLUTION    1                 #
//#############################################################



const isUnprimeable = (n, k = `${n}`, x = []) => {
    const prm = n => {
        for (let i = 2, m = Math.sqrt(n); i <= m; i++)
            if (n % i === 0) return false;
        return n > 1;
    }
    if (prm(n)) return "Prime Input";
    for (let i = 0, m = k.length; i < m; i++) {
        for (let j = 0, copy = [...k]; j < 10; j++) {
            copy[i] = j;
            x.push(+copy.join(""));
        }
    }
    x = [...new Set(x.filter(v => prm(v)))].sort((a, b) => a - b);
    return x.length ? x : "Unprimeable";
}




//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


const isUnprimeable = n => (
    p = x => { for (i = x; x % --i;); return x > 1 && i < 2 },
    p(n) ? 'Prime Input' : [...n + ''].map((_, j, n) => [...2 ** 29 + '4'].map(
        d => p((m = [...n], m[j] = d, m = m.join ``)) && P.push(+m)
    ), P = []) && P.length ? P.sort((a, b) => a - b) : 'Unprimeable'
)




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function isUnprimeable(num) {
    const isPrime = n => n === 1 ? !1 : [...Array(n)].every((_, i) => i === n - 1 || !i ? !!1 : n % (i + 1))
    const posPrimes = [...
        '' + num
    ].map((_, i, a) => [...
        '0' + 123456789
    ].map((n, _) => {
        let inAr = [...a];
        (n === '0' && !i) ? inAr.splice(i, 1): inAr.splice(i, 1, n);
        return isPrime(+inAr.join('')) ? +inAr.join('') : !1;
    }).filter(x => x)).flat(1);
    return isPrime(num) ? 'Prime Input' : !posPrimes.length ? 'Unprimeable' : posPrimes.sort((a, b) => a - b);
}