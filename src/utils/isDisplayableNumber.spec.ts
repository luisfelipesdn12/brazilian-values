import test from 'ava';

import isDisplayableNumber from './isDisplayableNumber.js';

test('returns `true` for displayable numbers', (context) => {
  context.true(isDisplayableNumber(0));
  context.true(isDisplayableNumber(1e20));
  context.true(isDisplayableNumber(98717283778912378));
  context.true(isDisplayableNumber(999999999999999934463));
  context.true(isDisplayableNumber(-1298738792789378912));
});

test('returns `false` for non displayable numbers', (context) => {
  context.false(isDisplayableNumber(1e21));
  context.false(isDisplayableNumber(999999999999999934464));
});
