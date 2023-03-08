import Image from "next/image";
import Link from "next/link";
import classes from "./PostItem.module.css";

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });


  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
console.log(imagePath, 'postGrid compo')
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div>
          <Image
            className={classes.image}
            src={imagePath}
            alt='Post Grid Compo'
            width={300}
            height={200}
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time> {formattedDate} </time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;