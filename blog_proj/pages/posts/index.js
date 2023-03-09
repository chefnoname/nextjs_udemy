import { getAllPosts } from "@/lib/posts-util";
import Head from "next/head";

const { default: AllPosts } = require("@/components/posts/AllPosts/AllPosts");

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>

      <AllPosts posts={props.allPosts} />
    </>
  );
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
