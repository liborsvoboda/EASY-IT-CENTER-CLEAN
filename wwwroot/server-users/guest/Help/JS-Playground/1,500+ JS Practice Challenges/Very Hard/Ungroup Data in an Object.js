/*  

Ungroup Data in an Object

You volunteered to help out teaching a preschool in your area! You were given an array of all students and some important data about them, grouped by their teacher. Create a function that will ungroup every student so you can look at their details individually.

Example
ungroupStudents([{
  teacher: "Ms. Car",
  data: [{
     name: "James",
     emergenceNumber: "617-771-1082",
  }, {
     name: "Alice",
     alergies: ["nuts", "carrots"],
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}]) ➞ [{
  teacher: "Ms. Car",
  name: "James",
  emergencyNumber: "617-771-1082",
}, {
  teacher: "Ms. Car",
  name: "Alice",
  alergies: ["nuts", "carrots"],
}, {
  teacher: "Mr. Lamb",
  name: "Aaron",
  age: 3,
}]

*/





//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


ungroupStudents = (students) =>
    students.flatMap(({ teacher, data }) => data.map((o) => ({ teacher, ...o })));




//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################



function ungroupStudents(students) {
    let groupedObj = students.reduce((acc, val) => {
        let student;
        for (let obj of val.data) {
            student = {};
            student.teacher = val.teacher;
            for (let [key, value] of Object.entries(obj)) {
                student[key] = value;
            };
            acc.push(student);
        }
        return acc;
    }, []);
    return groupedObj;
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################



function ungroupStudents(arr) {
    return arr.map(a => a.data.map((b) => ({
        teacher: a.teacher,
        ...b
    }))).flat()
}