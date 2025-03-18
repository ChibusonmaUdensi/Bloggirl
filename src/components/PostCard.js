export default function PostCard({ post }) {
    return (
      <div className="bg-gray-500 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        {/* Post Title */}
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        {/* Post Body */}
        <p className="text-white">{post.body}</p>
      </div>
    );
  }