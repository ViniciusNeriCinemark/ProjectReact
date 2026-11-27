# Etapa 03 — Componentes e JSX

## 🎯 Objetivo

Entender o que são **componentes**, **JSX** e **props**, criando o cabeçalho (`Header`) e o rodapé (`Footer`) do blog.

## 📚 Conceitos novos

- **Componente**: uma função JavaScript que retorna **JSX** e representa um pedaço da interface (um botão, um cabeçalho, uma página inteira...).
- **JSX**: sintaxe parecida com HTML que escrevemos dentro do JavaScript. É o que o componente **retorna**.
- **Props**: dados que passamos de um componente para outro, como se fossem "argumentos" da função. Deixam os componentes reutilizáveis.

Regras rápidas do JSX:

- Todo componente deve retornar **um único elemento pai** (use uma `<div>` ou `<>...</>` para agrupar).
- Use `className` no lugar de `class`.
- Para colocar JavaScript dentro do JSX, use **chaves**: `{minhaVariavel}`.

## 🛠️ Passo a passo

### 1. Crie o componente Header

Crie a pasta `src/components/` e, dentro dela, o arquivo `Header.jsx`:

```jsx
function Header() {
  return (
    <header className="bg-blue-700 text-white shadow">
      <div className="mx-auto max-w-3xl px-4 py-4">
        <span className="text-xl font-bold">Meu Blog em React</span>
      </div>
    </header>
  )
}

export default Header
```

> `export default` permite que outros arquivos **importem** este componente.

### 2. Crie o componente Footer

Ainda em `src/components/`, crie `Footer.jsx`. Repare como usamos `{ano}` para inserir JavaScript no meio do JSX:

```jsx
function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-6 text-center text-sm text-gray-500">
        © {ano} Meu Blog em React · Feito com React, Vite e Tailwind CSS
      </div>
    </footer>
  )
}

export default Footer
```

### 3. Use os componentes no App

Agora **importe e use** os dois componentes em `src/App.jsx`:

```jsx
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-8">
        <p className="text-gray-700">Conteúdo do blog em breve...</p>
      </main>
      <Footer />
    </div>
  )
}

export default App
```

> Usamos um componente como se fosse uma tag HTML: `<Header />`.

## 🧩 Entendendo props (exemplo rápido)

Um componente fica reutilizável quando recebe **props**. Repare como o mesmo `Saudacao` gera textos diferentes:

```jsx
function Saudacao({ nome }) {
  return <p>Olá, {nome}!</p>
}

// Uso:
<Saudacao nome="Ana" />   // Olá, Ana!
<Saudacao nome="Bruno" /> // Olá, Bruno!
```

Vamos usar exatamente essa ideia nas próximas etapas para exibir cada post.

## ✅ Resultado esperado

A página agora tem um **cabeçalho azul** no topo, um texto no meio e um **rodapé** embaixo com o ano atual.

## 🔍 Checkpoint

- [ ] Existe a pasta `src/components/` com `Header.jsx` e `Footer.jsx`.
- [ ] O cabeçalho azul e o rodapé aparecem na página.
- [ ] O ano no rodapé é o ano atual.

---

⬅️ Anterior: [Etapa 02 — Tailwind CSS](02-tailwind-css.md) · ⏭️ Próxima: **[Etapa 04 — Dados mockados](04-dados-mockados.md)** · [Índice](../README.md)
