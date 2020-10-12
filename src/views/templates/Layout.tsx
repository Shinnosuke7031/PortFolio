import React, { FC, ReactNode } from 'react';
import Header from '../organisms/Header';
import styles from './template.module.css';
import Provider from '../../contexts/context';

type Props = {
  children: ReactNode;
}

const Layout: FC<Props> = (props) => {
  return (
      <div className={styles.container}>  
        <Header />
        <div className={styles.wrapper}>
          {props.children}
        </div>
      </div>
  );
}

export default Layout;