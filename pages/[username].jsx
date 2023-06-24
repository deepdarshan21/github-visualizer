import { NextPage } from "next";

import { Layout } from "../layouts/Layout";
import { Meta } from "../layouts/Meta";
import { Dashboard } from "../containers/Dashbord";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const username = router.query.username;
  return (
    <Layout
      meta={<Meta title={`${username} | Github Visualizer`} />}
      displayNav={false}
      displayFooter={false}
    >
      <Dashboard />
    </Layout>
  );
};

export default Home;
