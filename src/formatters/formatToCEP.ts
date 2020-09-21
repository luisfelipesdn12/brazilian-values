import mapToNumeric from '../helpers/mapToNumeric.js';

/**
 * Format a `string` number sequence into CEP format.
 * @example ```js
 * formatToCEP('15998030')
 * //=> '15998-030'
 *
 * formatToCEP('02999')
 * //=> '02999'
 * ```
 * @param value A `string` with CEP numbers.
 */
const formatToCEP = (
  value: string,
): string => (
  mapToNumeric(value)
    .replace(/(\d{5})(\d{1,3})/, '$1-$2')
);

export default formatToCEP;
