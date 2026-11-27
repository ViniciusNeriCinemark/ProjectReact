# Meu Blog em React — Tutorial passo a passo

Bem-vindo(a)! Este é um tutorial **auto-guiado** em que você vai construir, do zero, um **blog** no formato **SPA (Single Page Application)** usando **React**, **Vite** e **Tailwind CSS**.

Cada etapa está em um arquivo separado, na ordem correta. Faça uma de cada vez, sem pressa: ao final de cada etapa há um **checkpoint** para você confirmar que está tudo funcionando antes de seguir.

---

## O que você vai construir

Um blog simples, porém completo, com:

- Uma **página inicial** que lista vários posts.
- Uma **página de detalhe** para ler cada post individualmente.
- Uma **página 404** para endereços que não existem.
- **Navegação instantânea** entre as páginas, sem recarregar o site.

Os posts são **dados mockados** (fixos no código), então você não precisa de banco de dados nem servidor.

> **O que é uma SPA?** Uma _Single Page Application_ é um site que carrega **uma única página HTML** e troca o conteúdo dinamicamente conforme você navega. A sensação é de um aplicativo: rápido e sem "piscar" a cada clique.

> **Por que Vite?** O Vite é uma ferramenta moderna que inicia o ambiente de desenvolvimento quase instantaneamente e recarrega suas mudanças na hora. Hoje é a forma padrão de começar projetos React.

---

## Pré-requisitos

- **Node.js 18 ou superior** instalado ([baixe aqui](https://nodejs.org)). Verifique com `node -v`.
- Noções básicas de **HTML, CSS e JavaScript**.
- Um editor de código (recomendamos o **VS Code**).
- Nenhum conhecimento prévio de React é necessário — vamos explicar tudo. 🙂

---

## Como usar este tutorial

1. Siga as etapas **na ordem**, de cima para baixo.
2. Digite o código você mesmo sempre que puder — é assim que se aprende.
3. Ao ver um bloco **Checkpoint**, pare e confira o resultado antes de continuar.

---

## Índice das etapas

| # | Etapa | O que você aprende |
|---|-------|--------------------|
| 01 | [Setup do projeto](docs/01-setup-do-projeto.md) | Criar o projeto com Vite e rodar o servidor |
| 02 | [Tailwind CSS](docs/02-tailwind-css.md) | Instalar e configurar o Tailwind |
| 03 | [Componentes e JSX](docs/03-componentes-e-jsx.md) | Criar componentes, JSX e props |
| 04 | [Dados mockados](docs/04-dados-mockados.md) | Guardar os posts em um arquivo de dados |
| 05 | [Listando os posts](docs/05-listando-posts.md) | Renderizar listas com `.map` |
| 06 | [Roteamento](docs/06-roteamento.md) | Criar várias páginas com React Router |
| 07 | [Página de detalhe](docs/07-pagina-de-detalhe.md) | Rotas dinâmicas e `useParams` |
| 08 | [Página 404 e navegação](docs/08-pagina-404-e-navegacao.md) | Rota curinga e links de navegação |
| 09 | [Polimento e build](docs/09-polimento-e-build.md) | Gerar a versão de produção |

---

## Estrutura final do projeto

Ao terminar o tutorial, você terá esta estrutura:

```
gs-react-spa/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── posts.js
    ├── components/
    │   ├── Layout.jsx
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── PostCard.jsx
    │   └── PostList.jsx
    └── pages/
        ├── Home.jsx
        ├── PostDetail.jsx
        └── NotFound.jsx
```

Pronto para começar? 👉 **[Etapa 01 — Setup do projeto](docs/01-setup-do-projeto.md)**
