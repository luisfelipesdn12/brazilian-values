import test from 'ava';
import formatToNumber from './formatToNumber';

test('formatToNumber', (context) => {
  context.is(formatToNumber(0), '0');
  context.is(formatToNumber(-1299), '-1.299');
  context.is(formatToNumber(0.981), '0,981');
  context.is(formatToNumber('19898.1298'), '19.898,1298');
});
