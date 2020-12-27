/**
 * The largest number not displayed in scientific notation.
 */
const LARGEST_DISPLAYABLE_NUMBER = 999_999_999_999_999_934_463;

/**
 * Check if a number is displayed "as is", instead of scientific notation.
 * @example
 * isDisplayableNumber(1e21);
 * //=> false
 *
 * isDisplayableNumber(4319);
 * //=> true
 * @param {number} value
 * @returns {boolean}
 */
function isDisplayableNumber(value: number): boolean {
  return value <= LARGEST_DISPLAYABLE_NUMBER;
}

export default isDisplayableNumber;
