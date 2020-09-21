import test from 'ava';
import formatToRG from './formatToRG.js';

test('formatToRG', (context) => {
  context.is(formatToRG('000000000', 'SP'), '00.000.000-0');
  context.is(formatToRG('00.00.0000-a', 'RJ'), '00.000.000-A');
  context.is(formatToRG('00.000.000-B', 'SP'), '00.000.000-B');
  context.is(formatToRG('00000000x', 'RJ'), '00.000.000-X');
  context.is(formatToRG('MG-14.808.688', 'MG'), 'MG-14.808.688');
});
