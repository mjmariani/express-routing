
// Build a frequency counter object from an array
// @param {Array} arr any array

function createFrequencyCounter(arr){
    return arr.reduce(function(acc, curr){
        acc[curr] = (acc[curr] || 0) + 1; //it sets or updates the key of the 
        //first value of array used by the reduce function
        //to the integer where the curr is pointing to and sets it equal to the value of 
        //the key, value pair if exists or to zero and then adds 1 to the total
        return acc;
    }, {}); //returns an object with the key, value pairs showing the number of times each number appears in array input
}

// Find the most common element in the array
// @param {Array} arr any array

function findMode(arr){
    let freqCounter = createFrequencyCounter(arr);

    let count = 0;
    let mostFrequent;

    for(let key in freqCounter){
        if(freqCounter[key] > count){
            mostFrequent = key;
            count = freqCounter[key];
        }
    }
    return +mostFrequent; //unary operator here '+' converts mostFrequent var into numeric whole number expression (integer)
}

/**
 * Attempt to convert an array of strings to an array of numbers
 * @param {Array} numsAsStrings array of strings
 * @returns {Array|Error} an array or an error object
 */

 function convertAndValidateNumsArray(numsAsStrings){
     let result = [];

     for(let i = 0; i < numsAsStrings.length; i++){
         let valToNumber = Number(numsAsStrings[i]);

         if(Number.isNaN(valToNumber)){
             return new Error(`The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`);
         }
         result.push(valToNumber);
     }
     return result;
 }

 function findMean(nums){
     if(nums.length === 0){
         return 0;
     }
     return nums.reduce(function (acc, curr) {
         return acc + curr;
     }) / nums.length;
 }

 function findMedian(nums){
    nums.sort((a,b) => a - b);

    let middleIndex = Math.floor(nums.length / 2);
    let median;
    if (nums.length % 2 === 0) {
        median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
      } else {
        median = nums[middleIndex];
      }
      return median;

 }

 module.exports = {
    createFrequencyCounter,
    findMean,
    findMedian,
    findMode,
    convertAndValidateNumsArray
  };