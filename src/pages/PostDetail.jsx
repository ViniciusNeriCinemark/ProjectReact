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
