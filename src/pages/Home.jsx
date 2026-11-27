import { posts } from '../data/posts'
import PostList from '../components/PostList'

function Home() {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold text-gray-900">Últimos posts</h1>
      <p className="mb-8 text-gray-600">
        Artigos para quem está começando com React, Vite e Tailwind CSS.
      </p>
      <PostList posts={posts} />
    </div>
  )
}

export default Home
