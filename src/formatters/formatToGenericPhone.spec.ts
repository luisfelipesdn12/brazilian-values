import test from 'ava';
import formatToGenericPhone from './formatToGenericPhone.js';

test('formatToGenericPhone', (context) => {
  context.is(formatToGenericPhone('23456789'), '2345-6789');
  context.is(formatToGenericPhone('923456789'), '92345-6789');
  context.is(formatToGenericPhone('21923456789'), '(21) 92345-6789');
  context.is(formatToGenericPhone('021923456789'), '021 92345-6789');
  context.is(formatToGenericPhone('5521923456789'), '+55 21 92345-6789');
});
