/*
Count the Letters and Digits

Write a function that takes a string and calculates the number of letters and digits within it. Return the result in a dictionary.

Examples
count_all("Hello World") ➞ { "LETTERS":  10, "DIGITS": 0 }

count_all("H3ll0 Wor1d") ➞ { "LETTERS":  7, "DIGITS": 3 }

count_all("149990") ➞ { "LETTERS": 0, "DIGITS": 6 }

Notes
Tests contain only alphanumeric characters.
Spaces are not letters.
All tests contain valid strings.


*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################






//#############################################################
//#  SOLUTION 1 
//#############################################################



def count_all(txt):
    return {
        'LETTERS': sum(1
            for x in txt
            if x.isalpha()),
        'DIGITS': sum(1
            for x in txt
            if x.isnumeric()),
    }



//#############################################################
//#  SOLUTION 2  
//#############################################################


def count_all(txt):
    dict = { 'LETTERS': 0, 'DIGITS': 0 }
for char in txt:
    if char.isalpha():
    dict['LETTERS'] += 1
if char.isdigit():
    dict['DIGITS'] += 1
return dict




//#############################################################
//#  SOLUTION 3
//#############################################################


def count_all(txt):

    let = [i
        for i in txt
        if i.isalpha()
    ]
dig = [i
    for i in txt
    if i.isdigit()
]

ans = {
    "LETTERS": len(let),
    "DIGITS": len(dig)
}

return ans



//#############################################################
//#  SOLUTION 4
//#############################################################



def count_all(txt):
    countLe = 0
countDi = 0
for a in txt:
    if (a.isalpha()) == True:
        countLe += 1
elif(a.isdigit()) == True:
    countDi += 1

return { 'LETTERS': countLe, 'DIGITS': countDi }





//#############################################################
//#  SOLUTION 5
//#############################################################


import re
def count_all(txt):
    return { "LETTERS": len(re.sub(r '[^a-zA-Z]', '', txt)), "DIGITS": len(re.sub(r '[^0-9]', '', txt)) }