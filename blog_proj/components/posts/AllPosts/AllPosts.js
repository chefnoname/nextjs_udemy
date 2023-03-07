import PostsGrid from "../PostsGrid/PostsGrid";
import classes from "./AllPosts.module.css";

const AllPosts = (props) => {
  return (
    <sectio className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </sectio>
  );
};

export default AllPosts;
