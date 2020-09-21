import test from 'ava';
import formatToCPF from './formatToCPF.js';

test('formatToCPF', (context) => {
  context.is(formatToCPF('00000000000'), '000.000.000-00');
  context.is(formatToCPF('00000000'), '000.000.00');
  context.is(formatToCPF('366.418.768-70'), '366.418.768-70');
});
