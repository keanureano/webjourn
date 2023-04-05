import ReactMarkdown from "react-markdown";

function Markdown({ content }) {
  return (
    <article className="prose-sm prose">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}

export default Markdown;
