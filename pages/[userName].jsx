import { NextPage } from "next";

import { Layout } from "../layouts/Layout";
import { Meta } from "../layouts/Meta";
import { Dashboard } from "../containers/Dashbord";

const Home = () => {
    return (
        <Layout meta={<Meta title="Deepdarshan | Github Visualizer" />} displayNav={false} displayFooter={false}>
            <Dashboard />
        </Layout>
    );
};

export default Home;