# Etapa 08 — Página 404 e navegação

## 🎯 Objetivo

Criar uma página **404** para endereços que não existem e garantir que a navegação do blog esteja completa e amigável.

## 📚 Conceitos novos

- **Rota curinga `*`**: uma rota especial com `path="*"` que casa com **qualquer URL** que não bateu com nenhuma outra rota. Perfeita para mostrar uma página "404 - não encontrado".
- **Ordem das rotas**: o React Router escolhe a rota mais específica. A rota `*` funciona como um "senão" (fallback), então costuma ficar por último.

## 🛠️ Passo a passo

### 1. Crie a página NotFound

Em `src/pages/`, crie `NotFound.jsx`:

```jsx
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="text-center">
      <p className="text-6xl font-bold text-blue-700">404</p>
      <h1 className="mt-4 text-2xl font-bold text-gray-900">
        Página não encontrada
      </h1>
      <p className="mt-2 text-gray-600">
        O endereço que você digitou não existe neste blog.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-blue-700 px-5 py-2.5 font-medium text-white hover:bg-blue-800"
      >
        Voltar para o início
      </Link>
    </div>
  )
}

export default NotFound
```

### 2. Registre a rota curinga

Adicione a rota `*` **por último** dentro do layout, em `src/App.jsx`:

```jsx
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="post/:slug" element={<PostDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
```

> Como a rota `*` está **dentro** do `Layout`, a página 404 também aparece com o cabeçalho e o rodapé — mantendo a identidade do site.

## 🧭 Recapitulando a navegação

Neste ponto o blog tem três formas de navegação, todas **sem recarregar a página**:

- **`Link`** — usado no logo do cabeçalho e nos cards. Leva a uma rota.
- **`NavLink`** — usado no menu "Início"; destaca o link da página atual.
- **Rota dinâmica + `useParams`** — leva o usuário ao post certo pela URL.

## ✅ Resultado esperado

- Acessar um endereço inexistente (ex.: `/pagina-que-nao-existe`) mostra a página **404** com um botão para voltar ao início.
- Todos os links navegam instantaneamente, sem "piscar" a tela.

## 🔍 Checkpoint

- [ ] Digitar uma URL qualquer inexistente mostra a página 404 (com cabeçalho e rodapé).
- [ ] O botão "Voltar para o início" leva de volta à lista de posts.
- [ ] O menu "Início" fica destacado quando você está na home.

---

⬅️ Anterior: [Etapa 07 — Página de detalhe](07-pagina-de-detalhe.md) · ⏭️ Próxima: **[Etapa 09 — Polimento e build](09-polimento-e-build.md)** · [Índice](../README.md)
