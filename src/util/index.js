/**
 * @desc: returns random number from range
 * @param min
 * @param max
 * @returns {number}
 */
const createRandomNum = (min = 0, max = 500) => {

  if (typeof min !== 'number' || typeof max !== 'number' ) {
    console.error('min or max must be numbers');
    return Math.random();
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * @description: helper for detecting html strings
 * @param str
 * @returns {boolean}
 */
const isHtml = (str = '') => {

  if (typeof str !== 'string') {
    return false;
  }

  return /<[a-z/][\s\S]*>/i.test(str);
};

/**
 * @description: helper for proper type check
 * @param testValue
 * @returns {boolean}
 */
const isObj = (testValue) => {
  return typeof testValue === 'object' && !Array.isArray(testValue) && testValue !== null;
};

/**
 * @desc: helper for detecting urls
 * @param str
 * @returns {boolean}
 */
const isValidUrl = (str = '') => {

  if (typeof str !== 'string') {
    return false;
  }

  const regexp =  /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-/]))?/;
  return !!regexp.test(str);
};

export { createRandomNum, isHtml, isObj, isValidUrl };
