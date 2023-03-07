import Image from "next/image";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/abs.jpg"
          alt="An image showing AbdulWali"
          width={300}
          height={300}
        />
      </div>
      <h1>Yo! It's your boy AbdulWali</h1>
      <p>
        Other than suffering from Imposter Syndrome - I am walking talking meme.
      </p>
    </section>
  );
};

export default Hero;
