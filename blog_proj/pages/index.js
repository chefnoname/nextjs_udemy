import FeaturedPosts from "@/components/home-page/FeaturedPosts/FeaturedPosts";
import Hero from "@/components/home-page/Hero/Hero";
import { getFeaturedPosts } from "@/lib/posts-util";
import Head from "next/head";

const HomePage = (props) => {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>The Blog og All Blogs</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPost = getFeaturedPosts();

  return {
    props: {
      posts: featuredPost,
      revalidate: 80,
    },
  };
}

export default HomePage;
