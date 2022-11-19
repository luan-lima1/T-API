# API - REST desenvolvida em Nest.js, Typescript e Postgres.

Esta API é um CRUD, capaz de realizar cadastros simples e consulta a API externas.
E utiliza variáveis de ambiente no arquivo .env para realizar a conexão com o banco de dados, é crucial setar essas variáveis com as informações necessárias do seu banco de dados Postgres para uma conexão correta. Neste projeto, eu utilizei o SGBD DBeaver.

# Como utilizar:
Abra o projeto e instale o pacote NPM com o comando => npm install
Em seguida, inicie projeto utilizando => npm run start
O log "[NestApplication] Nest application successfully started" indica que aplicação iniciou corretamente.

# Como Realizar o Cadastro:
Utilizando o Insomnia, crie uma rota com o verbo POST para o seguinte endpoint => 
http://localhost:3000/api/v1/users

Envie em json 
{
  "nome": "seu nome aqui",
  "email": "seu.email.aqui@teste.com",
  "password": "suasenhaaqui"
}

A aplicação irá retornar um código 200, indicando que houve sucesso no cadastro, e também um id o qual poderemos usar para testar as outras rotas.

# Rotas Get, Update, Delete:
Rota GET: crie um verbo GET, e com o ID providenciado, ele deve ser inserido via parâmetro no seguinte endpoint
http://localhost:3000/api/v1/users/seuIDaqui e ele irá retornar o usuário atribuído a este ID.

Rota UPDATE: crie um verbo PUT, e com o ID providenciado, ele deve ser inserido via parâmetro no seguinte endpoint
http://localhost:3000/api/v1/users/seuIDaqui e em JSON deve ser inserido o valor a ser alterado. Exemplo:
{
	"nome": "outroNomeAqui"
}

Rota DELETE: crie um verbo DELETE e com o ID providenciado, ele deve ser inserido via parâmetro no seguinte endpoint
http://localhost:3000/api/v1/users/seuIDaqui um código 201 indica que o usuário foi deletado com sucesso. 

# Utilizando a API Externa:

A API externa consumida nesta aplicação é a DummyJson, que tem uma série de retornos variados, os retornos selecionados para esta aplicação são dados de usuários imaginários.

Rota GET: crie um verbo GET, e com um ID de sua escolha, ele deve ser inserido via parâmetro no seguinte endpoint:

Exemplo: http://localhost:3000/api/v1/users/dummy/1

A resposta será um exemplo de usuário fornecido pela API Externa

# Executar Aplicativo no Ambiente de Desenvolvimento:

  npm run start:dev

# Para Compilar a Aplicação em Javascript:

  nest build