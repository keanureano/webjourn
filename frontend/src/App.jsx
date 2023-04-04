import { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  params: {
    format: "json",
  },
});

function App() {
  useEffect(() => {
    api.get("/posts").then((res) => console.log(res));
  }, []);

  return <div>Hello world</div>;
}

export default App;
