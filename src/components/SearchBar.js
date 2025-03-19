export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search posts..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className=" text-gray-900 w-full p-3 mb-8 border border-gray-900 rounded-lg focus:outline-none focus:ring-0 focus:ring-gray-900"
    />
  );
}