import React, { FC } from "react";
import Aboutme from '../views/pages/Aboutme';
import Layout from '../views/templates/Layout';
import Provider from '../contexts/context';

const AboutMe: FC<{}> = () => {
  return (
    <Provider>
      <Layout>
        <Aboutme />
      </Layout>
    </Provider>
  );
}
export default AboutMe;
