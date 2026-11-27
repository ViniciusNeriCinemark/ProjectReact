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
