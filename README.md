# Aplicação Descentralizada (DAPP) na plataforma Ethereum 

## Descrição
Aplicação descentralizada (DAPP) que utiliza a plataforma de Smart Contracts na Blockchain, Ethereum, para simular um processo de eleição.

## Instalação
1. Instalar NodeJS. -> https://nodejs.org/
2. Instalar dependências genéricas, executando o comando do NPM: <__npm install --global --production windows-build-tools__>
3. Executar o comando do NPM, no diretório do projeto: <__npm config set msvs_version 2015 --global__>
4. Clonar esse repositório do GIT, executando o comando do GIT:  <__git clone https://github.com/samantha-kelly/dapp.git__>
5. Instalar dependências do projeto no diretório do projeto, executando o comando do NPM: <__npm install__>
 

## Execução da Aplicação
1. Executar o comando do NPM, no diretório do projeto: <__npm start__>
2. Acessar a aplicação em: <__http://localhost:3003/votacao__>

## Execução de Testes Automatizados
1. Iniciar a blockchain de desenvolvimento, em memória, com o comando: <__testrpc --account="0x59b8091232507861837a2887df81cfc87056207937b6dfe190d2bd56fbb56958,10000000000000000000000000000"__>
2. Executar o comando do NPM, no diretório do projeto: <__npm test__>
