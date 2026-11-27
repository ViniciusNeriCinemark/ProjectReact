# Etapa 05 — Listando os posts

## 🎯 Objetivo

Exibir todos os posts na tela criando dois componentes: o `PostCard` (mostra **um** post) e o `PostList` (mostra **vários**).

## 📚 Conceitos novos

- **Renderizar listas com `.map()`**: para transformar um array de dados em vários elementos JSX, usamos o método `.map()`.
- **`key`**: ao renderizar listas, o React pede uma prop especial `key` **única** em cada item. Isso ajuda o React a saber o que mudou. Usaremos o `id` do post.

## 🛠️ Passo a passo

### 1. Crie o componente PostCard

Em `src/components/`, crie `PostCard.jsx`. Ele **recebe um post via props** e mostra um resumo:

```jsx
// Recebe um post via props e exibe um resumo.
function PostCard({ post }) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
        {post.categoria}
      </span>
      <h2 className="mt-3 text-xl font-bold text-gray-900">{post.titulo}</h2>
      <p className="mt-2 text-gray-600">{post.resumo}</p>
      <div className="mt-4 text-sm text-gray-500">Por {post.autor}</div>
    </article>
  )
}

export default PostCard
```

> Ainda **sem link** para o post — vamos adicionar os links na Etapa 06, depois de configurar o roteamento.

### 2. Crie o componente PostList

Ainda em `src/components/`, crie `PostList.jsx`. Ele **recebe a lista** e usa `.map()` para gerar um `PostCard` por post:

```jsx
import PostCard from './PostCard'

// Recebe uma lista de posts e renderiza um PostCard para cada um.
function PostList({ posts }) {
  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList
```

> Repare no `key={post.id}`: é o identificador único que o React precisa.

### 3. Mostre a lista no App

Atualize `src/App.jsx` para importar os dados e o `PostList`:

```jsx
import { posts } from './data/posts'
import Header from './components/Header'
import Footer from './components/Footer'
import PostList from './components/PostList'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Últimos posts</h1>
        <PostList posts={posts} />
      </main>
      <Footer />
    </div>
  )
}

export default App
```

## ✅ Resultado esperado

A página mostra **todos os posts** em cards, cada um com categoria, título, resumo e autor.

## 🔍 Checkpoint

- [ ] Todos os posts do arquivo `posts.js` aparecem na tela.
- [ ] Ao passar o mouse sobre um card, a sombra aumenta levemente.
- [ ] No console do navegador (F12) **não** aparece o aviso sobre `key`.

> 💡 Se aparecer o aviso *"Each child in a list should have a unique key prop"*, confira se você colocou `key={post.id}` no `.map()`.

---

⬅️ Anterior: [Etapa 04 — Dados mockados](04-dados-mockados.md) · ⏭️ Próxima: **[Etapa 06 — Roteamento](06-roteamento.md)** · [Índice](../README.md)
