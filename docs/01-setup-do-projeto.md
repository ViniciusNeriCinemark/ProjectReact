# Etapa 01 — Setup do projeto

## 🎯 Objetivo

Criar o projeto React com o Vite e deixar o servidor de desenvolvimento rodando no seu navegador.

## 📚 Conceitos novos

- **npm**: gerenciador de pacotes do Node.js. Usamos para instalar bibliotecas e rodar comandos.
- **Vite**: ferramenta que cria a estrutura do projeto e serve a aplicação durante o desenvolvimento.
- **Servidor de desenvolvimento**: um "mini-servidor" local que mostra seu site e atualiza a tela automaticamente quando você salva um arquivo.

## 🛠️ Passo a passo

### 1. Abra o terminal

Abra o terminal na pasta onde você guarda seus projetos.

### 2. Crie o projeto com o Vite

Execute o comando abaixo. Ele cria uma pasta chamada `gs-react-spa` já com a estrutura de um projeto React:

```bash
npm create vite@latest gs-react-spa -- --template react
```

> O `--template react` diz ao Vite para usar JavaScript + React (sem TypeScript).

### 3. Entre na pasta e instale as dependências

```bash
cd gs-react-spa
npm install
```

O `npm install` baixa tudo que o projeto precisa para a pasta `node_modules`.

### 4. Rode o servidor de desenvolvimento

```bash
npm run dev
```

O terminal vai mostrar um endereço, normalmente `http://localhost:5173`. Abra-o no navegador.

### 5. Limpe os arquivos de exemplo

O Vite cria uma tela de exemplo. Vamos deixar tudo "limpo" para construir do zero.

Substitua o conteúdo de `src/App.jsx` por:

```jsx
function App() {
  return <h1>Meu Blog em React</h1>
}

export default App
```

Substitua o conteúdo de `src/main.jsx` por (por enquanto sem o `index.css` de exemplo):

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

Você pode **apagar** os arquivos `src/App.css` e `src/index.css` de exemplo (vamos recriar o `index.css` na próxima etapa) e a pasta `src/assets`, se quiser.

## ✅ Resultado esperado

No navegador, em `http://localhost:5173`, aparece um título simples: **Meu Blog em React**.

## 🔍 Checkpoint

- [ ] O comando `npm run dev` está rodando sem erros no terminal.
- [ ] A página mostra o texto "Meu Blog em React".
- [ ] Ao editar o texto em `App.jsx` e salvar, a página atualiza sozinha.

> 💡 **Dica:** deixe o `npm run dev` rodando durante todo o tutorial. Para parar, use `Ctrl + C` no terminal.

---

⏭️ Próxima: **[Etapa 02 — Tailwind CSS](02-tailwind-css.md)** · [Voltar ao índice](../README.md)
