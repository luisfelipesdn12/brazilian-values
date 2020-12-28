import test from 'ava';
import parseToDate from './parseToDate.js';

test('parseToDate: Parses a brazilian formatted date to a Date instance', (context) => {
  const date = parseToDate('28/03/1996');

  context.is(date.getDate(), 28);
  context.is(date.getMonth(), 2);
  context.is(date.getFullYear(), 1996);
  context.is(date.getHours(), 0);
  context.is(date.getMinutes(), 0);
  context.is(date.getSeconds(), 0);
});

test('parseToDate: Parses a brazilian formatted date and time to a Date instance', (context) => {
  const date = parseToDate('18/09/2019 22:45:38');

  context.is(date.getDate(), 18);
  context.is(date.getMonth(), 8);
  context.is(date.getFullYear(), 2019);
  context.is(date.getHours(), 22);
  context.is(date.getMinutes(), 45);
  context.is(date.getSeconds(), 38);
});

test('parseToDate: Can parse time without seconds', (context) => {
  const date = parseToDate('21/06/2020 17:01');

  context.is(date.getDate(), 21);
  context.is(date.getMonth(), 5);
  context.is(date.getFullYear(), 2020);
  context.is(date.getHours(), 17);
  context.is(date.getMinutes(), 1);
});


test('parseToDate: Throws errors on invalid pattern or date.', (context) => {
  context.throws(
    () => parseToDate('01-01-2001'),
    { instanceOf: Error },
    'Value "01-01-2001" does not match format.'
  );
  context.throws(
    () => parseToDate('31/02/2001'),
    { instanceOf: Error },
    'Value "31/02/2001" is an invalid date.'
  );
});
