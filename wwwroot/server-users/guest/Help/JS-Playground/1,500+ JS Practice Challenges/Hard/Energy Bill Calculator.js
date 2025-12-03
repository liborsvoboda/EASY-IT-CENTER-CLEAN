/*

Energy Bill Calculator

Create a function that calculates an energy bill.

Given a billing start date and end date, start and end meter reading, a unit price in pence, and a standing charge (a daily rental fee for your meter) as arguments, calculate your bill.

An energy bill is calculated by multiplying the difference between meter readings with the unit price and adding the number of days multiplied by the standing charge. You then have to add 5% tax.

(days between dates x standing charge) + (diference bewteen meter readings x unit price) + 5% tax

Examples
energyBill("2020,01,01", "2020,04,01", 1000, 2000, 0.188, 0.243),  = "£220.62"
"2020,04,01" (end date) - "2020,01,01" ( start date ),  = 91 days
  2000 ( end meter read )- 1000 ( start meter read ) = 1000 units used
  1000 (units) * 0.188p (each unit cost) = £188
  91 (days) * 0.243p (standing charge) == £22.113
  22.113 (Total standing charge cost) + £188 (total unit cost) = £210.113
  210.113 (cost) * 0.05 (uk tax on energy) = 10.50565
  210.113 (cost) + 10.50565 (tax) = 220.61865
  answer = "£220.62"



Notes
If the end date is an earlier date from the start date return "Invalid date".
If the end meter reading is less then the start meter reading return "Invalid meter readings".
Please bring to my attention any clarity issues.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


D = s => new Date(s).getTime()

function energyBill(sD, eD, sR, eR, t, s) {
    if (sD > eD || sR > eR) {
        return 'Invalid ' + (sD > eD ? 'date' : 'meter readings')
    }
    a = D(sD)
    b = D(eD)
    x = (b - a) / 864e5 * s + (eR - sR) * t
    return '£' + (x * 1.05).toFixed(2)
}









//#############################################################
//#  SOLUTION 2  
//#############################################################



const getDate = (date) => {
    const values = date.split(",")

    return new Date(
        parseInt(values[0]),
        parseInt(values[1]) - 1,
        parseInt(values[2])
    )
}

const getDifferenceInDays = (startDate, endDate) => {
    const start = getDate(startDate).getTime()
    const end = getDate(endDate).getTime()
    const days = (end - start) / (1000 * 60 * 60 * 24)
    return Math.round(days)
}

const energyBill = (
    startDate,
    endDate,
    startReading,
    endReading,
    unitPrice,
    standingCharge
) => {

    if (endReading < startReading) {
        return "Invalid meter readings"
    }

    const totalDays = getDifferenceInDays(startDate, endDate)
    if (totalDays < 0) {
        return "Invalid date"
    }

    const consumption = (endReading - startReading) * unitPrice
    const charge = totalDays * standingCharge

    return `£${((consumption + charge) * 1.05).toFixed(2)}`
}







//#############################################################
//#  SOLUTION 3
//#############################################################


function energyBill(startDate, endDate, startRead, endRead, tariff, stand) {
    const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
    return days < 0 ? 'Invalid date' :
        endRead < startRead ? 'Invalid meter readings' :
        "£" + (((endRead - startRead) * tariff + days * stand) * 1.05).toFixed(2);
}










//#############################################################
//#  SOLUTION 4
//#############################################################


const pipe = (...fn) => (arg) => fn.reduce((acc, f) => f(arg), arg);

const ErrorHandler = (condition, msg) => {
    if (condition) throw new Error(msg);
};

const testRead = (data) => {
    ErrorHandler(data.startRead > data.endRead, "Invalid meter readings");
    return data;
};

const testDate = (data) => {
    ErrorHandler(data.startDate > data.endDate, "Invalid date");
    return data;
};

const getDays = (data) => {
    const msToDays = 1000 * 60 * 60 * 24;
    data["_days"] = Math.ceil((data.endDate - data.startDate) / msToDays);
    return data;
};

const getUnits = (data) => {
    data["_units"] = data.endRead - data.startRead;
    return data;
};

const calculateCost = (data) => {
    data["_cost"] = data._units * data.tariff + data._days * data.stand;
    return data;
};

const addTaxes = (data) => {
    const tax = 1.05;
    data["_costWithTax"] = data._cost * tax;
    return data;
};

const formatAmount = (data) => {
    return `£${data._costWithTax.toFixed(2)}`;
};

function energyBill(startDate, endDate, startRead, endRead, tariff, stand) {
    try {
        return pipe(
            testRead,
            testDate,
            getDays,
            getUnits,
            calculateCost,
            addTaxes,
            formatAmount
        )({
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            startRead,
            endRead,
            tariff,
            stand,
        });
    } catch (error) {
        return error.message;
    }
}





//#############################################################
//#  SOLUTION 5
//#############################################################


function energyBill(startDate, endDate, startRead, endRead, tariff, stand) {
    date1 = new Date(startDate);
    date2 = new Date(endDate);

    if (date2.getTime() < date1.getTime()) {
        return 'Invalid date';
    } else if (endRead < startRead) {
        return 'Invalid meter readings';
    }

    numOfDays = Math.round((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
    unitsUsed = endRead - startRead;

    billingForUnits = unitsUsed * tariff;
    standingCharge = (numOfDays * stand);
    combinedBill = billingForUnits + standingCharge;
    taxAmount = (combinedBill) * 0.05;

    return `£${(combinedBill + taxAmount).toFixed(2)}`;
}