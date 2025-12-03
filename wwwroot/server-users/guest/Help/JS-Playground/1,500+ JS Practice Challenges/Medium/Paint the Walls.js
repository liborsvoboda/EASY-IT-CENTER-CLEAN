/*
Paint the Walls

Given a predetermined rate from an object, write the function that will return the time it takes for a certain amount of people to paint a certain amount of walls. Return the minutes as an integer. No rounding is necessary.

Example
// It takes 22 minutes for 10 people to paint 10 walls.
// How many minutes does it take 14 people to paint 14 walls?

let rate = {
  people: 10,
  walls: 10,
  minutes: 22
}

time(rate, people, walls) ➞ 22

Notes
Check the Resources tab if you get stuck.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function time(obj, people, walls) {
    let val = obj.minutes / obj.walls * obj.people
    return val * walls / people
}







//#############################################################
//#  SOLUTION 2  
//#############################################################



const time = (obj, people, walls) => obj.minutes / (people / obj.people) / (obj.walls / walls);







//#############################################################
//#  SOLUTION 3
//#############################################################



function time({ people: p, walls: w, minutes: m }, people, walls) {
    return (m * p * walls) / (w * people)
}






//#############################################################
//#  SOLUTION 4
//#############################################################


function time(obj, peopleNew, wallsNew) {
    let { people, walls, minutes } = obj;
    const timeOnePersoneOneWall = () => { return (minutes * people) / walls };

    return (timeOnePersoneOneWall() * wallsNew) / peopleNew;
}