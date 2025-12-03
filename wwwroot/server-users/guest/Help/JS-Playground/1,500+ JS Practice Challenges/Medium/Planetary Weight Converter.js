/*

Planetary Weight Converter

In this challenge, you have to convert a weight weighed on a planet of the Solar System to the corresponding weight on another planet.

To convert the weight, you have to divide it by the gravitational force of the planet on which is weighed and multiply the result (the mass) for the gravitational force of the other planet. See the table below for a list of gravitational forces:

weight on planetA / gravitational force of planetA * gravitational force of planetB

Planet	m/s²
Mercury	3.7
Venus	8.87
Earth	9.81
Mars	3.711
Jupiter	24.79
Saturn	10.44
Uranus	8.69
Neptune	11.15
Given a weight weighed on planetA, return the converted value for planetB rounded to the nearest hundredth.

Examples
spaceWeights("Earth", 1, "Mars") ➞ 0.38

spaceWeights("Earth", 1, "Jupiter") ➞ 2.53

spaceWeights("Earth", 1, "Neptune") ➞ 1.14

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



function spaceWeights(planetA, weight, planetB) {
    const GF = {
        "Mercury": 3.7,
        "Venus": 8.87,
        "Earth": 9.81,
        "Mars": 3.711,
        "Jupiter": 24.79,
        "Saturn": 10.44,
        "Uranus": 8.69,
        "Neptune": 11.15
    };
    return +((weight / GF[planetA]) * GF[planetB]).toFixed(2);
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


function spaceWeights(planetA, weight, planetB) {
    let Planet = {
        Mercury: 3.7,
        Venus: 8.87,
        Earth: 9.81,
        Mars: 3.711,
        Jupiter: 24.79,
        Saturn: 10.44,
        Uranus: 8.69,
        Neptune: 11.15
    }
    return +Number(weight / Planet[planetA] * Planet[planetB]).toFixed(2);
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function spaceWeights(planetA, weight, planetB) {
    const planets = new Map();
    planets.set('Mercury', 3.7)
        .set('Venus', 8.87)
        .set('Earth', 9.81)
        .set('Mars', 3.711)
        .set('Jupiter', 24.79)
        .set('Saturn', 10.44)
        .set('Uranus', 8.69)
        .set('Neptune', 11.15);
    return parseFloat(((weight / planets.get(planetA)) * planets.get(planetB)).toFixed(2));
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function spaceWeights(planetA, weight, planetB) {
    let planets = [
        { planet: "Mercury", gravity: 3.7 },
        { planet: "Venus", gravity: 8.87 },
        { planet: "Earth", gravity: 9.81 },
        { planet: "Mars", gravity: 3.711 },
        { planet: "Jupiter", gravity: 24.79 },
        { planet: "Saturn", gravity: 10.44 },
        { planet: "Uranus", gravity: 8.69 },
        { planet: "Neptune", gravity: 11.15 }
    ]

    return Number((weight *
        planets.filter(el => el.planet == planetB).map(el => el.gravity) /
        planets.filter(el => el.planet == planetA).map(el => el.gravity)).toFixed(2));
}





//#############################################################
//#  SOLUTION 5
//#############################################################


function spaceWeights(planetA, weight, planetB) {
    if (planetA === 'Mercury') {
        var planetA = 3.7;
    }
    if (planetA === 'Venus') {
        var planetA = 8.87;
    }
    if (planetA === 'Earth') {
        var planetA = 9.81;
    }
    if (planetA === 'Mars') {
        var planetA = 3.711;
    }
    if (planetA === 'Jupiter') {
        var planetA = 24.79;
    }
    if (planetA === 'Saturn') {
        var planetA = 10.44;
    }
    if (planetA === 'Uranus') {
        var planetA = 8.69;
    }
    if (planetA === 'Neptune') {
        var planetA = 11.15;
    }
    if (planetB === 'Mercury') {
        var planetB = 3.7;
    }
    if (planetB === 'Venus') {
        var planetB = 8.87;
    }
    if (planetB === 'Earth') {
        var planetB = 9.81;
    }
    if (planetB === 'Mars') {
        var planetB = 3.711;
    }
    if (planetB === 'Jupiter') {
        var planetB = 24.79;
    }
    if (planetB === 'Saturn') {
        var planetB = 10.44;
    }
    if (planetB === 'Uranus') {
        var planetB = 8.69;
    }
    if (planetB === 'Neptune') {
        var planetB = 11.15;
    }
    var x = weight / planetA;
    x = x * planetB;
    return Math.round(100 * x) / 100;
}