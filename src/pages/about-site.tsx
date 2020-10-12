import React, { FC } from "react";
import AboutThisSite from '../views/pages/AboutThisSite';
import Layout from '../views/templates/Layout';
import Provider from '../contexts/context';

const AboutSite: FC<{}> = () => {
  return (
    <Provider>
      <Layout>
        <AboutThisSite />
      </Layout>
    </Provider>
  );
}
export default AboutSite;
