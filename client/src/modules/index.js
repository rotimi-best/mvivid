/**
 * Generate a random number from a range of 2 numbers
 * @param {Number} min The min number of the random number
 * @param {Number} max The max number of the random number
 */
const genRandNum = (min, max) => Math.floor(Math.random() * (1 + max - min)) + min;

module.exports = {
  genRandNum
}