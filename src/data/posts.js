// Dados mockados dos posts do blog.
// Em um projeto real, viriam de uma API ou banco de dados.
export const posts = [
  {
    id: 1,
    slug: 'primeiros-passos-com-react',
    titulo: 'Primeiros passos com React',
    resumo:
      'Entenda o que é React, por que ele é tão popular e como pensar em componentes ao construir interfaces.',
    conteudo: `React é uma biblioteca JavaScript para construir interfaces de usuário a partir de pequenas peças reutilizáveis chamadas componentes.

Em vez de manipular o HTML diretamente, você descreve como a tela deve aparecer para cada estado, e o React cuida de atualizar o que for necessário.

Ao longo deste blog você vai perceber que quase tudo em React é um componente: um botão, um card, uma página inteira. Aprender a dividir a interface em componentes é o primeiro grande passo.`,
    autor: 'Ada Lovelace',
    data: '2026-01-10',
    categoria: 'Fundamentos',
  },
  {
    id: 2,
    slug: 'o-que-e-uma-spa',
    titulo: 'O que é uma SPA (Single Page Application)',
    resumo:
      'Descubra como aplicações de página única funcionam e por que elas oferecem uma navegação tão fluida.',
    conteudo: `Uma SPA (Single Page Application) é uma aplicação web que carrega uma única página HTML e atualiza o conteúdo dinamicamente conforme o usuário interage, sem recarregar a página inteira.

Isso deixa a navegação muito mais rápida e fluida, parecida com a de um aplicativo nativo.

O React, combinado com uma biblioteca de rotas como o React Router, é uma das formas mais populares de construir SPAs hoje em dia.`,
    autor: 'Alan Turing',
    data: '2026-01-18',
    categoria: 'Conceitos',
  },
  {
    id: 3,
    slug: 'por-que-usar-vite',
    titulo: 'Por que usar o Vite?',
    resumo:
      'Conheça o bundler que tornou o desenvolvimento front-end absurdamente rápido.',
    conteudo: `O Vite é uma ferramenta de build moderna que oferece um servidor de desenvolvimento extremamente rápido e um processo de build otimizado para produção.

Diferente de ferramentas mais antigas, o Vite aproveita os módulos ES nativos do navegador, iniciando o servidor quase instantaneamente, mesmo em projetos grandes.

Por isso ele se tornou a escolha padrão para iniciar novos projetos React.`,
    autor: 'Grace Hopper',
    data: '2026-02-02',
    categoria: 'Ferramentas',
  },
  {
    id: 4,
    slug: 'componentes-e-props',
    titulo: 'Componentes e props na prática',
    resumo:
      'Aprenda a criar componentes reutilizáveis e a passar dados entre eles usando props.',
    conteudo: `Componentes são funções JavaScript que retornam JSX (uma sintaxe parecida com HTML). Cada componente representa uma parte da interface.

Para deixar os componentes flexíveis, passamos dados para eles através de props — pense nelas como os "argumentos" do componente.

Assim, um mesmo componente de card pode exibir posts diferentes apenas recebendo props diferentes.`,
    autor: 'Margaret Hamilton',
    data: '2026-02-14',
    categoria: 'Fundamentos',
  },
  {
    id: 5,
    slug: 'estilizando-com-tailwind',
    titulo: 'Estilizando com Tailwind CSS',
    resumo:
      'Veja como o Tailwind acelera a estilização usando classes utilitárias direto no JSX.',
    conteudo: `O Tailwind CSS é um framework de CSS baseado em classes utilitárias. Em vez de escrever CSS em arquivos separados, você aplica classes prontas diretamente nos elementos.

Por exemplo, "text-xl font-bold text-blue-600" define tamanho, peso e cor do texto de uma só vez.

Isso mantém o estilo próximo da marcação e evita ficar alternando entre arquivos o tempo todo.`,
    autor: 'Katherine Johnson',
    data: '2026-02-28',
    categoria: 'Estilização',
  },
  {
    id: 6,
    slug: 'roteamento-com-react-router',
    titulo: 'Roteamento com React Router',
    resumo:
      'Entenda como criar várias páginas em uma SPA usando o React Router.',
    conteudo: `Em uma SPA não existem várias páginas HTML: existe uma só. O React Router simula a navegação entre "páginas" trocando quais componentes são exibidos conforme a URL.

Você define rotas associando um caminho (path) a um componente. Quando a URL muda, o Router mostra o componente correspondente.

Também é possível criar rotas dinâmicas, como /post/:slug, para exibir conteúdos diferentes usando o mesmo componente.`,
    autor: 'Barbara Liskov',
    data: '2026-03-09',
    categoria: 'Roteamento',
  },
]

// Função auxiliar para encontrar um post pelo seu slug.
export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug)
}
