import PostCard from './PostCard'

// Recebe uma lista de posts e renderiza um PostCard para cada um.
function PostList({ posts }) {
  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList
