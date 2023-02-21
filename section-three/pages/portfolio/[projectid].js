import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname, '<= pathname');
  console.log(router.query, "query");

  return <h1>The Portfolio Project Page</h1>;
};

export default PortfolioProjectPage;
