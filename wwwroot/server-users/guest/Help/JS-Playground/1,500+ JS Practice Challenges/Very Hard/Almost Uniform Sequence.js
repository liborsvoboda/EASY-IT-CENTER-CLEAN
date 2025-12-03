/*  

Almost Uniform Sequence
Find the length of the longest sub-sequence of two distinct numbers whose difference is 1. A sub-sequence can be made by deleting any numbers in between.

Examples
almostUniform([1, 3, 2, 2, 5, 2, 3, 7]) ➞ 5
// [3, 2, 2, 2, 3]

almostUniform([1, 2, 3, 4]) ➞ 2
// [1, 2] or [2, 3] or [3, 4]

almostUniform([1, 1, 1, 1]) ➞ 0
// There is no sub-sequence of two distinct numbers.


*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function almostUniform(nums) {
    let sorted = nums.sort((a, b) => b - a)
    let emptyArr = []
    let counter = 0
    sorted.forEach(item => {
        let arr = []
        for (let i = counter; i < sorted.length; i++) {
            if ((item - sorted[i]) === 1 || item === sorted[i]) {
                arr.push(sorted[i])
            }
        }
        if (arr.every(elem => elem === arr[0])) {
            emptyArr.push([0])
        } else {
            emptyArr.push(arr)
        }
        counter++
    })

    let lengths = [];
    emptyArr.forEach(item => lengths.push(item.length))
    let result = Math.max(...lengths)
    if (result !== 1) {
        return result
    } else {
        return 0
    }
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################



function almostUniform(nums) {
    const results = [];
    nums.forEach(i => {
        const sequence1 = [];
        const sequence2 = [];
        const upper = i + 1;
        const lower = i - 1;
        nums.forEach(j => {
            if (j === i || j === upper) sequence1.push(j);
            if (j === i || j === lower) sequence2.push(j);
        });
        if ((new Set(sequence1)).size !== 1) results.push(sequence1);
        if ((new Set(sequence2)).size !== 1) results.push(sequence2);
    });
    const lengths = results.map(sequence => sequence.length);
    return !lengths.length || Math.max(...lengths) === 1 ? 0 : Math.max(...lengths);
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################



almostUniform = a =>
    a.every(x => x == a[0]) ?
    0 :
    Math.max(
        ...a
        .map((v, c, r) => [
            r.slice(c).filter(x => x == v || x == v + 1),
            r.slice(c).filter(x => x == v || x == v - 1)
        ].filter(x => !x.every(z => z == v)))
        .flat()
        .map(x => x.length)
    )