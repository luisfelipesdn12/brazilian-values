import test from 'ava';
import isPhone from './isPhone.js';

test('isPhone', (context) => {
  context.true(isPhone('+55 (11) 9 8273-1182'));
  context.true(isPhone('11 9 8273 1182'));
  context.true(isPhone('1139723768'));
  context.false(isPhone('(23) 3972-3768'));
  context.false(isPhone('(13) 6 5093-2093'));
  context.false(isPhone('(81) 555 178'));
});
