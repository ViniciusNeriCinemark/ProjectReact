# Etapa 07 — Página de detalhe

## 🎯 Objetivo

Criar a página que exibe **um post completo**, usando uma **rota dinâmica** e o hook `useParams` para descobrir qual post mostrar.

## 📚 Conceitos novos

- **Rota dinâmica**: uma rota com uma parte variável, escrita com dois-pontos. Ex.: `post/:slug`. O `:slug` funciona como um "curinga" que captura o valor da URL.
- **Hook `useParams`**: função do React Router que **lê os valores** dos parâmetros dinâmicos da URL. Se a URL é `/post/por-que-usar-vite`, então `useParams()` devolve `{ slug: 'por-que-usar-vite' }`.
- **Hook**: em React, funções que começam com `use...` e adicionam recursos aos componentes. Você **usa**, o React cuida do resto.

## 🛠️ Passo a passo

### 1. Crie a página PostDetail

Em `src/pages/`, crie `PostDetail.jsx`:

```jsx
import { useParams, Link } from 'react-router-dom'
import { getPostBySlug } from '../data/posts'

function PostDetail() {
  // useParams lê os parâmetros dinâmicos da URL, como o :slug.
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  // Se o slug não corresponder a nenhum post, avisamos o usuário.
  if (!post) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Post não encontrado
        </h1>
        <p className="mt-2 text-gray-600">
          O artigo que você procura não existe ou foi removido.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block font-medium text-blue-700 hover:underline"
        >
          ← Voltar para a página inicial
        </Link>
      </div>
    )
  }

  // Formata a data no padrão brasileiro.
  const dataFormatada = new Date(post.data).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article>
      <Link
        to="/"
        className="mb-6 inline-block text-sm font-medium text-blue-700 hover:underline"
      >
        ← Voltar para a lista
      </Link>
      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
        {post.categoria}
      </span>
      <h1 className="mt-3 text-3xl font-bold text-gray-900">{post.titulo}</h1>
      <div className="mt-2 text-sm text-gray-500">
        Por {post.autor} · {dataFormatada}
      </div>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-700">
        {post.conteudo.split('\n\n').map((paragrafo, indice) => (
          <p key={indice}>{paragrafo}</p>
        ))}
      </div>
    </article>
  )
}

export default PostDetail
```

> **Como o conteúdo vira parágrafos?** No `posts.js`, o `conteudo` tem quebras de linha duplas separando os parágrafos. O `.split('\n\n')` transforma o texto em um array de parágrafos, e o `.map()` cria um `<p>` para cada um.

### 2. Registre a rota dinâmica

Adicione a rota `post/:slug` em `src/App.jsx`:

```jsx
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="post/:slug" element={<PostDetail />} />
      </Route>
    </Routes>
  )
}

export default App
```

## ✅ Resultado esperado

Ao clicar em um post na home, você vê a **página completa** do artigo: categoria, título, autor, data formatada e o texto dividido em parágrafos. O link "← Voltar para a lista" retorna à home.

## 🔍 Checkpoint

- [ ] Clicar em um card abre a página do post correspondente.
- [ ] O conteúdo aparece dividido em parágrafos.
- [ ] A data aparece formatada (ex.: "10 de janeiro de 2026").
- [ ] Digitar na barra de endereço um slug que não existe (ex.: `/post/xyz`) mostra a mensagem "Post não encontrado".

---

⬅️ Anterior: [Etapa 06 — Roteamento](06-roteamento.md) · ⏭️ Próxima: **[Etapa 08 — Página 404 e navegação](08-pagina-404-e-navegacao.md)** · [Índice](../README.md)
