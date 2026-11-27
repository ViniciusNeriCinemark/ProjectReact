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
