import test from 'ava';
import formatToPhone from './formatToPhone.js';

test('formatToPhone', (context) => {
  context.is(formatToPhone('11'), '(11');
  context.is(formatToPhone('11971626'), '(11) 9716-26');
  context.is(formatToPhone('1197162679'), '(11) 9716-2679');
  context.is(formatToPhone('11971626799'), '(11) 9 7162-6799');
});
