import comparePiecesToDate from '../helpers/comparePiecesToDate.js';
import mapToPieces from '../helpers/mapToPieces.js';
import parsePiecesToDate from '../helpers/parsePiecesToDate.js';

/**
 * Pattern to match brazilian formatted dates (99/99/9999).
 */
const DATE_PATTERN = /^\d{2}\/\d{2}\/\d{4}$/;

/**
 * Parses a brazilian formatted date into a Date instance.
 * @example ```js
 * parseToDate('28/03/1996')
 * //=> '1996-03-28T03:00:00.000Z'
 *
 * parseToDate('31/02/2018')
 * //=> throws Error('Value "31/02/2018" is an invalid date.')
 * ```
 * @param value - A date in DD/MM/YYYY.
 */
const parseToDate = (
  value: string,
): Date => {
  if (!DATE_PATTERN.test(value))
    throw new Error(`Value "${value}" does not match format.`);
  const pieces = mapToPieces(value);
  const instance = parsePiecesToDate(pieces);
  if (!comparePiecesToDate(pieces, instance))
    throw new Error(`Value "${value}" is an invalid date.`);
  return instance;
};

export default parseToDate;
