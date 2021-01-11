/**
 * The maximum representable number, any number above this is displayed in
 * scientific notation.
 */
const MAXIMUM_REPRESENTABLE_NUMBER = 999_999_999_999_999_934_463;

/**
 * The minimum representable number, any number below this is displayed in
 * scientific notation.
 */
const MINIMUM_REPRESENTABLE_NUMBER = -MAXIMUM_REPRESENTABLE_NUMBER;

/**
 * Check if a number is representable. Representable numbers is displayed "as
 * is", instead of displayed in scientific notation.
 * @example
 * isRepresentableNumber(1e21);
 * //=> false
 *
 * isRepresentableNumber(-999999999999999999999);
 * //=> false
 *
 * isRepresentableNumber(4319);
 * //=> true
 * @param {number} value
 * @returns {boolean}
 */
function isRepresentableNumber(value: number): boolean {
  return (
    value >= MINIMUM_REPRESENTABLE_NUMBER &&
    value <= MAXIMUM_REPRESENTABLE_NUMBER
  );
}

export default isRepresentableNumber;
