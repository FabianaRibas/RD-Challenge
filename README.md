# RD Challenge

## Nossas expectativas

A equipe de engenharia da RDStation tem alguns princípios onde baseamos nosso trabalho diário. Um deles é: Projete seu código para ser mais fácil de entender, não mais fácil de escrever.

Portanto, para nós é mais importante um código de fácil leitura do que um que utilize recursos complexos e/ou desnecessários.

O que gostariamos de ver:

- O código deve ser fácil de ler. [Clean Code](https://medium.com/rd-shipit/clean-code-23580b4e556c) pode te ajudar
- Notas gerais e informações sobre a versão da linguagem e outras informações importantes para executar seu código.
- Código que se preocupa com a performance (Complexidade de Algoritmo)
- O seu código deve cobrir todo os casos de usos presentes no README, mesmo que não haja um teste implementado para tal.
- Você deve enviar para nós `um arquivo zip` contendo o código-fonte da solução e as instruções para rodá-lo ou pode fazer
  o upload da solução para repositórios públicos (GitHub, BitBucket, etc) e nos enviar o link de acesso.
- Testes. Você pode adicionar novos testes, mas sem alterar o pacote original

## O Desafio - CustomerSuccess Balancing

Este desafio consiste em um sistema de balanceamento entre clientes e Customer Success (CSs). Os CSs são os Gerentes de Sucesso, são responsáveis pelo acompanhamento estratégico dos clientes.

Dependendo do tamanho do cliente - aqui nos referimos ao tamanho da empresa - nós temos que colocar CSs mais experientes para atendê-los.

Um CS pode atender mais de um cliente, além disso os CSs também podem sair de férias, tirar folga, ou mesmo ficarem doentes, então é preciso levar esses critérios em conta na hora de rodar a distribuição.

Dado este cenário, o sistema distribui os clientes com os CSs de capacidade de atendimento mais próxima (maior) ao tamanho do cliente.

### Exemplo

Se temos 6 clientes com os seguintes níveis: 20, 30, 35, 40, 60, 80 e dois CSs de níveis 50 e 100, o sistema deveria distribui-los da seguinte forma:

- 20, 30, 35, 40 para o CS de nível 50
- 60 e 80 para o CS de nível 100

Sendo `n` o número de CSs, `m` o número de clientes e `t` o número de abstenções de CSs, calcular quais clientes serão atendidos por quais CSs de acordo com as regras apresentadas.

### Premissas

- Todos os CSs têm níveis diferentes
- Não há limite de clientes por CS
- Clientes podem ficar sem serem atendidos
- Clientes podem ter o mesmo tamanho
- 0 < n < 1.000
- 0 < m < 1.000.000
- 0 < id do cs < 1.000
- 0 < id do cliente < 1.000.000
- 0 < nível do cs < 10.000
- 0 < tamanho do cliente < 100.000
- Valor máximo de t = n/2 arredondado para baixo

## Input

A função customerSuccessBalancing() recebe 3 parâmetros:

- Array com hashes contendo o id e nivel da experiencia do CS:
  `[
  { id: 1, score: 10 },
  { id: 2, score: 90 }
]`

- Array de hashes com o id e nivel de experiência dos Clientes:
  `[
  { id: 1, score: 20 },
  { id: 2, score: 90 },
]`
- Array com os ids dos CustomerSuccess indisponíveis:
  `[2]`

## Output

O resultado esperado deve ser o id do CS que atende mais clientes. Com esse valor a empresa poderá fazer um plano de ação para contratar mais CS’s de um nível aproximado.

Em caso de empate retornar `0`.

### Exemplo

No input de exemplo, CS's 2 e 4 estão de folga, sendo assim o CS 1 vai atender os clientes de tamanho até 60 (clientes 2, 4, 5, 6), enquanto o CS 3 vai atender os clientes 1 e 3.

Para este exemplo o retorno deve ser `1`, que é o id do CS que atende 4 clientes:

```
1
```

# Requisitos

Para rodar a solução é necessário possuir:

- Node v16.18.1

## Download

Para baixar o projeto clone o repositorio na sua maquina utilizando o comando abaixo no terminal.

`https://github.com/FabianaRibas/RD-Challenge.git`

Acesse o diretorio no terminal utilizando o comando:

`cd RD-Challenge`

## Execução

Verifique se na sua maquina existe o Node v16.18.1 ou superior instalado.

- Digite no terminal:
  `node --version`

- Baixe as dependencias do projeto:
  `npm install`

- Execute a solução:

  `node customer-success-balancing.js`
  ou
  `npm run start`

## Como rodar os testes

No terminal, execute os comandos:

Usando o NPM:
`npm test`

ou Yarn:

```bash
yarn
yarn test
```