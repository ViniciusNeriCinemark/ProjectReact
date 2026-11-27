# Etapa 09 — Polimento e build

## 🎯 Objetivo

Revisar o projeto, gerar a **versão de produção** e conhecer os **próximos passos** para continuar evoluindo o blog.

## 📚 Conceitos novos

- **Build de produção**: um pacote otimizado (arquivos menores e mais rápidos) pronto para publicar na internet. É diferente do modo de desenvolvimento (`npm run dev`).
- **`npm run build`**: comando que gera esse pacote na pasta `dist/`.
- **`npm run preview`**: comando que sobe um servidor local para você testar o resultado do build antes de publicar.

## 🛠️ Passo a passo

### 1. Revise a estrutura do projeto

Confira se a sua pasta `src/` está assim:

```
src/
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

### 2. Teste tudo mais uma vez (dev)

Com `npm run dev` rodando, percorra o fluxo completo:

- [ ] A home lista todos os posts.
- [ ] Clicar em um post abre o detalhe.
- [ ] "Voltar para a lista" retorna à home.
- [ ] Uma URL inexistente mostra a página 404.

### 3. Gere o build de produção

Pare o servidor (`Ctrl + C`) e rode:

```bash
npm run build
```

Ao terminar, será criada a pasta `dist/` com o site otimizado. Você deve ver uma mensagem de sucesso com os arquivos gerados e nenhum erro.

### 4. Teste o build localmente

```bash
npm run preview
```

Abra o endereço indicado (geralmente `http://localhost:4173`) e confira se tudo funciona igual ao modo de desenvolvimento.

> 📦 **Publicar o blog:** o conteúdo da pasta `dist/` é um site estático. Você pode publicá-lo gratuitamente em serviços como **Netlify**, **Vercel** ou **GitHub Pages**.
>
> ⚠️ Em SPAs, configure o serviço para redirecionar **todas as rotas** para o `index.html`. Sem isso, abrir `/post/algum-slug` direto pode dar erro 404 no servidor (o Netlify e a Vercel já fazem isso automaticamente para projetos Vite).

## 🎉 Parabéns!

Você construiu uma SPA completa e aprendeu, na prática:

- ✅ Criar um projeto com **Vite**.
- ✅ Estilizar com **Tailwind CSS**.
- ✅ Componentes, **JSX** e **props**.
- ✅ Renderizar listas com **`.map()`** e **`key`**.
- ✅ Roteamento com **React Router** (`Link`, `NavLink`, `Outlet`).
- ✅ Rotas dinâmicas e o hook **`useParams`**.
- ✅ Página **404** com rota curinga.
- ✅ Gerar o **build de produção**.

## 🚀 Próximos passos (desafios)

Quer continuar praticando? Tente adicionar, por conta própria:

1. **Busca/filtro**: um campo de texto na home para filtrar posts pelo título (dica: `useState`).
2. **Filtro por categoria**: botões que mostram só os posts de uma categoria.
3. **Página "Sobre"**: uma nova rota estática (ex.: `/sobre`) com um link no cabeçalho.
4. **Dark mode**: alternar tema claro/escuro (dica: `useState` + classes do Tailwind).
5. **Dados reais**: buscar os posts de uma API pública com `fetch` e o hook `useEffect`.

---

⬅️ Anterior: [Etapa 08 — Página 404 e navegação](08-pagina-404-e-navegacao.md) · [Voltar ao índice](../README.md)
