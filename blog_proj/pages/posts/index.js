const { default: AllPosts } = require("@/components/posts/AllPosts/AllPosts")

const DUMMY_POSTS = [
  {
    slug: "words-separate-by-dashes3",
    title: "Words Separated by Dashes",
    image: "getting-started.png",
    excerpt:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, perferendis!",
    date: "2021-02-23",
  },
  {
    slug: "words-separate-by-dashes1",
    title: "Words Separated by Dashes",
    image: "getting-started.png",
    excerpt:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, perferendis!",
    date: "2021-02-23",
  },
  {
    slug: "words-separate-by-dashes2",
    title: "Words Separated by Dashes",
    image: "getting-started.png",
    excerpt:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, perferendis!",
    date: "2021-02-23",
  },
];

const AllPostsPage = () => {
  return (
    <AllPosts posts={DUMMY_POSTS}/>
  )
}

export default AllPostsPage