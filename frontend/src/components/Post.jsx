import ReactMarkdown from "react-markdown";
import ReactPlayer from "react-player";

function YoutubePlayer({ videoId }) {
  return (
    <div className="post-vid-wrapper">
      <ReactPlayer
        className="post-media"
        width="100%"
        height="100%"
        url={`https://www.youtube.com/watch?v=${videoId}`}
      />
    </div>
  );
}

function ImgurImage({ imageUrl }) {
  return (
    <div className="post-pic-wrapper">
      <img
        className="post-pic post-media"
        src={imageUrl}
        alt="embedded imgur"
      />
    </div>
  );
}

const LinkSeparator = ({ href, children }) => {
  if (href.match(/youtube\.com\/watch/)) {
    const videoId = href.match(/[?&]v=([^&]+)/)[1];
    return <YoutubePlayer videoId={videoId} />;
  }
  if (href.match(/imgur\.com/)) {
    const imageId = href.match(/\/(\w+)(\.\w+)?$/)[1];
    const imageUrl = `https://i.imgur.com/${imageId}.jpg`;
    return <ImgurImage imageUrl={imageUrl} />;
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
      <header className="post-header not-prose">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          <h4 className="post-owner">{post.owner.username}</h4>
          <h4 className="post-date">{post.date}</h4>
        </div>
      </header>
      <div className="post-body">
        <ReactMarkdown components={components} children={post.content} />
      </div>
    </article>
  );
}

export default Post;
