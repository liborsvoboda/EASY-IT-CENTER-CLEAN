/**
 * Given a non-negative integer as input, returns the number translated into
 * English.
 *
 * Don't worry about inserting hyphens, commas, or "and" anywhere.
 *
 * @example
 * numberToEnglish(100);     // => 'one hundred'
 * numberToEnglish(5491);    // => 'five thousand four hundred ninety one'
 * numberToEnglish(12345);   // => 'twelve thousand three hundred forty five'
 * numberToEnglish(9456012); // => 'nine million four hundred fifty six thousand twelve'
 *
 * @param {number} num - A number to format
 * @returns {string} A string representation of the input number formatted with
 *   commas in the appropriate places.
 */
function numberToEnglish(num) {
    return smallNumberToEnglish(num);
  }
  
  function smallNumberToEnglish(num) {
    let onesInEnglish = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
    ];
  
    if (num > 19) {
      throw new Error(`Invalid input: 1-digit or 2-digit input required, received: ${num}`);
    }
  
    return onesInEnglish[num];
  }
  
  if (require.main === module) {
    console.log('Running sanity checks for numberToEnglish:');
  
    console.log(numberToEnglish(0) === 'zero');
    console.log(numberToEnglish(5) === 'five');
    console.log(numberToEnglish(10) === 'ten');
    console.log(numberToEnglish(19) === 'nineteen');
  
    // Add more sanity checks as you go along.
    // How else will you know if your code does what you expect,
    // or whether you've broken your existing code without realizing?
  }
  
  module.exports = numberToEnglish;