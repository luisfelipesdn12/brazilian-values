import test from 'ava';
import isDDD from './isDDD.js';

test('isDDD', (context) => {
  context.true(isDDD('81'));
  context.false(isDDD('10'));
  context.false(isDDD('A#'));
});
