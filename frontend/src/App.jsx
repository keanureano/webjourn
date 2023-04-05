import { useState, useEffect } from "react";
import postApi from "./services/posts";

function App() {
  const [posts, setPosts] = useState([]);
  function getPosts() {
    postApi.get().then((posts) => setPosts(posts));
  }
  useEffect(() => {
    getPosts();
  }, []);

  return <div></div>;
}

export default App;
