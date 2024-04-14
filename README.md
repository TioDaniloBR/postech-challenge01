<h1>Desafio de Projeto Proposto PósTech FIAP</h1>

<h2>Objetivo</h2>

<p>Desenvolver um sistema de gerenciamento de biblioteca utilizando a última versão do TypeScript. O foco será criar um CRUD (Create, Read, Update, Delete), que se conecta a um banco de dados, podendo ser NoSQL ou SQL.</p>

<h2>Requisitos Funcionais</h2>

<p>Gerenciamento de livros: o objetivo do seu sistema será disponibilizar uma API que tenha as funcionalidades de um CRUD para que uma aplicação Front-end possa gerenciar estes dados.</p>
<p>Estrutura proposta para entidade Livro: cada livro pode possuir um título, autor(a), ISBN, ano de publicação e, caso queira se aventurar, pode adicionar uma Entidade Editora, assim um livro pode fazer parte de uma Editora e uma Editora pode ter uma lista de livros.</p>

<h2>Requisitos Técnicos</h2>

<p>Desenvolvimento do projeto utilizando a versão mais recente do TypeScript para garantir que o seu código esteja atualizado. Integração do sistema a um banco de dados que pode ser um NoSQL ou SQL. Neste cenário, você pode utilizar o Docker ou um banco de dados grátis como o PostgreSQL na plataforma Supabase.</p>

<h2>Iniciando o projeto</h2>

<h3>1.Script Sql</h3>
<h5>Ciação da tabela Books</h5>
<code>
CREATE TABLE "public"."books" (
"id" VARCHAR(250) NOT NULL,
"title" VARCHAR(250) NOT NULL,
"author" VARCHAR(250) NOT NULL,
"isbn" VARCHAR(250) NULL,
"published_at" INTEGER NULL,
"publisher_id" VARCHAR(250) NULL,
CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);
</code>
<h5>Ciação da tabela Publishers</h5>
<code>
CREATE TABLE "public"."publishers" (
"id" VARCHAR(250) NOT NULL,
"name" VARCHAR(250) NOT NULL,
CONSTRAINT "publishers_pkey" PRIMARY KEY ("id")
);
</code>
</br>
<h3>2.Clonar projeto</h3>
<code>git clone </code>
</br>
<h3>3.Instalar dependências</h3>
<code>npm i</code>
</br>
<h3>4. Criação do arquivo .env</h3>
<p>Criar arquivo .env na raiz do projeto baseando-se no arquivo .env_example</p>
<h3>5.Iniciar projeto</h3>
<code>npm start</code>
</br>

<h4>Para a execução do desafio proposto, foram utilizados as sequintes tecnologias:</h4>
<p>1.Typescript<br/>2.Nodejs<br/>3.Express<br/>4.Postgres</p>
