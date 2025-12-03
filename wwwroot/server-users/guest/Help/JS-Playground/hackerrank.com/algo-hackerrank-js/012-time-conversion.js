//https://www.hackerrank.com/challenges/time-conversion/problem
let s = '04:05:45PM'

function timeConversion(s) {
    let time = s.slice(0, -2).split(':');
    let amOrPm = s.slice(-2); //PM or AM
    if (amOrPm === 'PM') {
        if (time[0] !== '12') {
            time[0] = parseInt(time[0], 10) + 12;
        }
    } else if (time[0] === '12') {
        time[0] = '00';
    }
    return time[0] + ':' + time[1] + ':' + time[2];
}


timeConversion(s);

/* function timeConversion(s) {
   //AM
    if(s.endsWith('AM')){
        if(s.startsWith('12')){
            let time = s.replace('12' , '00');
            return time.slice(0,time.length-2);
        }
        else {
            return s.slice(0,s.length-2);
        }
    }
    //PM
    else if(s.endsWith('PM')){
        if(s.startsWith('12')){
            return s.slice(0,s.length-2);
        }
        else{
            let a = s.slice(0,2)
            let t = parseInt(a)+12;
            let time =s.replace(a,t);
            return time.slice(0,time.length-2) 
            
        }
    }
}
 */