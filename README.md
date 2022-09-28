# <p align="center"> 📄 Ignews </p>

A aplicação se trata da inscrição de newsletter.

O projeto tem como objetivo por em prática o que está sendo estudado no bootcamp através do desenvolvimento de uma aplicação em ReactJS com NextJS para listagem de posts, autenticação, modelos de pagamentos e inscrição.

Para o desenvolvimento desta aplicação foi utilizado o framework NextJS, aplicando conceitos como consumo de API externas, API Root, Server Side Rendering (SSR), Static Site Generation (SSG), STRIPE para pagamentos das assinaturas, NextAuth para autenticação com Github, FaunaDB para armazenar as informações do usuário em um banco de dados e Headless CMS - Prismic CMS para adição e gerenciamento do conteúdo dos posts.

## Tela da aplicação:

 <img width="900" height="550" src="https://raw.githubusercontent.com/dayana-sog/Ignews/main/public/images/Screenshot%202022-09-28%20at%2010.53.17.png">
<img width="900" height="550" src="https://raw.githubusercontent.com/dayana-sog/Ignews/main/public/images/Screenshot%202022-09-28%20at%2010.53.40.png">
<img width="900" height="550" src="https://raw.githubusercontent.com/dayana-sog/Ignews/main/public/images/Screenshot%202022-09-28%20at%2010.53.59.png">

---

## 🚀 Tecnologias/Ferramentas Utilizadas:

-   [ReactJS](https://reactjs.org/)
-   [NextJS](https://nextjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [SASS](https://sass-lang.com/)
-   [Next-Auth](https://next-auth.js.org/)
-   [Stripe](https://stripe.com/)
-   [FaunaDB](https://fauna.com/)
-   [Prismic CMS](https://prismic.io/)

---

## 📚 Instalação:

Primeiro é necessário instalar:

-   [Stripe CLI](https://stripe.com/docs/stripe-cli)

Criar conta e configurar os serviços externos:

-   [Stripe](https://stripe.com/)
-   [FaunaDB](https://fauna.com/)
-   [Prismic CMS](https://prismic.io/)

Clone o repositório:

```sh
$ git clone https://github.com/dayana-sog/Ignews
```

Aceda a pasta do projeto:

```sh
$ cd Ignews
```

-   Na raiz do projeto crie uma cópia do arquivo .env.local.example
-   Altere o nome do arquivo para .env.local
-   Preencha as variáveis ambiente

Instale as dependências:

```sh
$ yarn
```

Execute o comando stripe listen para ouvir eventos do webhook:

```sh
$ stripe listen --forward-to localhost:3000/api/webhooks
```

Inicie a aplicação:

```sh
$ yarn dev
```

Feito com ♥ by Dayana Gonçalves 👋
