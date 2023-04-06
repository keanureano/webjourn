import ReactMarkdown from "react-markdown";
import ReactPlayer from "react-player";

function YoutubePlayer({ videoId }) {
  return (
    <div className="aspect-video">
      <ReactPlayer
        className="overflow-hidden rounded-lg"
        width="100%"
        height="100%"
        url={`https://www.youtube.com/watch?v=${videoId}`}
      />
    </div>
  );
}

const LinkSeparator = ({ href, children }) => {
  if (href.match(/youtube\.com\/watch/)) {
    const videoId = href.match(/[?&]v=([^&]+)/)[1];
    return <YoutubePlayer videoId={videoId} />;
  }
  return <a href={href}>{children}</a>;
};

const components = {
  a: LinkSeparator,
  p: ({ children }) => <span className="inline-block">{children}</span>,
};

function Post({ post }) {
  return (
    <article className="post">
      <div>
        <h1>{post.title}</h1>
        <p>
          {post.owner.username} {post.date}
        </p>
      </div>
      <ReactMarkdown components={components} children={post.content} />
    </article>
  );
}

export default Post;
