import FeaturedPosts from "@/components/home-page/FeaturedPosts/FeaturedPosts";
import Hero from "@/components/home-page/Hero/Hero";
import { getFeaturedPosts } from "@/lib/posts-util";

const HomePage = (props) => {
  const { posts } = props;

  return (
    <>
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
