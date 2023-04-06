import { useState, useEffect } from "react";
import postApi from "../services/posts";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);

  function getPosts() {
    postApi.get().then((posts) => setPosts(posts));
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="posts">
      <h1 className="posts-label">All Blog Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
