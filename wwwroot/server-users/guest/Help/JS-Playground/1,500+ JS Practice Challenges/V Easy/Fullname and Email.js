



/*


Fullname and Email
Create the instance properties fullname and email in the Employee class. Given a person's first and last names:

Form the fullname by simply joining the first and last name together, separated by a space.
Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure everything is in lowercase.
Examples
emp1 = Employee("John", "Smith")
emp1.fullname ➞ "John Smith"

emp2 = Employee("Mary",  "Sue")
emp2.email ➞ "mary.sue@company.com"

emp3 = Employee("Antony", "Walker")
emp3.firstname ➞ "Antony"
Notes
The properties firstname and lastname are already made for you.
See the Resources tab for some helpful tutorials on JavaScript classes!


*/






/*  Solution 1   */


class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
		// Complete the code!
		this.fullname = `${firstname} ${lastname}`;
		this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
	}
}


/*  Solution 2   */

class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = firstname.toLowerCase()+'.'+lastname.toLowerCase()+'@company.com';
		this.fullname = firstname+' '+lastname;
	}
}




/*  Solution 3   */


class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.fullname = `${firstname} ${lastname}`
		this.email = `${firstname.toLowerCase()}.${lastname.toLowerCase()}@company.com`
		// Complete the code!
	}
}