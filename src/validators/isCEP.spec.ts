import test from 'ava';
import isCEP from './isCEP.js';

test('isCEP', (context) => {
 context.true(isCEP('50.833-000'));
 context.true(isCEP('02998-050'));
 context.true(isCEP('00000000'));
 context.false(isCEP('0'));
 context.false(isCEP('129.64-000'));
 context.false(isCEP('1982891928981982198'));
 context.false(isCEP('0299sansjads8-050'));
});
