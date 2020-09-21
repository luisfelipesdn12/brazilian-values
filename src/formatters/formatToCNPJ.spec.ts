import test from 'ava';
import formatToCNPJ from './formatToCNPJ.js';

test('formatToCNPJ', (context) => {
  context.is(formatToCNPJ('128781'), '12.878.1');
  context.is(formatToCNPJ('32284981000138'), '32.284.981/0001-38');
  context.is(formatToCNPJ('00.0.000.00.00--00-00'), '00.000.000/0000-00');
});
