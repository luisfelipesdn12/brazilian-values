import test from 'ava';
import formatToCEP from './formatToCEP.js';

test('formatToCEP', (context) => {
  context.is(formatToCEP('15998030'), '15998-030');
  context.is(formatToCEP('159980'), '15998-0');
});
