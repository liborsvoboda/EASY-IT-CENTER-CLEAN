/*

Get Students with Names and Top Notes

Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4] } and returns an array of objects like { name: "John", topNote: 5 }.

If student has no notes (an empty array) then let's assume topNote: 0.

Examples
getStudentsWithNamesAndTopNotes([
  { "name": "John", "notes": [3, 5, 4] },
  { "name": "Max", "notes": [1, 4, 6] },
  { "name": "Zygmund", "notes": [1, 2, 3] }
])
➞ [
  { "name": "John", "topNote": 5 },
  { "name": "Max", "topNote": 6 },
  { "name": "Zygmund", "topNote": 3 }
]


Notes
Try solving this challenge with an arrow function.

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


const getStudentsWithNamesAndTopNotes = students =>
  students.map(student => ({
    name: student.name,
    topNote: Math.max(...student.notes, 0),
  }));



//#############################################################
//#    SOLUTION 2
//#############################################################



const getStudentsWithNamesAndTopNotes = s => s.map(x => ({name: x.name, topNote: Math.max(...x.notes, 0)}));



//#############################################################
//#    SOLUTION 3
//#############################################################


function getStudentsWithNamesAndTopNotes(students) {
    return students.map(e => ({ name: e.name, topNote: e.notes[0] ? Math.max(...e.notes) : 0 }))
  }



//#############################################################
//#    SOLUTION 4
//#############################################################



// input is an arr
  // objs
// output is an arr
  // obj
    // name key val, topNote: largest num in arr at notes
    function getStudentsWithNamesAndTopNotes(students) {
        //create result arr
        var result = [];
        // iterate over input arr
        for (var x = 0; x < students.length; x++) {
        // create inner result obj
          var innerObjResult = {};
          // create current student obj
          var currentStudent = students[x];
          // assign inner obj at name to name at student obj
          innerObjResult['name'] = currentStudent['name']
        
          var studentNotes = currentStudent['notes'];
          // create largest score var
          var highestScore = studentNotes[0];
          // iterate over current student obj at notes
          for (var y = 0; y < studentNotes.length; y++) {
          
            // if current score is larger than largest
            if (studentNotes[y] >= highestScore) {
            // reassign largest as current score
            highestScore = studentNotes[y];
            }
            // assign inner obj at topNote to largest score
            innerObjResult['topNote'] = highestScore;
      
          }
            // if score is empty
            if (studentNotes.length === 0) {
              // return 0
              innerObjResult['topNote'] = 0;
            }
          
           // push current inner obj to result arr
           result.push(innerObjResult);
        }
        // return result arr
        return result;
      }
      
      console.log(getStudentsWithNamesAndTopNotes([
        { name: "John", notes: []}
      ]))