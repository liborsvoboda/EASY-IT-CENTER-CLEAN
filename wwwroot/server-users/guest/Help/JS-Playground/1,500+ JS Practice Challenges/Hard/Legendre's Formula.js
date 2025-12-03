/*

Legendre's Formula

Legendre's formula finds the exponent of the largest power of some prime p that divides (is a factor of) the factorial of some number n.

Legendre's formula example (p = 2 and n = 27):

Legendre's Formula

So 2^23 is the largest power of 2 that divides 27!.

The formula returns the sum of many fractions (rounded down) with n as the numerator and a steadily increasing power of p as the denominator, stopping when it exceeds the numerator.

To illustrate:

p = 5
n = 100

int(100/5) + int(100/25)
// No 100/125 because 125 > 100.
p = 2
n = 128

int(128/2) + int(128/4) + int(128/8) + ... + int(128/128)
Given p and n, return the result of Legendre's formula (see Resources).

Examples
Legendre(5, 100) ➞ 24

Legendre(2, 128) ➞ 127

Legendre(3, 50) ➞ 22


Notes
p and n will be positive integers.
When p exceeds n, the result should be 0.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


using System.Linq;
using System;

public class Program {
    public static int Legendre(int p, int n) {
        if (p < 2 || Enumerable.Range(2, p - 2).Any(x => p % x == 0))
            throw new InvalidOperationException("p must be a prime number");

        int sum = 0;
        for (int i = 1; i <= n; i++) {
            int divisor = (int) Math.Pow(p, i);
            if (divisor > n) break;
            sum += n / divisor;
        }
        return sum;
    }
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


using System;

public class Program {
    public static int Legendre(int p, int n) {
        int sum_fractions = 0;
        int power = 1;
        int denominator = p;
        while (denominator <= n) {
            sum_fractions += n / denominator;
            power++;
            denominator = (int) Math.Pow(p, power);
        }
        return sum_fractions;
    }
}




//#############################################################
//#  SOLUTION 3
//#############################################################


using System;

public class Program {
    public static int Legendre(int p, int n) {
        int leg = 0, den = p;
        while (den <= n) {
            leg += n / den;
            den *= p;
        }
        return leg;
    }
}