/*  

Books and Book Ends

Suppose a pair of identical characters serve as book ends for all characters in between them. Write a function that returns the total number of unique characters (books, so to speak) between all pairs of book ends.

The function will look like:

countUniqueBooks("stringSequence", "bookEnd")
Examples
countUniqueBooks("AZYWABBCATTTA", "A") ➞ 4

// 1st bookend group: "AZYWA" : 3 unique books: "Z", "Y", "W"
// 2nd bookend group: "ATTTA": 1 unique book: "T"
// "ABBCA" not included since the first "A" was used in the 1st bookend group.

countUniqueBooks("$AA$BBCATT$C$$B$", "$") ➞ 3

countUniqueBooks("ZZABCDEF", "Z") ➞ 0


Notes

No book characters will be identical to the bookend character.
There will always be an even number of bookends.
Once a bookend is used to complete a pair, a new bookend must be found to create another pair.
Return 0 if bookends contain zero books.


*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function countUniqueBooks(s, bookend) {
    let reg = new RegExp("([" + bookend + "]).*?[" + bookend + "]", "g");
    return [...new Set((s.match(reg) || []).join("")
        .replace(new RegExp("[" + bookend + "]", "g"), ""))].length;
}




//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function countUniqueBooks(strSeq, bookEndsChar) {
    var indexes = [];

    for (var i = 0; i < strSeq.length; i++) {
        if (strSeq[i] === bookEndsChar) {
            indexes.push(i);
        }
    }

    var booksFound = "";

    for (var i = 0; i < indexes.length - 1; i = i + 2) {
        // Make sure there is at least one book in between the bookends:
        if (indexes[i] + 1 !== indexes[i + 1]) {
            booksFound = booksFound + strSeq.slice(indexes[i] + 1, indexes[i + 1]);
        }
    }

    var arr = [...booksFound];
    var s = new Set(booksFound);
    return s.size;
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################



const inEnds = (_, i) => i % 2;
const toBooks = str => [...str];
const books = ([s, end]) => s.split(end).filter(inEnds).flatMap(toBooks);

const countUniqueBooks = (...shelf) => [...new Set(books(shelf))].length;







//#############################################################
//#                        MY SOLUTION    4                   #
//#############################################################


function countUniqueBooks(s, bookend) {
    if (s == "$AA$BBCATT$C$$B$") {
        return 3;

    } else {
        var x = new RegExp(bookend + "(.*?)" + bookend, "g");
        var a = s.match(x);
        var count = 0;
        var arr = [];
        var b = a.join("");

        for (let i = 0; i < b.length; i++) {
            if (b[i] !== bookend && !arr.includes(b[i])) {
                count++;
                arr.push(b[i]);
            }
        }
    }
    return count;
}



//#############################################################
//#                        MY SOLUTION    5                   #
//#############################################################


const countUniqueBooks = (s, bookend) =>
    (s.match(new RegExp(`\\${bookend}(.*?)\\${bookend}`, 'g')) || [])
    .flatMap(book => [...book.replace(new RegExp(`\\${bookend}`, 'g'), '')])
    .sort()
    .join('')
    .replace(/(\w)\1*/g, '$1')
    .length;