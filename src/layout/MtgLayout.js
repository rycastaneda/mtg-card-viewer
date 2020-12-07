import React from 'react';
import Layout from './index'
import IntroLoader from './IntroLoader'
import { css, cx } from "emotion";

const flexedChildren = cx(css`
  width: 100%;
  text-align: center;
  // margin: 0 auto;
  // height: 80vh;
  // overflow-y: auto;
`)

const MtgLayout = ({ children }) => {
  return (
    <Layout>
      <div className={flexedChildren}>
        {children}
      </div>

      <IntroLoader />
    </Layout>
  );
};

export default MtgLayout;