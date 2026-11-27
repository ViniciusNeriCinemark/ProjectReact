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
