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
