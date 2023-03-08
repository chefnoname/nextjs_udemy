import { getAllPosts } from "@/lib/posts-util";

const { default: AllPosts } = require("@/components/posts/AllPosts/AllPosts");

const AllPostsPage = (props) => {
  return <AllPosts posts={props.allPosts} />;
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts,
    },
  };
}

export default AllPostsPage;
