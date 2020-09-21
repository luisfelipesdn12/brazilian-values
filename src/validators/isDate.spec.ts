import test from 'ava';
import isDate from './isDate.js';

test('isDate', (context) => {
  context.true(isDate('03/08/2017'));
  context.false(isDate('28/13/9017'));
  context.false(isDate('00/00/0000'));
  context.false(isDate('31/02/2018'));
});
