import React from 'react';
import Page from '../components/layouts/Page';
import Content from '../components/layouts/Content';
import BlogIndex from '../components/BlogIndex';

function HomePage() {
  return (
    <Page wide={false} pageTitle="Home Page">
      <div className="row justify-content-center">
        <div className="col-sm-12">
          <Content width="w-100 pt-5" cssClassNames="">
            <h1>Blog Index </h1>
            <h4>Using NPM WPAPI</h4>
          </Content>
          <Content width="w-100 pt-2" cssClassNames="">
            <BlogIndex />
          </Content>
        </div>
      </div>
    </Page>
  );
}

export default HomePage;
