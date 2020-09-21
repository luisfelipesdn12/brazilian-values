import test from 'ava';
import isCNPJ from './isCNPJ.js';

test('isCNPJ', (context) => {
  context.true(isCNPJ('41142260000189'));
  context.true(isCNPJ('45.723.174/0001-10'));
  context.false(isCNPJ('41142260007182'));
  context.false(isCNPJ('19.981.127/0001-10'));
  context.false(isCNPJ('64.637.agsvs009/0001-90'));
});
