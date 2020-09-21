import test from 'ava';
import formatToCapitalized from './formatToCapitalized.js';

test('formatToCapitalized', (context) => {
  context.is(formatToCapitalized('cnpj da empresa X'), 'CNPJ da Empresa X');
  context.is(formatToCapitalized('JOAO ALVES DOS SANTOS FILHO'), 'Joao Alves dos Santos Filho');
  context.is(formatToCapitalized('SERVIDOR PÚBLICO MUNICIPAL'), 'Servidor Público Municipal');
  context.is(
    formatToCapitalized('   os PrimEIROS  HOMens da tERra', {
      wordsToKeepLowerCase: ['os', 'da'],
    }),
    'Os Primeiros Homens da Terra',
  );
  context.is(
    formatToCapitalized('nova tv foi lançada', {
      wordsToKeepUpperCase: ['tv'],
    }),
    'Nova TV Foi Lançada',
  );
});
