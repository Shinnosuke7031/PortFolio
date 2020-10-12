import React, { FC } from "react";
import Top from '../views/pages/Top';
import Layout from '../views/templates/Layout';
import Provider from '../contexts/context';

const Home: FC<{}> = () => {
  return (
    <Provider>
      <Layout>
        <Top />
      </Layout>
    </Provider>
  );
}
export default Home;
