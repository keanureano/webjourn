import { useState, useEffect } from "react";
import postApi from "./services/posts";
import Markdown from "./components/Markdown";
const markdown =
  "# A demo of `react-markdown`\r\n\r\n`react-markdown` is a markdown component for React.\r\n\r\n\uD83D\uDC49 Changes are re-rendered as you type.\r\n\r\n\uD83D\uDC48 Try writing some markdown on the left.\r\n\r\n## Overview\r\n\r\n* Follows [CommonMark](https://commonmark.org)\r\n* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)\r\n* Renders actual React elements instead of using `dangerouslySetInnerHTML`\r\n* Lets you define your own components (to render `MyHeading` instead of `h1`)\r\n* Has a lot of plugins\r\n\r\n## Table of contents\r\n\r\nHere is an example of a plugin in action\r\n([`remark-toc`](https://github.com/remarkjs/remark-toc)).\r\nThis section is replaced by an actual table of contents.\r\n\r\n## Syntax highlighting\r\n\r\nHere is an example of a plugin to highlight code:\r\n[`rehype-highlight`](https://github.com/rehypejs/rehype-highlight).\r\n\r\n```js\r\nimport React from 'react'\r\nimport ReactDOM from 'react-dom'\r\nimport ReactMarkdown from 'react-markdown'\r\nimport rehypeHighlight from 'rehype-highlight'\r\n\r\nReactDOM.render(\r\n  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</ReactMarkdown>,\r\n  document.querySelector('#content')\r\n)\r\n```\r\n\r\nPretty neat, eh?\r\n\r\n## GitHub flavored markdown (GFM)\r\n\r\nFor GFM, you can *also* use a plugin:\r\n[`remark-gfm`](https://github.com/remarkjs/react-markdown#use).\r\nIt adds support for GitHub-specific extensions to the language:\r\ntables, strikethrough, tasklists, and literal URLs.\r\n\r\nThese features **do not work by default**.\r\n\uD83D\uDC46 Use the toggle above to add the plugin.\r\n\r\n| Feature    | Support              |\r\n| ---------: | :------------------- |\r\n| CommonMark | 100%                 |\r\n| GFM        | 100% w/ `remark-gfm` |\r\n\r\n~~strikethrough~~\r\n\r\n* [ ] task list\r\n* [x] checked item\r\n\r\nhttps://example.com\r\n\r\n## HTML in markdown\r\n\r\n\u26A0\uFE0F HTML in markdown is quite unsafe, but if you want to support it, you can\r\nuse [`rehype-raw`](https://github.com/rehypejs/rehype-raw).\r\nYou should probably combine it with\r\n[`rehype-sanitize`](https://github.com/rehypejs/rehype-sanitize).\r\n\r\n<blockquote>\r\n  \uD83D\uDC46 Use the toggle above to add the plugin.\r\n</blockquote>\r\n\r\n## Components\r\n\r\nYou can pass components to change things:\r\n\r\n```js\r\nimport React from 'react'\r\nimport ReactDOM from 'react-dom'\r\nimport ReactMarkdown from 'react-markdown'\r\nimport MyFancyRule from './components/my-fancy-rule.js'\r\n\r\nReactDOM.render(\r\n  <ReactMarkdown\r\n    components={{\r\n      // Use h2s instead of h1s\r\n      h1: 'h2',\r\n      // Use a component instead of hrs\r\n      hr: ({node, ...props}) => <MyFancyRule {...props} />\r\n    }}\r\n  >\r\n    # Your markdown here\r\n  </ReactMarkdown>,\r\n  document.querySelector('#content')\r\n)\r\n```\r\n\r\n## More info?\r\n\r\nMuch more info is available in the\r\n[readme on GitHub](https://github.com/remarkjs/react-markdown)!\r\n\r\n***\r\n\r\nA component by [Espen Hovlandsdal](https://espen.codes/)";

function App() {
  return (
    <div>
      <Markdown content={markdown} />
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
