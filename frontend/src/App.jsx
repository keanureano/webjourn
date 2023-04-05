import { useState, useEffect } from "react";
import postApi from "./services/posts";
import PostMarkdown from "./components/PostMarkdown";

function App() {
  return (
    <div className="p-4">
      <Posts />
    </div>
  );
}

function Posts() {
  const [posts, setPosts] = useState([]);

  function getPosts() {
    postApi.get().then((posts) => setPosts(posts));
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostMarkdown key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
