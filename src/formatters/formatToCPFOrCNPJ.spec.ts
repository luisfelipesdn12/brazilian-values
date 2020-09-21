import test from 'ava';
import formatToCPFOrCNPJ from './formatToCPFOrCNPJ.js';

test('formatToCPFOrCNPJ', (context) => {
  context.is(formatToCPFOrCNPJ('00000000000'), '000.000.000-00');
  context.is(formatToCPFOrCNPJ('00000000'), '000.000.00');
  context.is(formatToCPFOrCNPJ('366.418.768-70'), '366.418.768-70');
  context.is(formatToCPFOrCNPJ('32284981000138'), '32.284.981/0001-38');
  context.is(formatToCPFOrCNPJ('00.0.000.00.00--00-00'), '00.000.000/0000-00');
});
