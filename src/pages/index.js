import { useState, useMemo } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import PostCard from '../components/PostCard';

export default function Home({ posts: initialPosts }) {
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Filter posts based on search term using useMemo for performance optimization
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, initialPosts]);

  return (
    <div className="container mx-auto p-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center my-6">You found Bloggirl🤭</h1>

      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          // Fallback UI if no posts are found
          <p className="text-center text-gray-500 col-span-full">
            No posts found.
          </p>
        )}
      </div>
    </div>
  );
}

// Fetch posts from the API using SSR
export async function getServerSideProps() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return {
      props: {
        posts: response.data, // Pass fetched posts as props
      },
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [], // Return an empty array if the API call fails
      },
    };
  }
}