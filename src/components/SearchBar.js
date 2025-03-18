export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <input
        type="text"
        placeholder="Search posts by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 mb-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
    );
  }