import { useState, useEffect } from "react";
import postApi from "./services/posts";

function App() {
  return (
    <div>
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
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.date}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
