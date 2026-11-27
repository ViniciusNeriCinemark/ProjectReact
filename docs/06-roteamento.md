# Etapa 06 — Roteamento

## 🎯 Objetivo

Transformar o projeto em uma **SPA de verdade** com várias páginas, usando o **React Router**. Vamos criar um layout reaproveitável e a página inicial (`Home`).

## 📚 Conceitos novos

- **React Router**: biblioteca que controla qual componente é exibido conforme a **URL**, sem recarregar a página.
- **`BrowserRouter`**: componente que "liga" o roteamento na aplicação. Envolve tudo.
- **`Routes` e `Route`**: definem o mapa de rotas. Cada `Route` associa um `path` (caminho) a um `element` (componente).
- **`Outlet`**: marcador que indica **onde** a página da rota atual deve aparecer dentro de um layout.
- **Rota `index`**: a rota "padrão" de um caminho (o que aparece em `/`).

## 🛠️ Passo a passo

### 1. Instale o React Router

```bash
npm install react-router-dom
```

### 2. Ative o Router na aplicação

Envolva o `App` com o `BrowserRouter` em `src/main.jsx`:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

### 3. Crie o componente Layout

Em `src/components/`, crie `Layout.jsx`. Ele reúne o `Header`, o `Footer` e um `Outlet` no meio — assim o cabeçalho e o rodapé aparecem em **todas** as páginas:

```jsx
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// Estrutura comum a todas as páginas: cabeçalho, conteúdo e rodapé.
// O <Outlet /> é onde o React Router injeta a página da rota atual.
function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
```

### 4. Crie a página Home

Crie a pasta `src/pages/` e, dentro dela, `Home.jsx`. Movemos a listagem de posts para cá:

```jsx
import { posts } from '../data/posts'
import PostList from '../components/PostList'

function Home() {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold text-gray-900">Últimos posts</h1>
      <p className="mb-8 text-gray-600">
        Artigos para quem está começando com React, Vite e Tailwind CSS.
      </p>
      <PostList posts={posts} />
    </div>
  )
}

export default Home
```

### 5. Defina as rotas no App

Reescreva `src/App.jsx`. Agora ele só cuida do **mapa de rotas**:

```jsx
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
```

> O `Home` está **aninhado** dentro do `Layout`. Por isso ele aparece dentro do `<Outlet />`.

### 6. Faça o cabeçalho navegar com Link

No React Router, usamos **`Link`** no lugar de `<a>` para navegar **sem recarregar** a página. Atualize `src/components/Header.jsx`:

```jsx
import { NavLink, Link } from 'react-router-dom'

function Header() {
  // Deixa o link ativo com uma cor diferente.
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-white font-semibold'
      : 'text-blue-100 hover:text-white transition-colors'

  return (
    <header className="bg-blue-700 text-white shadow">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold">
          Meu Blog em React
        </Link>
        <nav className="flex gap-4 text-sm">
          <NavLink to="/" className={linkClass} end>
            Início
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
```

> **`NavLink`** é como o `Link`, mas sabe quando está "ativo" (na página atual), permitindo destacá-lo. O `end` garante que o link "Início" só fica ativo exatamente em `/`.

### 7. Torne os cards clicáveis

Volte em `src/components/PostCard.jsx` e transforme o título em um `Link` para `/post/:slug`:

```jsx
import { Link } from 'react-router-dom'

// Recebe um post via props e exibe um resumo clicável.
function PostCard({ post }) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
        {post.categoria}
      </span>
      <h2 className="mt-3 text-xl font-bold text-gray-900">
        <Link to={`/post/${post.slug}`} className="hover:text-blue-700">
          {post.titulo}
        </Link>
      </h2>
      <p className="mt-2 text-gray-600">{post.resumo}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>Por {post.autor}</span>
        <Link
          to={`/post/${post.slug}`}
          className="font-medium text-blue-700 hover:underline"
        >
          Ler mais →
        </Link>
      </div>
    </article>
  )
}

export default PostCard
```

## ✅ Resultado esperado

- A página inicial continua listando os posts, agora dentro do layout (cabeçalho + rodapé).
- Os títulos e o "Ler mais →" são **clicáveis**. Ao clicar, a URL muda para `/post/algum-slug` (a página ainda ficará em branco — vamos criá-la na próxima etapa).

## 🔍 Checkpoint

- [ ] `npm run dev` roda sem erros.
- [ ] O cabeçalho e o rodapé aparecem na home.
- [ ] Clicar em um card muda a URL para `/post/...` (mesmo que a área do conteúdo fique vazia).

---

⬅️ Anterior: [Etapa 05 — Listando os posts](05-listando-posts.md) · ⏭️ Próxima: **[Etapa 07 — Página de detalhe](07-pagina-de-detalhe.md)** · [Índice](../README.md)
