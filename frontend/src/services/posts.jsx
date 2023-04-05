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
      title: "hello user!",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni dolorem magnam aperiam. Explicabo, illo non. Exercitationem ea illum iure qui vitae iste, reiciendis harum ipsam maxime numquam necessitatibus ab?",
      owner: {
        id: 1,
        username: "admin",
      },
      date: "2023-04-04T06:36:51.324577Z",
    },
    {
      id: 2,
      title: "hello admin!",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum minima cumque quam, reiciendis voluptate ut ea officiis porro autem distinctio, deleniti veniam ad repellendus eaque repellat velit non placeat suscipit.",
      owner: {
        id: 2,
        username: "user",
      },
      date: "2023-04-04T06:36:58.743325Z",
    },
    {
      id: 3,
      title: "hello again!",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe omnis sint sequi ullam voluptate minima, necessitatibus reprehenderit illum consequatur ea, repudiandae voluptas consectetur voluptatem. Eveniet asperiores similique consequatur voluptatum accusamus?",
      owner: {
        id: 2,
        username: "user",
      },
      date: "2023-04-05T03:08:34.535087Z",
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
