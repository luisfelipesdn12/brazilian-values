import test from 'ava';
import formatToList from './formatToList';

test('formatToList', (context) => {
  context.is(formatToList(['Vitor', 'William', 'Fernando']), 'Vitor, William e Fernando');
  context.is(formatToList([]), '');
  context.is(formatToList(['1', '2']), '1 e 2');
  context.is(formatToList(['Direito Civil']), 'Direito Civil');
});
