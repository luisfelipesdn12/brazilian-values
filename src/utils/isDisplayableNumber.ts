/**
 * Larger displayed without scientific notation.
 */
const LARGER_DISPLAYABLE_NUMBER = 999_999_999_999_999_934_463;

/**
 * Check if value is displayed correctly, without scientific notation.
 * @param {number} value
 * @returns {boolean}
 */
export default function isDisplayableNumber(value: number): boolean {
  return value <= LARGER_DISPLAYABLE_NUMBER;
}
