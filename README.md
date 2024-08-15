# Calculadora Simples em React

Este projeto é uma calculadora básica implementada em React. A calculadora permite realizar operações aritméticas simples como adição e subtração. O projeto utiliza componentes funcionais e o hook `useState` para gerenciar o estado da aplicação.

## Funcionalidades

- Adicionar números na sequência desejada.
- Adicionar ponto para entrada float.
- Realizar operações de soma (`+`), subtração (`-`), multiplicação (`x`) e divião (`/`).
- Limpar os valores atuais.
- Exibir o resultado da operação aritmética.

## Componentes

### `Input`

Componente responsável por exibir o número atual na tela da calculadora.

### `Button`

Componente que representa os botões da calculadora, como números, operadores e ações (limpar).

### `Container`, `Content`, `Row`

Componentes estilizados usados para estruturar a interface da calculadora.

## Como Funciona

- **Adicionar Números:** Quando um número é clicado, ele é adicionado ao número atual exibido na tela.
- **Operação de Soma:** Ao clicar no botão `+`, o número atual é armazenado como o primeiro número e a operação de soma é preparada para ser realizada.
- **Operação de Subtração:** Ao clicar no botão `-`, o número atual é armazenado como o primeiro número e a operação de subtração é preparada para ser realizada.
- **Operação de Multiplicação:** Ao clicar no botão `x`, o número atual é armazenado como o primeiro número e a operação de multiplicação é preparada para ser realizada.
- **Operação de Divisão:** Ao clicar no botão `/`, o número atual é armazenado como o primeiro número e a operação de divisão é preparada para ser realizada.
- **Igual (=):** Quando clicado, o resultado da operação entre o primeiro número e o número atual é calculado e exibido.
- **Limpar (c):** Reseta todos os valores e operações, retornando a calculadora ao estado inicial.

## Estrutura do Código

O código é estruturado em um componente principal chamado `App`, que contém o estado e as funções para manipulação dos números e operações. Os componentes `Input`, `Button`, `Container`, `Content` e `Row` são usados para construir a interface visual.

## Como Executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/calculadora-simples.git

2. Instale as dependências:
    ```bash
    npm install

3. Execute o projeto:
    ``bash
    npm start

4. Abra o navegador e acesse http://localhost:3000 para usar a calculadora.

## Melhorias Futuras

- Melhorar a interface visual com estilos adicionais.

## Contribuição

Sinta-se à vontade para contribuir com este projeto enviando pull requests ou sugerindo melhorias por meio de issues.

## Licença

Este README fornece uma visão geral clara e simples do projeto, descrevendo suas funcionalidades, estrutura, e como executá-lo. Também sugere possíveis melhorias futuras.
