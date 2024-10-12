To-Do List API
Descrição

A To-Do List API é uma API RESTful desenvolvida para gerenciar tarefas. O projeto permite realizar operações CRUD (Criar, Ler, Atualizar e Deletar) sobre tarefas e também possibilita a autenticação de usuários, garantindo a segurança e personalização das interações. Além disso, a API suporta a criação de tags para categorizar as tarefas.

Autores
@Guilhermevl7

Tecnologias Utilizadas:

Node.js: Plataforma JavaScript para construir a API.

Express: Framework para criar a API.

MongoDB: Banco de dados NoSQL para armazenar dados.

Mongoose: Biblioteca para modelar objetos MongoDB no Node.js.

JWT (JSON Web Tokens): Autenticação segura de usuários.

Requisitos

Antes de começar, verifique se você possui as seguintes ferramentas instaladas:

Node.js (versão 14 ou superior)

MongoDB (pode ser local ou em nuvem, por exemplo, MongoDB Atlas)

Instalação

Clone o repositório:

git clone https://github.com/Guilhermevl7/To-Do-List-API.git
Acesse o diretório do projeto:

cd To-Do-List-API
Instale as dependências: Execute o comando abaixo para instalar todas as dependências listadas no arquivo package.json:

npm install

Configuração do ambiente: 

Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

SECRET_KEY= chave_secreta
DATABASE_URL= <DATABASE_URL>
PORT=3000

Inicialização

Inicie o servidor: Após configurar o ambiente, inicie o servidor com o comando:

npm start

O servidor estará rodando em http://localhost:3000.

Endpoints da API

Usuários:

POST /api/register: Registra um novo usuário.

POST /api/login: Faz login de um usuário e gera um token JWT.


Tarefas:

GET /api/tasks: Retorna todas as tarefas do usuário autenticado.

POST /api/tasks: Cria uma nova tarefa.

GET /api/tasks/:id_da_tarefa: Retorna uma tarefa específica pelo ID.

PUT /api/tasks/:id_da_tarefa: Atualiza uma tarefa pelo ID.

DELETE /api/tasks/:id_da_tarefa: Deleta uma tarefa pelo ID.


Tags:

GET /api/tags: Retorna todas as tags do usuário autenticado.

POST /api/tags: Cria uma nova tags.

GET /api/tags/:id_da_tag: Retorna uma tags específica pelo ID.

PUT /api/tags/:id_da_tag: Atualiza uma tags pelo ID.

DELETE /api/tags/:id_da_tag: Deleta uma tags pelo ID.
