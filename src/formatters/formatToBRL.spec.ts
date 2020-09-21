import test from 'ava';
import formatToBRL from './formatToBRL.js';

test('formatToBRL', (context) => {
  context.is(formatToBRL(1200.504), 'R$ 1.200,50');
  context.is(formatToBRL(0), 'R$ 0,00');
  context.is(formatToBRL('-74.89'), 'R$ -74,89');
});
