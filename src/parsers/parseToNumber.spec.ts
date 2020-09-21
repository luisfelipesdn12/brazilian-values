import test from 'ava';
import parseToNumber from './parseToNumber.js';

test('parseToNumber: Parses a brazilian formatted number to number', (context) => {
  context.is(parseToNumber('10'), 10);
  context.is(parseToNumber('-1.299'), -1299);
  context.is(parseToNumber('0,981'), 0.981);
  context.is(parseToNumber('19.898,1298'), 19898.1298);
});
