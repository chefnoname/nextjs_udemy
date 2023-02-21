import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  // console.log(router.query);

  const loadProjectHandler = () => {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "abs", clientprojectid: "projectPeach" },
    });
  };

  return (
    <div>
      <h1>ClientProjectsPage</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
