import FeaturedPosts from "@/components/home-page/FeaturedPosts/FeaturedPosts";
import Hero from "@/components/home-page/Hero/Hero";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
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

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
