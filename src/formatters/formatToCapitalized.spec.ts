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

test("formatToCapitalized don't trim whitespaces when `trimTrailingWhiteSpaces` is false", (context) => {
  context.is(
    formatToCapitalized('   COM Espaços ANTES E DEPOIS \n\r', {
      wordsToKeepLowerCase: ['e'],
      trimTrailingWhiteSpaces: false,
    }),
    ' Com Espaços Antes e Depois ',
  );
});

test("formatToCapitalized don't transform first word to lower-case", (context) => {
  context.is(
    formatToCapitalized('a primeira palavra é capitalizada', {
      wordsToKeepLowerCase: ['a', 'é'],
    }),
    'A Primeira Palavra é Capitalizada',
  );

  context.is(
    formatToCapitalized(' a primeira palavra é capitalizada mesmo com espaços ', {
      trimTrailingWhiteSpaces: false,
      wordsToKeepLowerCase: ['a', 'é', 'com'],
    }),
    ' A Primeira Palavra é Capitalizada Mesmo com Espaços ',
  );
});
