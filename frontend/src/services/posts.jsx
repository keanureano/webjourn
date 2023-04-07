import axios from "axios";
import moment from "moment";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/posts",
  params: {
    format: "json",
  },
});

function convertDateToMoment(post) {
  const dateNow = moment();
  const formattedDate =
    dateNow.diff(post.date, "month") < 1
      ? moment(post.date).fromNow()
      : moment(post.date).format("YYYY-MM-DD");
  return { ...post, date: formattedDate };
}

async function get(request) {
  const response = await axiosInstance.get(request);
  const posts = response.data;

  const newPosts = posts.map((post) => {
    const newPost = convertDateToMoment(post);
    return newPost;
  });

  console.log(newPosts);
  return newPosts;
}

const postApi = { get };

export default postApi;
