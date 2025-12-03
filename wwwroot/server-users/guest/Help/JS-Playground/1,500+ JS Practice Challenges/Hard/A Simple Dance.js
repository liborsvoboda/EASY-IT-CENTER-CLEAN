/*

A Simple Dance

You will be given an array of dancing couples, with the woman first and man second, as well as a parameter "men" or "women".

If the parameter is "men", the men reverse their positions (first moves to last, last moves to first, etc), while women keep their positions.
If the parameter is "women", the women reverse their positions, while men keep their positions.
Examples
dance([
  [Ana, Bob],
  [Amy, Josh],
  [Lisa, Tim]
], men) ➞ [
  [Ana, Tim],
  [Amy, Josh],
  [Lisa, Bob]
]

dance([
  [Ana, Bob],
  [Amy, Josh],
  [Lisa, Tim]
], women) ➞ [
  [Lisa, Bob],
  [Amy, Josh],
  [Ana, Tim]
]

Notes
Input arrays will always be the same length.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function dance(arr, parameter) {
    return parameter == 'men' ? arr.map(x => x[0]).map((e, i) => [e, arr.map(x => x[1]).reverse()[i]]) : arr.map(x => x[0]).reverse().map((e, i) => [e, arr.map(x => x[1])[i]])
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const dance = (arr, parameter) => arr.map((x, i) => x.map((y, j) => parameter === ["wo", ""][j] + "men" ? arr[arr.length - i - 1][j] : y));



//#############################################################
//#  SOLUTION 3
//#############################################################


const dance = (arr, parameter, x = Number(parameter === 'men')) => (
    arr.map((subArr, i) => (
        subArr.map((e, j) => (
            (j === x) ? arr[arr.length - 1 - i][j] : e
        ))
    ))
);





//#############################################################
//#  SOLUTION 4
//#############################################################









////////////////////////////////////////////////////////////
//		Sub Function 1
////////////////////////////////////////////////////////////

function fnc_men_swap(women, men) {

    var mc = men.length - 1

    var wc = 0;
    var wl = women.length;

    var revised = [];

    while (wc < wl) {
        person_a = women[wc];
        person_b = men[mc];

        batch = [];
        batch.push(person_a);
        batch.push(person_b);

        revised.push(batch);
        wc += 1;
        mc -= 1;
    }

    return revised;

}

////////////////////////////////////////////////////////////
//		Sub Function 2
////////////////////////////////////////////////////////////

function fnc_women_swap(women, men) {

    var wc = women.length - 1

    var mc = 0;
    var ml = men.length;

    var revised = [];

    while (mc < ml) {
        person_a = women[wc];
        person_b = men[mc];

        batch = [];
        batch.push(person_a);
        batch.push(person_b);

        revised.push(batch);
        wc -= 1;
        mc += 1;
    }

    return revised;

}

////////////////////////////////////////////////////////////
//		MAIN FUNCTION
////////////////////////////////////////////////////////////

function dance(arr, parameter) {

    var women = [];
    var men = [];

    var counter = 0;
    var length = arr.length;

    while (counter < length) {
        batch = arr[counter];
        women.push(batch[0]);
        men.push(batch[1]);
        counter += 1;
    }

    if (parameter == "men") { return fnc_men_swap(women, men); } else if (parameter == "women") { return fnc_women_swap(women, men); } else { return "Who is supposed to be swapping? :-)" }

}