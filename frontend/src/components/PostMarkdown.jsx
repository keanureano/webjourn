import ReactMarkdown from "react-markdown";

function PostMarkdown({ post }) {
  return (
    <article className="prose-sm prose prose-h1:text-2xl prose-h2:text-lg">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostMarkdown;
