/*

Kinetic Energy
Kinetic energy can be calculated with the following formula:

KE = 1/2mv²

m is mass in kg
v is velocity in m/s
KE is kinetic energy in J
Return the Kinetic Energy in Joules, given the mass and velocity. For the purposes of this challenge, round answers to the nearest integer.

Examples
kineticEnergy(60, 3) ➞ 270

kineticEnergy(45, 10) ➞ 2250

kineticEnergy(63.5, 7.35) ➞ 1715
Notes
Expect only positive numbers for inputs.



*/






/*  Solution 1   */



function kineticEnergy(m, v) {
    return Math.round(0.5 * m * (v ** 2))
}


/*  Solution 2   */

const kineticEnergy = (m, v) => Math.round((m * 0.5) * v ** 2, 1);

const kineticEnergy = (m, v) => Math.round((m * v * v) / 2);

const kineticEnergy = (m, v) => Math.round(m * v ** 2 / 2)

kineticEnergy = (m, v) => Math.round(m * (v ** 2) / 2);



/*  Solution 3   */


function kineticEnergy(m, v) {
    var KE = 1;
    if (m >= 0 && v >= 0) {
        return Math.round(KE *= (m * v * v) / 2)
    } else {
        return "Please pass postive numbers"
    }
}



function kineticEnergy(m, v) {
    return Math.round(1 / 2 * m * (Math.pow(v, 2)));
}