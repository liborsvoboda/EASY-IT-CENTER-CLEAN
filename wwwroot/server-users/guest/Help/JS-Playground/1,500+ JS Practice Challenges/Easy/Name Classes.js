/*  

Name Classes
Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

An attribute called fullname which returns the first and last names.
A attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
Remember to allow the attributes fname and lname to be accessed individually as well.

Examples
a1 = new Name("john", "SMITH")
a1.fname ➞ "John"

a1.lname ➞ "Smith"

a1.fullname ➞ "John Smith"

a1.initials ➞ "J.S"

Notes
Make sure only the first letter of each name is capitalised.
Check the Resources tab for some helpful tutorials on Python classes.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#    SOLUTION 1


class Name {
    constructor(f, l) {
        this.fname = f[0].toUpperCase() + f.slice(1).toLowerCase();
        this.lname = l[0].toUpperCase() + l.slice(1).toLowerCase();
        this.fullname = `${this.fname} ${this.lname}`;
        this.initials = `${this.fname[0]}.${this.lname[0]}`;
    }
}