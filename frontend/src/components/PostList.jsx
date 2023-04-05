import { useState, useEffect } from "react";
import postApi from "../services/posts";
import PostMarkdown from "./PostMarkdown";

function PostList() {
  const [posts, setPosts] = useState([]);

  function getPosts() {
    postApi.get().then((posts) => setPosts(posts));
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <PostMarkdown key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
