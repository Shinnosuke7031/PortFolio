import React, { FC } from "react";
import Output from '../views/pages/Portfolio';
import Layout from '../views/templates/Layout';
import Provider from '../contexts/context';

const Home: FC<{}> = () => {
  return (
    <Provider>
      <Layout>
        <Output />
      </Layout>
    </Provider>
  );
}
export default Home;
