import test from 'ava';
import formatToDate from './formatToDate.js';

test('formatToDate', (context) => {
  context.is(formatToDate(new Date(2002, 7, 21)), '21/08/2002');
});
