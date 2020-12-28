import test from 'ava';
import isCPFOrCNPJ from './isCPFOrCNPJ.js';

test('isCPFOrCNPJ', (context) => {
  context.true(isCPFOrCNPJ("41142260000189"));
  context.true(isCPFOrCNPJ("45.723.174/0001-10"));
  context.false(isCPFOrCNPJ("41142260007182"));
  context.false(isCPFOrCNPJ("19.981.127/0001-10"));
  context.false(isCPFOrCNPJ("64.637.agsvs009/0001-90"));
  context.true(isCPFOrCNPJ("366.418.768-70"));
  context.true(isCPFOrCNPJ("36641876870"));
  context.false(isCPFOrCNPJ("213.198.013-20"));
  context.false(isCPFOrCNPJ("2131201872781"));
  context.false(isCPFOrCNPJ("11111111111"));
  context.false(isCPFOrCNPJ("00000000000"));
  context.false(isCPFOrCNPJ("111.111.111-11"));
  context.false(isCPFOrCNPJ("UHASHUISIH910"));
  context.false(isCPFOrCNPJ("366.41askaosoa8.768-70"));
})
