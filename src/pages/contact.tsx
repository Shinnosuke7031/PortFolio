import React, { FC } from "react";
import Contact from '../views/pages/Contact';
import Layout from '../views/templates/Layout';
import Provider from '../contexts/context';

const ContactPage: FC<{}> = () => {
  return (
    <Provider>
      <Layout>
        <Contact />
      </Layout>
    </Provider>
  );
}
export default ContactPage;
