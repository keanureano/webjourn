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
  // const posts = response.data
  const posts = [
    {
      id: 1,
      title: "test title!",
      content: "test content",
      owner: {
        id: 1,
        username: "test owner",
      },
      date: "2023-04-04T06:36:51.324577Z",
    },
  ];

  const newPosts = posts.map((post) => {
    const dateNow = moment();
    // if date is less than one month ago, format to moment
    const formattedDate =
      dateNow.diff(post.date, "month") < 1
        ? moment(post.date).fromNow()
        : moment(post.date).format("dddd, MMMM Do YYYY");

    return { ...post, date: formattedDate };
  });

  console.log(newPosts);
  return newPosts;
}

const postApi = { get };

export default postApi;
