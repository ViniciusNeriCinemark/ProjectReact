# Etapa 02 — Tailwind CSS

## 🎯 Objetivo

Instalar e configurar o **Tailwind CSS** para estilizar o blog usando classes utilitárias direto no JSX.

## 📚 Conceitos novos

- **Tailwind CSS**: framework de CSS baseado em **classes utilitárias**. Em vez de escrever CSS em arquivos separados, você aplica classes prontas nos elementos.
  - Exemplo: `class="text-xl font-bold text-blue-600"` define tamanho, peso e cor do texto de uma vez.
- **Plugin do Vite**: o Tailwind se integra ao Vite por meio de um plugin, então ele processa as classes automaticamente.

## 🛠️ Passo a passo

### 1. Instale o Tailwind e o plugin do Vite

Com o servidor parado (ou em outro terminal), rode:

```bash
npm install tailwindcss @tailwindcss/vite
```

### 2. Registre o plugin no Vite

Abra `vite.config.js` e deixe assim:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### 3. Importe o Tailwind no CSS

Crie (ou recrie) o arquivo `src/index.css` com **apenas** esta linha:

```css
@import "tailwindcss";
```

### 4. Carregue o CSS na aplicação

Abra `src/main.jsx` e adicione o import do CSS:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### 5. Teste uma classe do Tailwind

Em `src/App.jsx`, aplique algumas classes para confirmar que funciona:

```jsx
function App() {
  return (
    <h1 className="text-3xl font-bold text-blue-700">
      Meu Blog em React
    </h1>
  )
}

export default App
```

> ⚠️ No React usamos **`className`** em vez de `class` (porque `class` é uma palavra reservada do JavaScript).

Se você tinha parado o servidor, rode `npm run dev` novamente.

## ✅ Resultado esperado

O título "Meu Blog em React" agora aparece **maior, em negrito e azul**.

## 🔍 Checkpoint

- [ ] O título mudou de aparência (grande, negrito, azul).
- [ ] Nenhum erro no terminal ou no console do navegador (F12).

> 💡 Se as classes não fizerem efeito, confira se o plugin está em `vite.config.js`, se o `@import "tailwindcss";` está no `index.css` e se o `index.css` está sendo importado no `main.jsx`.

---

⬅️ Anterior: [Etapa 01 — Setup do projeto](01-setup-do-projeto.md) · ⏭️ Próxima: **[Etapa 03 — Componentes e JSX](03-componentes-e-jsx.md)** · [Índice](../README.md)
