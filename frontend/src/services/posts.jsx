import axios from "axios";
import moment from "moment";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/posts",
  params: {
    format: "json",
  },
});

const get = async (request) => {
  // const response = await axiosInstance.get(request);
  // const posts = response.data
  const posts = [
    {
      id: 1,
      title: "hello user!",
      content: "",
      owner: {
        id: 1,
        username: "admin",
      },
      date: "2023-04-04T06:36:51.324577Z",
    },
    {
      id: 2,
      title: "hello admin!",
      content: "",
      owner: {
        id: 2,
        username: "user",
      },
      date: "2023-04-04T06:36:58.743325Z",
    },
    {
      id: 3,
      title: "hello again!",
      content: "",
      owner: {
        id: 2,
        username: "user",
      },
      date: "2023-04-05T03:08:34.535087Z",
    },
  ];

  // converts timestamp to moments ago
  const newPosts = posts.map((post) => {
    const unixDate = Date.parse(post.date);
    const momentDate = moment(unixDate).fromNow();
    return { ...post, date: momentDate };
  });

  console.log(newPosts);
  return posts;
};

const postApi = { get };

export default postApi;
