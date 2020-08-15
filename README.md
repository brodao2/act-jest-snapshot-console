# AC Ferramentas: JEST - instantâneo de console (NODEJS)

[![Build Status](https://travis-ci.org/brodao/act-jest-snapshot-console.svg?branch=master)](https://travis-ci.org/brodao/act-jest-snapshot-console.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/brodao/act-jest-snapshot-console/badge.svg?branch=master)](https://coveralls.io/github/brodao/act-jest-snapshot-console?branch=master)
[![CC BY license](https://img.shields.io/badge/license-CC%20BY-%2327ad79)](https://creativecommons.org/licenses/by/4.0/)
[![Dependencies](https://david-dm.org/brodao/act-jest-snapshot-console.svg)](https://david-dm.org) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Objetivo

Captura a saída de 'console.log ()' e incorpora-o ao instantâneo de um teste baseado em JEST.

## Instalação

```terminal
npm install --save-dev act-jest-snapshot-console
```

## Uso

Em _package.json_, configure o :

```terminal
...
  },
	"jest": {
		...,
		"snapshotSerializers": [
			"act-jest-snapshot-console"
		]
	},
	...
```

Nos testes:

```javascript
const { wrap } = require('act-jest-snapshot-console');
...
function myFuncToTest() {
  console.log("Executando myFuncToTest")
}
...
test('before', () => {
  expect(myFuncToTest).toMatchSnapshot();
});

test('after', () => {
  expect(wrap(myFuncToTest)).toMatchSnapshot();
});
```

## Licenciamento

O **AC Ferramentas** é de uso gratuíto por qualquer pessoa e pode ser utilizado em trabalhos com fins comerciais ou não.

A extensão em si, é um sofware de fonte aberto, gratuíto e distribuí­do sob a licença [CC BY-NC-SA](LICENSE).

## Suporte

O suporte é efetuado exclusivamente via chamados e/ou consultando a documentação da ferramenta.

-   [chamados](https://github.com/brodao/act-jest-snapshot-console/issues?status=new&status=open)
-   [documentação](https://github.com/brodao/act-jest-snapshot-console/wiki/)

## Doação

Ajude a manter gratuíto e aberto. Se o que disponibilizamos gratuitamente e de forma aberta esta sendo-lhe útil, considere efetuar uma contribuição por um dos meios indicados.

-   **Mercado Pago** Doação com valor a ser definido por você (somente cartão de crédito) [única](http://mpago.la/1sWXCjq) [3 meses](http://mpago.la/2WWNAp5) [6 meses](http://mpago.la/2WHLJ5S)
-   **Mercado Pago** Doação no valor de \$20,00 (vários meios) [única](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=265489088-d6ac3c3d-26ec-4b32-9e61-1a6f67f46880)
-   **PagSeguro** Doação com valor a ser definido por você (vários meios) [única](https://pagseguro.uol.com.br/checkout/nc/nl/donation/sender-identification.jhtml?t=ed1ce6a52728d7cc3f98b07dd597573b7db955e85faff6ff5da31c3d3b58266b&e=true#rmcl)

## Contribuição

> O trabalho é voluntário e não concede nenhum direito/privilégio, incluindo eventuais ganhos pecuniários.

Venha para nossa lista você também. Veja [CONTRIBUTING](CONTRIBUTING.MD) para saber como.

## Colaboradores

Nossos sinceros agradecimentos vão para: _([emoji key](https://allcontributors.org/docs/en/emoji-key))_

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/brodao"><img src="https://avatars0.githubusercontent.com/u/949914?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Alan Cândido</b></sub></a><br /><a href="#projectManagement-brodao" title="Project Management">📆</a> <a href="https://github.com/brodao/act-jest-snapshot-console/commits?author=brodao" title="Code">💻</a> <a href="#content-brodao" title="Content">🖋</a> <a href="https://github.com/brodao/act-jest-snapshot-console/commits?author=brodao" title="Documentation">📖</a> <a href="#ideas-brodao" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-brodao" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

Este projeto segue a especificação [all-contributors](https://github.com/all-contributors/all-contributors). Contribuições de qualquer tipo são bem-vindas!
