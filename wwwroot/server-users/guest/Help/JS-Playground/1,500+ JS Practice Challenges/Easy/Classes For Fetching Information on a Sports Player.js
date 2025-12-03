/*  

Classes For Fetching Information on a Sports Player

Create a class that takes the following four arguements for a particular football player:

name
age
height
weight
Also, create three functions for the class that returns the following strings:

getAge() returns "name is age age"
getHeight() returns "name is heightcm"
getWeight() returns "name weighs weightkg"
Examples
 p1 = new Player("David Jones", 25, 175, 75)

 p1.getAge() ➞ "David Jones is age 25"
 p1.getHeight() ➞ "David Jones is 175cm"
 p1.getWeight() ➞ "David Jones weighs 75kg"

Notes
name will be passed in as a string and age, height and weight will be integers.
*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################






//#############################################################
//#    SOLUTION 1


class Player {

    constructor(name, age, height, weight) {
        // complete function
        this.name = name;
        this.age = name + ' is age' + ' ' + age;
        this.height = name + ' is' + ' ' + height + 'cm';
        this.weight = name + ' weighs' + ' ' + weight + 'kg';
    }

    getAge() {
        // complete function
        return this.age
    }

    getHeight() {
        // complete function
        return this.height
    }

    getWeight() {
        // complete function
        return this.weight
    }
}





//#############################################################
//#    SOLUTION 2


class Player {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    getAge() {
        return `${this.name} is age ${this.age}`;
    }
    getHeight() {
        return `${this.name} is ${this.height}cm`;
    }
    getWeight() {
        return `${this.name} weighs ${this.weight}kg`;
    }
}






//#############################################################
//#    SOLUTION 3


class Player {

    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }

    getAge = () => `${this.name} is age ${this.age}`;
    getHeight = () => `${this.name} is ${this.height}cm`;
    getWeight = () => `${this.name} weighs ${this.weight}kg`;

}







//#############################################################
//#    SOLUTION 4

class Player {

    constructor(name, age, height, weight) {
        // complete function
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
    }

    getAge() {
        // complete function
        return this.name + " " + "is age" + " " + this.age;
    }

    getHeight() {
        // complete function
        return this.name + " " + "is" + " " + this.height + "cm";
    }

    getWeight() {
        // complete function
        return this.name + " " + "weighs" + " " + this.weight + "kg";
    }
}