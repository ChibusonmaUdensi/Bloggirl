# BLOGGIRL
# Simple Blog Posts Application
A simple Next.js application that fetches and displays blog posts from JSONPlaceholder API.

## Features
* **Home Page**: Displays a collection of blog posts with titles and content loaded during server rendering
* **Search Functionality**: Filter blog posts by title
* **External API Integration**: Fetches data from JSONPlaceholder

## Getting Started
### Prerequisites
* Node.js (v14 or later)
* npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/blog-posts-viewer.git
cd blog-posts-viewer
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open http://localhost:3000 in your browser to see the application.

## Implementation Details
The application displays blog posts fetched from https://jsonplaceholder.typicode.com/posts in a responsive grid layout with search functionality to filter posts by title.