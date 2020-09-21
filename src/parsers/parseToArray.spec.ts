import test from 'ava';
import parseToArray from './parseToArray.js';

test('parseToArray: Parses a brazilian formatted list to an Array', (context) => {
  const value1 = parseToArray('');
  const value2 = parseToArray('1');
  const value3 = parseToArray('1 e 2');
  const value4 = parseToArray('1, 2, 3, 4 e 5');
  const value5 = parseToArray('Fernanda, Luana e Ana Carolina');

  context.deepEqual(value1, []);
  context.deepEqual(value2, ['1']);
  context.deepEqual(value3, ['1', '2']);
  context.deepEqual(value4, ['1', '2', '3', '4', '5']);
  context.deepEqual(value5, ['Fernanda', 'Luana', 'Ana Carolina']);
});
