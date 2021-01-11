import test from 'ava';

import isRepresentableNumber from './isRepresentableNumber.js';

test('returns `true` for representable numbers', (context) => {
  context.true(isRepresentableNumber(0));
  context.true(isRepresentableNumber(1e20));
  context.true(isRepresentableNumber(98717283778912378));
  context.true(isRepresentableNumber(999999999999999934463));
});

test('returns `true` for representable negative numbers', (context) => {
  context.true(isRepresentableNumber(-0));
  context.true(isRepresentableNumber(-1e20));
  context.true(isRepresentableNumber(-98717283778912378));
  context.true(isRepresentableNumber(-999999999999999934463));
});

test('returns `false` for non-representable numbers', (context) => {
  context.false(isRepresentableNumber(1e21));
  context.false(isRepresentableNumber(999999999999999934464));
});

test('returns `false` for non-representable negative numbers', (context) => {
  context.false(isRepresentableNumber(-1e21));
  context.false(isRepresentableNumber(-999999999999999934464));
});
