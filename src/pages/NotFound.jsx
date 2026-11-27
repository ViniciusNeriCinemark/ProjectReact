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
