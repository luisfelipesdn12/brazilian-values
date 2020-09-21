import test from 'ava';
import isCPF from './isCPF.js';

test('isCPF', (context) => {
  context.true(isCPF('366.418.768-70'));
  context.true(isCPF('36641876870'));
  context.false(isCPF('213.198.013-20'));
  context.false(isCPF('2131201872781'));
  context.false(isCPF('11111111111'));
  context.false(isCPF('00000000000'));
  context.false(isCPF('111.111.111-11'));
  context.false(isCPF('UHASHUISIH910'));
  context.false(isCPF('366.41askaosoa8.768-70'));
});
