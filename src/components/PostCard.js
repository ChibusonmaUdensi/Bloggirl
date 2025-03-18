export default function PostCard({ post }) {
    return (
      <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        {/* Post Title */}
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        {/* Post Body */}
        <p className="text-gray-700">{post.body}</p>
      </div>
    );
  }