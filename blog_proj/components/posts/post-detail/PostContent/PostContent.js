import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import PostHeader from "../PostHeader/PostHeader";
import classes from "./PostContent.module.css";

const DUMMY_POSTS = {
  slug: "getting-started-with-nextjs",
  title: "Words Separated by Dashes",
  image: "getting-started-with-nextjs.png",
  date: "2021-02-23",
  content: "# This is a first post",
};
const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />

      <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
