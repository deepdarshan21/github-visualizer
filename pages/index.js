import { NextPage } from "next";

import { Layout } from "../layouts/Layout";
import { Meta } from "../layouts/Meta";
import { Landing } from "../containers/Landing";

const Home = () => {
    return (
        <Layout meta={<Meta title="Github Visualizer" />} displayNav={false} displayFooter={false}>
            <Landing />
        </Layout>
    );
};

export default Home;