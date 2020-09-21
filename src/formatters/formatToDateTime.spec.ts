import test from 'ava';
import formatToDateTime from './formatToDateTime.js';

test('formatToDateTime', (context) => {
  context.is(formatToDateTime(new Date(2002, 7, 21, 18, 30)), '21/08/2002 18:30');
});
