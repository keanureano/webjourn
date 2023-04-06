import axios from "axios";
import moment from "moment";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/posts",
  params: {
    format: "json",
  },
});

async function get(request) {
  // const response = await axiosInstance.get(request);
  // const posts = response.data;
  const posts = [
    {
      id: 6,
      title: "My Favorite Video",
      content:
        "My favorite video on YouTube is This music video. [](https://www.youtube.com/watch?v=dQw4w9WgXcQ) It's a classic '80s song and the video is a fun throwback to that era. Plus, it's also the most famous example of the \"Rickroll\" prank, which always makes me laugh.\r\n\r\nIf you haven't seen it before, click the link above and enjoy! But be warned, you might find yourself singing along to the chorus for the rest of the day.",
      owner: {
        id: 2,
        username: "keanu",
      },
      date: "2022-04-05T05:33:42.717887Z",
    },
    {
      id: 7,
      title: "My Adorable Pet",
      content:
        "Meet my adorable pet, Max! He's a 2-year-old Golden Retriever and the cutest dog you'll ever meet. Check out this picture of him! [](https://i.imgur.com/qGOr17D.jpeg) Max loves going on long walks, playing fetch, and cuddling. He's also great with kids and always puts a smile on everyone's face.\r\n\r\nI'm so lucky to have Max in my life, and I hope this picture of him brightens up your day. Click the link above to see more pictures of him on Imgur!",
      owner: {
        id: 1,
        username: "petlover",
      },
      date: "2023-04-06T12:15:23.532435Z",
    },
    {
      id: 5,
      title: "My Favorite Websites",
      content:
        "Here are some websites that I visit frequently:\r\n\r\n- [Reddit](https://www.reddit.com): A social news and discussion website where users can submit and vote on content.\r\n- [GitHub](https://github.com): A platform for software developers to store and collaborate on code.\r\n- [Stack Overflow](https://stackoverflow.com): A question and answer website for programmers.\r\n- [Medium](https://medium.com): A platform for writers to publish articles on",
      owner: {
        id: 2,
        username: "keanu",
      },
      date: "2023-04-05T05:23:32.365109Z",
    },
  ];

  const newPosts = posts.map((post) => {
    const dateNow = moment();
    // if date is less than one month ago, format to moment
    const formattedDate =
      dateNow.diff(post.date, "month") < 1
        ? moment(post.date).fromNow()
        : moment(post.date).format("YYYY-MM-DD");

    return { ...post, date: formattedDate };
  });

  console.log(newPosts);
  return newPosts;
}

const postApi = { get };

export default postApi;
