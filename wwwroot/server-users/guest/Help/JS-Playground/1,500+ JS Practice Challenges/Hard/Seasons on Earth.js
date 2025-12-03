/*

Seasons on Earth

In this challenge, you are given a date and you have to determine the correspondent season in a certain hemisphere of Earth.

You have to use the ranges given by the meteorological seasons definition, accordingly to the following table:

Start	End	North Hemisphere	South Hemisphere
March, 1	May, 31	Spring	Autumn
June, 1	August, 31	Summer	Winter
September, 1	November, 30	Autumn	Spring
December, 1	February, 28***	Winter	Summer
Given two strings hemisphere (can be "N" for the North hemisphere or "S" for the South hemisphere) and date (name and day of the month), implement a function that returns a string with the season name, accordingly to the above table.

Examples
hemisphereSeason("N", "June, 30") ➞ "Summer"

hemisphereSeason("N", "March, 1") ➞ "Spring"

hemisphereSeason("S", "September, 22") ➞ "Spring"


Notes
During leap years the end date of Winter in the northern hemisphere is the 29th day of February (last day of Summer in the southern hemisphere). In this challenge, years are not used, so the last day of February will always be the 28th.

*/


//#############################################################
//#    SOLUTION 1
//#############################################################


const hemisphereSeason = (emi, m) => {
	m = new Date(m).getMonth();
	let order = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1],
			seasons = {N: ["Spring", "Summer", "Autumn", "Winter"],
								 S: ["Autumn", "Winter", "Spring", "Summer"]};
	return seasons[emi][Math.floor(order.indexOf(m) / 3)];
}



//#############################################################
//#    SOLUTION 2
//#############################################################


function hemisphereSeason(hemi, date) {
	var obj = {
		0: hemi == "N" ? "Winter" : "Summer",
		1: hemi == "N" ? "Winter" : "Summer",
		2: hemi == "N" ? "Spring" : "Autumn",
		3: hemi == "N" ? "Spring" : "Autumn",
		4: hemi == "N" ? "Spring" : "Autumn",
		5: hemi == "N" ? "Summer" : "Winter",
		6: hemi == "N" ? "Summer" : "Winter",
		7: hemi == "N" ? "Summer" : "Winter",
		8: hemi == "N" ? "Autumn" : "Spring",
		9: hemi == "N" ? "Autumn" : "Spring",
		10: hemi == "N" ? "Autumn" : "Spring",
		11: hemi == "N" ? "Winter" : "Summer"
	};
    
	var d = new Date(date);
	return obj[d.getMonth()];
}




//#############################################################
//#    SOLUTION 3
//#############################################################



function hemisphereSeason(hemisphere, date) {
	let monthNo = {
		January: 11,
		February: 12,
		March: 1,
		April: 2,
		May: 3,
		June: 4,
		July: 5,
		August: 6,
		September: 7,
		October: 8,
		November: 9,
		December: 10,
	}
	date = date.split(", ");
	console.log(date[0], date[1]);
	console.log(monthNo[date[0]]);
	
	if(hemisphere==='N'){
		if(monthNo[date[0]]>=1 && monthNo[date[0]]<=3){
			return "Spring";
		}
		if(monthNo[date[0]]>=4 && monthNo[date[0]]<=6){
			return "Summer";
		}
		if(monthNo[date[0]]>=7 && monthNo[date[0]]<=9){
			return "Autumn";
		}
		if(monthNo[date[0]]>=10 && monthNo[date[0]]<=12){
			return "Winter";
		}
	}else{
		if(monthNo[date[0]]>=1 && monthNo[date[0]]<=3){
			return "Autumn";
		}
		if(monthNo[date[0]]>=4 && monthNo[date[0]]<=6){
			return "Winter";
		}
		if(monthNo[date[0]]>=7 && monthNo[date[0]]<=9){
			return "Spring";
		}
		if(monthNo[date[0]]>=10 && monthNo[date[0]]<=12){
			return "Summer";
		}
	}
}



//#############################################################
//#    SOLUTION 4
//#############################################################



function hemisphereSeason(hemisphere, date) {
    const hemiLookUp = (obj, m) => {
      for (let key in obj) {
        if (obj[key].includes(m)) return key;
      }
    }
    const northH = {
      Summer : ['June', 'July', 'August'],
      Autumn : ['September', 'October', 'November'],
      Winter : ['December', 'January', 'February'],
      Spring : ['March', 'April', 'May']
    }  
    const southH = {
      Winter : ['June', 'July', 'August'],
      Spring : ['September', 'October', 'November'],
      Summer : ['December', 'January', 'February'],
      Autumn : ['March', 'April', 'May']
    }  
    const [month, _ ] = date.split(','); 
    return hemisphere === 'N' ? hemiLookUp(northH, month) : hemiLookUp(southH, month);
  }