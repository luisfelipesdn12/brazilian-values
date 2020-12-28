import isCNPJ, { CNPJ_PATTERN } from './isCNPJ.js';
import isCPF, { CPF_PATTERN } from './isCPF.js';

/**
 * Check if a value is a valid CPF or CNPJ
 * @example ```js
 * isCPFOrCNPJ('366.418.768-70')
 * //=> true
 *
 * isCPFOrCNPJ('36641876870')
 * //=> true
 *
 * isCPFOrCNPJ('213.198.013-20')
 * //=> false
 *
 * isCPFOrCNPJ('2131201872781')
 * //=> false
 *
 * isCPFOrCNPJ('11111111111')
 * //=> false
 *
 * isCPFOrCNPJ('41142260000189')
 * //=> true
 *
 * isCPFOrCNPJ('45.723.174/0001-10')
 * //=> true
 *
 * isCPFOrCNPJ('411407182')
 * //=> false
 *
 * isCPFOrCNPJ('11.111.111/1111-11')
 * //=> false
 * ```
 * @param value - A text containing a CPF or CNPJ
 */
const isCPFOrCNPJ = (value: string): boolean => {
  if (CPF_PATTERN.test(value)) return isCPF(value);
  if (CNPJ_PATTERN.test(value)) return isCNPJ(value);
  return false;
};

export default isCPFOrCNPJ;
